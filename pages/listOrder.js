const selectors = require("../selectors/selectors");
const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../.env") });
const { CSV_FILE_PATH } = process.env;
const csvFileAbsolutePath = path.resolve(__dirname, "../", CSV_FILE_PATH);

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
}

async function importCSVMerchizeOrder(page) {
  await page.waitForSelector(selectors.listOrder.importCSVMerchizeButton, {
    state: "visible",
  });

  await page
    .locator(selectors.listOrder.importCSVMerchizeButton)
    .setInputFiles(csvFileAbsolutePath);
}

async function importTiktokOrder(page) {
  await page.waitForSelector(selectors.listOrder.importTiktokButton, {
    state: "visible",
  });
  await page.locator(selectors.listOrder.importTiktokButton).click();
}

async function importFBAOrder(page) {
  await page.waitForSelector(selectors.listOrder.importFBAButton, {
    state: "visible",
  });
  await page.locator(selectors.listOrder.importFBAButton).click();
}

module.exports = {
  checkPopupGotIt,
  clickCreateOrderButton,
  clickImportOrderButton,
  importCSVMerchizeOrder,
  importTiktokOrder,
  importFBAOrder,
};
