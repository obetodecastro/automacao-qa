
import { test, expect } from "@playwright/test";

test("A página inicial deve ser exibida", async ({ page }) => {
  await page.goto("https://playwright.dev/");

  await expect(
    page.getByRole("link", { name: "Get started" })
  ).toBeVisible();
});
