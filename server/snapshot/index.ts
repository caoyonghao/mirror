const path = require('path');
const chalk = require('chalk');
const puppeteer = require('puppeteer');
const log = console.log;

const getSnapshot = async () => {
    const browser = await puppeteer.launch({
        headless: true
    })
    console.log('ready to get snapshot')
    const page = await browser.newPage()
    const filePath = path.resolve(process.cwd(), './tmp/snapshot/1.png');
    log(chalk.yellow(filePath));
    await page.goto('http://www.baidu.com')
    await page.screenshot({
        path: filePath
    })
    await browser.close();
};

export { getSnapshot };