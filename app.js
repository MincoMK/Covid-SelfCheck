const {Builder, By, Key, until} = require('selenium-webdriver');
const { reigonCode,
        schoolLevel,
        schoolName,
        name,
        birthday,
        password,
        waitSeconds } = require("./config.js");

(async function example() {
  let driver = await new Builder().forBrowser('chrome').build();
  try {
    await driver.get('https://hcs.eduro.go.kr/');
    await driver.findElement(By.id("btnConfirm2")).click();
    await driver.findElement(By.id("schul_name_input")).click();
    await driver.findElement(By.css(`#sidolabel>option[value="${reigonCode}"]`)).click();
    await driver.findElement(By.css(`#crseScCode>option[value="${schoolLevel}"]`)).click();
    await driver.findElement(By.id("orgname")).sendKeys(schoolName);
    await driver.findElement(By.className("searchBtn")).click();
    await driver.findElement(By.css("a[role=\"radio\"]")).click();
    await driver.findElement(By.className("layerFullBtn")).click();
    await driver.findElement(By.id("user_name_input")).sendKeys(name);
    await driver.findElement(By.id("birthday_input")).sendKeys(birthday);
    await driver.findElement(By.id("btnConfirm")).click();
    await driver.sleep(1000);
    await driver.findElement(By.id("password")).click();
    let pw = password.split('');
    await driver.findElement(By.css(`a[aria-label="${pw[0]}"]`)).click();
    await driver.findElement(By.css(`a[aria-label="${pw[1]}"]`)).click();
    await driver.findElement(By.css(`a[aria-label="${pw[2]}"]`)).click();
    await driver.findElement(By.css(`a[aria-label="${pw[3]}"]`)).click();
    await driver.findElement(By.id("btnConfirm")).click();
    let selectUserBtn = By.className("btn");
    await driver.wait(until.elementLocated(selectUserBtn));
    await driver.findElement(selectUserBtn).click();
    await driver.wait(until.elementLocated(By.id("survey_q1a1")));
    await driver.findElement(By.id("survey_q1a1")).click();
    await driver.findElement(By.id("survey_q2a1")).click();
    await driver.findElement(By.id("survey_q3a1")).click();
    await driver.findElement(By.id("btnConfirm")).click();
    await driver.sleep(waitSeconds);
  } finally {
    await driver.quit();
  }
})();
