const selectors = require("../selectors/selectors");
const { expect } = require("@playwright/test");
const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../.env") });
const {
  IMPORT_CSV_MERCHIZE_FILE_NAME,
  IMPORT_TIKTOK_SHIPPING_FILE_NAME,
  IMPORT_FBA_FILE_NAME,
} = process.env;

async function checkPopupGotIt(page) {
  const gotItButton = page.locator(selectors.listOrder.gotItButton);
  if (await gotItButton.isVisible()) {
    await gotItButton.click();
  }
}

async function clickCreateOrderButton(page) {
  await page.waitForSelector(selectors.listOrder.createOrderButton, {
    state: "visible",
  });
  await page.locator(selectors.listOrder.createOrderButton).click();
}

async function clickImportOrderButton(page) {
  await page.waitForSelector(selectors.listOrder.importOrderButton, {
    state: "visible",
  });
  await page.locator(selectors.listOrder.importOrderButton).click();

  const title = page.locator(selectors.listOrder.importTitleModal);
  await expect(title).toHaveText("Import external orders");
}

async function importCSVMerchizeOrder(page) {
  const csvFileAbsolutePath = path.resolve(
    __dirname,
    "../import_files",
    IMPORT_CSV_MERCHIZE_FILE_NAME
  );

  await page.waitForSelector(selectors.listOrder.importCSVMerchizeButton, {
    state: "visible",
  });

  await page
    .locator(selectors.listOrder.importCSVMerchizeButton)
    .setInputFiles(csvFileAbsolutePath);

  const text = await page
    .locator(`(${selectors.listOrder.msgImportFile})[1]`)
    .textContent();
  expect(text).toContain(
    `Completed import file "${IMPORT_CSV_MERCHIZE_FILE_NAME}"`
  );
}

async function importTiktokOrder(page) {
  const csvFileAbsolutePath = path.resolve(
    __dirname,
    "../import_files",
    IMPORT_TIKTOK_SHIPPING_FILE_NAME
  );

  await page.waitForSelector(selectors.listOrder.importTiktokShippingButton, {
    state: "visible",
  });

  await page
    .locator(selectors.listOrder.importTiktokShippingButton)
    .setInputFiles(csvFileAbsolutePath);

  const text = await page
    .locator(`(${selectors.listOrder.msgImportFile})[2]`)
    .textContent();
  expect(text).toContain(
    `Completed import file "${IMPORT_TIKTOK_SHIPPING_FILE_NAME}"`
  );
}

async function importFBAOrder(page) {
  const csvFileAbsolutePath = path.resolve(
    __dirname,
    "../import_files",
    IMPORT_FBA_FILE_NAME
  );

  await page.waitForSelector(selectors.listOrder.importFBAButton, {
    state: "visible",
  });

  await page
    .locator(selectors.listOrder.importFBAButton)
    .setInputFiles(csvFileAbsolutePath);

  const text = await page
    .locator(`(${selectors.listOrder.msgImportFile})[3]`)
    .textContent();
  expect(text).toContain(`Completed import file "${IMPORT_FBA_FILE_NAME}"`);
}

module.exports = {
  checkPopupGotIt,
  clickCreateOrderButton,
  clickImportOrderButton,
  importCSVMerchizeOrder,
  importTiktokOrder,
  importFBAOrder,
};
