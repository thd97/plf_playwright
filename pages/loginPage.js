const selectors = require('../selectors/selectors');
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });
const { BO_EMAIL, BO_PASSWORD } = process.env;

async function login_bo(page) {
  await page.locator(selectors.login.emailInput).fill(BO_EMAIL);
  await page.locator(selectors.login.passwordInput).fill(BO_PASSWORD);
  await page.locator(selectors.login.loginButton).click();
}

module.exports = { login_bo };