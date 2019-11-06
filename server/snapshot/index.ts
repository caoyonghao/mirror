const path = require('path');
const chalk = require('chalk');
const puppeteer = require('puppeteer');
const log = console.log;

const SNAPSHOT_PATH_PREFIX = './tmp/snapshot/';

export interface Config {
    pageItems: PageItem[]
}

export interface PageItem {
    url: string,
    fileName?: string,
    floder?: string
}

const _takeSnapshot = async (pageItem: PageItem) => {
    const { fileName, url, floder } = pageItem;
    const browser = await puppeteer.launch({
        headless: true
    });
    const page = await browser.newPage()
    const filePath = path.resolve(
        process.cwd(),
        SNAPSHOT_PATH_PREFIX,
        floder || '',
        fileName || `${new Date().getTime()}.png`);
    log(chalk.yellow(filePath));
    await page.goto(url);
    await page.screenshot({
        path: filePath
    })
    await browser.close();
};

const getSnapshot = async (cfg: Config) => {
    cfg.pageItems.forEach((pageItem: PageItem) => {
        _takeSnapshot(pageItem);
    })
}

export { getSnapshot };