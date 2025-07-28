import { test, expect } from "@playwright/test";
import { login_bo } from "../pages/loginPage";
import { selectStores } from "../pages/listStorePage";
import { gotoOrderPage } from "../pages/backoffice";
import {
  checkPopupGotIt,
  clickImportOrderButton,
  importCSVMerchizeOrder,
} from "../pages/listOrder";
const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../.env") });
const { BO_DOMAIN } = process.env;

test("Back office - Import merchize csv orders", async ({ page }) => {
  // Navigate to the backoffice domain
  await page.goto(BO_DOMAIN);

  // Maximize the browser window
  // await page.setViewportSize({ width: 1920, height: 1080 });

  // Login to the backoffice
  await login_bo(page);

  // Select the store
  await selectStores(page);

  // Navigate to the order page
  await gotoOrderPage(page);

  // Dismiss all tutorial tooltips
  await checkPopupGotIt(page);

  // Click the "Import Order" button
  await clickImportOrderButton(page);

  // Select import CSV Merchize button
  await importCSVMerchizeOrder(page);

  await page.waitForTimeout(20000);
});
