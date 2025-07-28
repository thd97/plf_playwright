const { ppid } = require("process");

const selectors = {
  login: {
    emailInput: '//input[@name="email"]',
    passwordInput: '//input[@name="password"]',
    loginButton: '//button[text()="Login now"]'
  },
  listStore: {
    createStoreButton: '//button[text()="Logout"]',
    logoutButton: '//button[text()="Logout"]',
  },
  backOffice: {
    listOrderMenu: '//span[text()="Orders"]',
  },
  listOrder: {
    gotItButton: '//button[text()="Got it"]',
    createOrderButton: '//button[text()="Create Order"]',
    importOrderButton: '//a[@href="/a/orders/create-order"]/following-sibling::button',
    importCSVMerchizeButton: '//input[@id="importExternalOrder"]',
    importTiktokShippingButton: '//input[@id="importTiTokShippingOrder"]',
    importFBAButton: '//input[@id="importExternalFbaOrder"]'
  }
};

module.exports = selectors;