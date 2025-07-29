import { test, expect } from "@playwright/test";
import { login_bo } from "../pages/loginPage";
import { selectStores } from "../pages/listStorePage";
import { gotoOrderPage } from "../pages/backoffice";
import {
  checkPopupGotIt,
  clickImportOrderButton,
  importCSVMerchizeOrder,
  importTiktokOrder,
  importFBAOrder,
} from "../pages/listOrder";
const selectors = require("../selectors/selectors");
const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../.env") });
const { BO_DOMAIN } = process.env;

test("Back office - Import normal, seller shipping order by csv files", async ({ page }) => {
  // Navigate to the backoffice domain
  await page.goto(BO_DOMAIN);
  const title = page.locator(selectors.login.titleLoginPage);
  await expect(title).toHaveText("Login to Merchize");

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

  // Import normal, seller shipping order by csv files
  await importCSVMerchizeOrder(page);

  // Import TikTok shipping order by csv files
  // await importTiktokOrder(page);

  // Import FBA order by csv files
  // await importFBAOrder(page);

});