const looksSame = require('looks-same');
const chalk = require('chalk');
const log = console.log;

export interface Config {
    src: string,
    target: string
}

const diff = (cfg: Config) => {
    const { src, target } = cfg;

    looksSame(src, target, (error, { equal }) => {
        log(chalk.green(error, equal));
    });
}

export {
    diff
}