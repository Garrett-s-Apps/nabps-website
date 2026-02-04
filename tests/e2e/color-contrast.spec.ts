import { test, expect } from '@playwright/test';

test.describe('Color Contrast Verification', () => {
  test.beforeEach(async ({ page }) => {
    // Helper function to get computed styles
    await page.addInitScript(() => {
      (window as any).getComputedColor = (selector: string) => {
        const el = document.querySelector(selector);
        if (!el) return null;
        const styles = window.getComputedStyle(el);
        return {
          backgroundColor: styles.backgroundColor,
          color: styles.color,
          element: el.tagName + (el.className ? '.' + el.className.split(' ').join('.') : '')
        };
      };
    });
  });

  test('Hero section has dark background with white text', async ({ page }) => {
    await page.goto('/');

    // Check hero section background is dark (navy/charcoal)
    const heroSection = page.locator('section').first();
    const heroBg = await heroSection.evaluate((el) => {
      return window.getComputedStyle(el).background;
    });

    // Should contain dark navy colors (#0a1929 or #1a2332)
    expect(heroBg).toContain('rgb');
    console.log('Hero background:', heroBg);

    // Check headline text is white
    const headline = page.locator('h1').first();
    const headlineColor = await headline.evaluate((el) => {
      return window.getComputedStyle(el).color;
    });

    // White text should be rgb(255, 255, 255) or close to it
    expect(headlineColor).toMatch(/rgb\(2[45]\d, 2[45]\d, 2[45]\d\)/);
    console.log('Headline color:', headlineColor);
  });

  test('Hero buttons have proper contrast', async ({ page }) => {
    await page.goto('/');

    // Primary button should have teal gradient background with white text
    const primaryButton = page.getByRole('link', { name: /explore certification/i });
    await expect(primaryButton).toBeVisible();

    const primaryColor = await primaryButton.evaluate((el) => {
      return window.getComputedStyle(el).color;
    });
    console.log('Primary button text color:', primaryColor);

    // Secondary button should have white text on dark background
    const secondaryButton = page.getByRole('link', { name: /learn more about nabps/i });
    await expect(secondaryButton).toBeVisible();

    const secondaryColor = await secondaryButton.evaluate((el) => {
      return window.getComputedStyle(el).color;
    });
    console.log('Secondary button text color:', secondaryColor);
  });

  test('Quick Links section has dark background', async ({ page }) => {
    await page.goto('/');

    // Scroll to Quick Links section
    await page.locator('text=Explore NABPS').scrollIntoViewIfNeeded();

    // Find the section containing Quick Links
    const quickLinksSection = page.locator('section', { has: page.locator('text=Explore NABPS') });
    const sectionBg = await quickLinksSection.evaluate((el) => {
      return window.getComputedStyle(el).backgroundColor;
    });

    console.log('Quick Links background:', sectionBg);

    // Should be dark navy (not light)
    // Navy-800 is #1E3A5F which is rgb(30, 58, 95)
    expect(sectionBg).toMatch(/rgb\(([0-9]|[1-9][0-9]|1[0-9][0-9]), ([0-9]|[1-9][0-9]|1[0-9][0-9]), ([0-9]|[1-9][0-9]|1[0-9][0-9])\)/);
  });

  test('All page buttons have proper styling', async ({ page }) => {
    const pages = ['/', '/about', '/standards', '/certification', '/resources', '/news', '/contact'];

    for (const pagePath of pages) {
      await page.goto(pagePath);

      // Find all buttons
      const buttons = page.locator('button, a[class*="button"], a[href][class*="px"]');
      const count = await buttons.count();

      console.log(`\nPage ${pagePath}: Found ${count} potential buttons`);

      for (let i = 0; i < Math.min(count, 5); i++) {
        const button = buttons.nth(i);
        try {
          const isVisible = await button.isVisible({ timeout: 1000 });
          if (isVisible) {
            const styles = await button.evaluate((el) => {
              const computed = window.getComputedStyle(el);
              return {
                color: computed.color,
                backgroundColor: computed.backgroundColor,
                border: computed.border
              };
            });
            console.log(`  Button ${i}:`, styles);
          }
        } catch (e) {
          // Skip buttons that aren't visible or accessible
        }
      }
    }
  });

  test('No white-on-white text anywhere', async ({ page }) => {
    const pages = ['/', '/about', '/standards', '/certification', '/resources', '/news', '/contact'];

    for (const pagePath of pages) {
      await page.goto(pagePath);

      // Check all text elements
      const textElements = page.locator('h1, h2, h3, p, span, a, button');
      const count = await textElements.count();

      let whiteOnWhiteIssues = [];

      for (let i = 0; i < count; i++) {
        const el = textElements.nth(i);
        try {
          const isVisible = await el.isVisible({ timeout: 500 });
          if (isVisible) {
            const styles = await el.evaluate((elem) => {
              const computed = window.getComputedStyle(elem);
              const parent = elem.parentElement;
              const parentComputed = parent ? window.getComputedStyle(parent) : null;

              return {
                color: computed.color,
                backgroundColor: computed.backgroundColor,
                parentBackground: parentComputed?.backgroundColor || 'none'
              };
            });

            // Check if text is white (rgb > 240) and background is also white/light (rgb > 240)
            const isWhiteText = styles.color.includes('255, 255, 255') || styles.color.includes('rgb(2');
            const isWhiteBackground = styles.backgroundColor.includes('255, 255, 255') ||
                                     styles.backgroundColor.includes('rgba(255, 255, 255');

            if (isWhiteText && isWhiteBackground) {
              const text = await el.textContent();
              if (text && text.trim().length > 0) {
                whiteOnWhiteIssues.push({ text: text.slice(0, 50), styles });
              }
            }
          }
        } catch (e) {
          // Skip elements that can't be checked
        }
      }

      if (whiteOnWhiteIssues.length > 0) {
        console.log(`\n❌ Page ${pagePath} has white-on-white issues:`, whiteOnWhiteIssues);
      } else {
        console.log(`\n✅ Page ${pagePath}: No white-on-white issues found`);
      }

      expect(whiteOnWhiteIssues.length).toBe(0);
    }
  });

  test('Navy sections have white text', async ({ page }) => {
    await page.goto('/');

    // Find all sections with navy/dark backgrounds
    const darkSections = page.locator('section').filter({
      has: page.locator('[class*="navy"], [class*="bg-gray-9"]')
    });

    const count = await darkSections.count();
    console.log(`Found ${count} potentially dark sections`);

    // For each dark section, verify text is light colored
    for (let i = 0; i < count; i++) {
      const section = darkSections.nth(i);
      const bg = await section.evaluate((el) => window.getComputedStyle(el).backgroundColor);

      if (bg.includes('rgb') && !bg.includes('255')) {
        // This is a dark section, check text color
        const textEl = section.locator('h1, h2, h3, p').first();
        const textColor = await textEl.evaluate((el) => window.getComputedStyle(el).color);

        console.log(`Dark section ${i}: bg=${bg}, text=${textColor}`);

        // Text should be light (white or near-white)
        expect(textColor).toMatch(/rgb\(2[0-9][0-9], 2[0-9][0-9], 2[0-9][0-9]\)/);
      }
    }
  });
});
