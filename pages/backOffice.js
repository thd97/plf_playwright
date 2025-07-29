const selectors = require("../selectors/selectors");
const { expect } = require("@playwright/test");

async function gotoOrderPage(page) {
  await page.waitForSelector(selectors.backOffice.listOrderMenu, {
    state: "visible",
  });
  await page.locator(selectors.backOffice.listOrderMenu).click();

  const title = page.locator(selectors.listOrder.titlePageOrders);
  await expect(title).toHaveText("Orders");
}

module.exports = { gotoOrderPage };
