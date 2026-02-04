import { test, expect } from "@playwright/test";

test.describe("Navigation", () => {
  test("should navigate to About page", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("link", { name: "About" }).click();
    await expect(page).toHaveURL(/.*about/);
    await expect(page.getByRole("heading", { name: /About NABPS/i })).toBeVisible();
  });

  test("should navigate to Standards page", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("link", { name: "Standards", exact: true }).click();
    await expect(page).toHaveURL(/.*standards/);
    await expect(page.getByRole("heading", { name: /NABPS Standards/i })).toBeVisible();
  });

  test("should navigate to Certification page", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("link", { name: "Certification" }).click();
    await expect(page).toHaveURL(/.*certification/);
    await expect(page.getByRole("heading", { name: /NABPS Certification/i })).toBeVisible();
  });

  test("should navigate to Members page", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("link", { name: "Members" }).click();
    await expect(page).toHaveURL(/.*members/);
    await expect(page.getByRole("heading", { name: /Certified Vendor Directory/i })).toBeVisible();
  });

  test("should navigate to Resources page", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("link", { name: "Resources" }).click();
    await expect(page).toHaveURL(/.*resources/);
    await expect(page.getByRole("heading", { name: /Resource Library/i })).toBeVisible();
  });

  test("should navigate to News page", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("link", { name: "News" }).click();
    await expect(page).toHaveURL(/.*news/);
    await expect(page.getByRole("heading", { name: /News & Announcements/i })).toBeVisible();
  });

  test("should navigate to Contact page", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("link", { name: "Contact" }).click();
    await expect(page).toHaveURL(/.*contact/);
    await expect(page.getByRole("heading", { name: /Contact NABPS/i })).toBeVisible();
  });

  test("should return to homepage from logo", async ({ page }) => {
    await page.goto("/about");
    await page.getByAlt("NABPS Logo").click();
    await expect(page).toHaveURL("/");
  });
});
