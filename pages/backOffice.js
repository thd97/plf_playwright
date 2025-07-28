const selectors = require("../selectors/selectors");

async function gotoOrderPage(page) {
  await page.waitForSelector(selectors.backOffice.listOrderMenu, {
    state: "visible",
  });
  await page.locator(selectors.backOffice.listOrderMenu).click();
}

module.exports = { gotoOrderPage };
