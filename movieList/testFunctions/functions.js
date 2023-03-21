const { By } = require("selenium-webdriver")

const movieName = "Spirited Away"

const addButton = async (driver) => {
    let searchBar = await driver.findElement(By.name('form-input'))
    await searchBar.sendKeys(`${movieName}`)
    await driver.sleep(2000)
    let addButton = await driver.findElement(By.name('add-button'))
    await addButton.click()
    await driver.sleep(2000)
}

const checkChecked = async (driver) => {
    let targetMovie = await driver.findElement(By.xpath(`//span[text()='${movieName}']`))
    await targetMovie.click()
    await driver.sleep(2000)
    expect(await driver.findElement(By.className("checked"))).toEqual(await driver.findElement(By.className("checked")))
    await driver.sleep(2000)
}

module.exports = {
    addButton,
    checkChecked
}