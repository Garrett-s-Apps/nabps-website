import { test, expect } from "@playwright/test";

test.describe("Contact Form", () => {
  test("should display contact form", async ({ page }) => {
    await page.goto("/contact");
    await expect(page.getByLabel(/Full Name/i)).toBeVisible();
    await expect(page.getByLabel(/Email Address/i)).toBeVisible();
    await expect(page.getByLabel(/Subject/i)).toBeVisible();
    await expect(page.getByLabel(/Message/i)).toBeVisible();
  });

  test("should show validation errors for empty form", async ({ page }) => {
    await page.goto("/contact");
    await page.getByRole("button", { name: /Send Message/i }).click();

    // Should show validation errors
    await expect(page.getByText(/Name must be at least 2 characters/i)).toBeVisible();
    await expect(page.getByText(/Invalid email address/i)).toBeVisible();
  });

  test("should show validation for invalid email", async ({ page }) => {
    await page.goto("/contact");
    await page.getByLabel(/Email Address/i).fill("invalid-email");
    await page.getByRole("button", { name: /Send Message/i }).click();
    await expect(page.getByText(/Invalid email address/i)).toBeVisible();
  });

  test("should submit valid form", async ({ page }) => {
    await page.goto("/contact");

    await page.getByLabel(/Full Name/i).fill("Test User");
    await page.getByLabel(/Email Address/i).fill("test@example.com");
    await page.getByLabel(/Organization/i).fill("Test Company");
    await page.getByLabel(/Subject/i).fill("Test Subject for E2E");
    await page.getByLabel(/Message/i).fill("This is a test message for E2E testing.");

    await page.getByRole("button", { name: /Send Message/i }).click();

    // Should show success message
    await expect(page.getByText(/Thank you for your message/i)).toBeVisible();
  });
});
