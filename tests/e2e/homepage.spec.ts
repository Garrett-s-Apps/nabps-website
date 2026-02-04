import { test, expect } from "@playwright/test";

test.describe("Homepage", () => {
  test("should load successfully", async ({ page }) => {
    await page.goto("/");
    await expect(page).toHaveTitle(/NABPS/);
  });

  test("should display hero section", async ({ page }) => {
    await page.goto("/");
    await expect(
      page.getByRole("heading", { name: /Setting the Standard for Ballot Printing Integrity/i })
    ).toBeVisible();
  });

  test("should display NABPS logo", async ({ page }) => {
    await page.goto("/");
    const logo = page.getByAlt("NABPS Seal");
    await expect(logo).toBeVisible();
  });

  test("should have working CTAs", async ({ page }) => {
    await page.goto("/");
    const certificationButton = page.getByRole("link", { name: /Explore Certification/i });
    await expect(certificationButton).toBeVisible();
    await certificationButton.click();
    await expect(page).toHaveURL(/.*certification/);
  });

  test("should display founding members section", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByText(/Founded by Industry Leaders/i)).toBeVisible();
    await expect(page.getByText(/Runbeck Election Services/i)).toBeVisible();
  });

  test("should display quick links", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByText(/Certification Standards/i)).toBeVisible();
    await expect(page.getByText(/Find Certified Vendors/i)).toBeVisible();
  });
});
