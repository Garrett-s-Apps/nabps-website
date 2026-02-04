import { test, expect } from "@playwright/test";

test.describe("Vendor Directory", () => {
  test("should display vendor list", async ({ page }) => {
    await page.goto("/members");
    await expect(page.getByText(/Runbeck Election Services/i)).toBeVisible();
    await expect(page.getByText(/SeaChange Print Innovations/i)).toBeVisible();
  });

  test("should filter by certification level", async ({ page }) => {
    await page.goto("/members");

    // Check all vendors are visible initially
    const initialCount = await page.getByText(/View Profile/i).count();
    expect(initialCount).toBeGreaterThan(0);

    // Filter by Gold certification
    await page.getByRole("checkbox", { name: /Gold/i }).check();

    // Should show fewer vendors
    const goldVendors = await page.locator('[class*="group"]').filter({ hasText: /Gold/i }).count();
    expect(goldVendors).toBeGreaterThan(0);
  });

  test("should filter by state", async ({ page }) => {
    await page.goto("/members");

    // Filter by Arizona
    await page.getByRole("checkbox", { name: "Arizona" }).check();

    // Should show vendors serving Arizona
    await expect(page.getByText(/Showing/i)).toBeVisible();
  });

  test("should clear filters", async ({ page }) => {
    await page.goto("/members");

    // Apply a filter
    await page.getByRole("checkbox", { name: /Gold/i }).check();

    // Clear filters
    await page.getByRole("button", { name: /Clear all/i }).click();

    // All vendors should be visible again
    const allVendors = await page.getByText(/View Profile/i).count();
    expect(allVendors).toBeGreaterThan(3);
  });

  test("should navigate to vendor detail page", async ({ page }) => {
    await page.goto("/members");
    await page.getByRole("link", { name: /Runbeck Election Services/i }).first().click();
    await expect(page).toHaveURL(/.*members\/runbeck-election-services/);
    await expect(page.getByRole("heading", { name: /Runbeck Election Services/i })).toBeVisible();
  });

  test("should display vendor details", async ({ page }) => {
    await page.goto("/members/runbeck-election-services");
    await expect(page.getByText(/Headquarters/i)).toBeVisible();
    await expect(page.getByText(/States Served/i)).toBeVisible();
    await expect(page.getByText(/Certification Details/i)).toBeVisible();
  });
});
