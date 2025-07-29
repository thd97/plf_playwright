const { ppid } = require("process");

const selectors = {
  login: {
    titleLoginPage: '//h1[@class="titleForm"]',
    emailInput: '//input[@name="email"]',
    passwordInput: '//input[@name="password"]',
    loginButton: '//button[text()="Login now"]'
  },
  listStore: {
    createStoreButton: '//button[text()="Logout"]',
    logoutButton: '//button[text()="Logout"]',
  },
  backOffice: {
    storeName: '//div[@class="SiteName"]',
    listOrderMenu: '//span[text()="Orders"]',
  },
  listOrder: {
    gotItButton: '//button[text()="Got it"]',
    titlePageOrders: '//h1[@class="PageTitle OrdersPageTitleContainer__Title"]',
    createOrderButton: '//button[text()="Create Order"]',
    importOrderButton: '//a[@href="/a/orders/create-order"]/following-sibling::button',
    importTitleModal: '//h5[@class="modal-title"]',
    importCSVMerchizeButton: '//input[@id="importExternalOrder"]',
    importTiktokShippingButton: '//input[@id="importTiTokShippingOrder"]',
    importFBAButton: '//input[@id="importExternalFbaOrder"]',
    msgImportFile: '//div[@class="Content"]//div//div'
  }
};

module.exports = selectors;