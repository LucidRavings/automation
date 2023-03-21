const { Builder, Capabilities } = require('selenium-webdriver')

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

const { addButton, checkChecked } = require("./testFunctions/functions")

beforeAll(async () => {
    await driver.get('http://127.0.0.1:5500/movieList/index.html')
})

afterAll(async () => {
    await driver.quit()
})

test('Testing add button functionality', async () => {
    await addButton(driver)
    await driver.sleep(2000)
})

test('Testing if movie names can be crossed off', async () => {
    await checkChecked(driver)
    await driver.sleep(2000)
})

test('', async = () => {

})

