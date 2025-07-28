const selectors = require("../selectors/selectors");
const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../.env") });
const { STORE_NAME } = process.env;

async function selectStores(page) {
  await page.waitForSelector(`//button[contains(text(), '${STORE_NAME}')]`, {
    state: "visible",
  });
  await page
    .locator(`//button[contains(text(), '${STORE_NAME}')]`)
    .scrollIntoViewIfNeeded();
  await page.locator(`//button[contains(text(), '${STORE_NAME}')]`).click();
}

async function createStore(page) {
  await page.waitForSelector(selectors.listStore.createStoreButton, {
    state: "visible",
  });
  await page.locator(selectors.listStore.createStoreButton).click();
}

async function logout(page) {
  await page.waitForSelector(selectors.listStore.logoutButton, {
    state: "visible",
  });
  await page.locator(selectors.listStore.logoutButton).click();
}

module.exports = { selectStores };
