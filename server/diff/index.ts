const looksSame = require('looks-same');
// const chalk = require('chalk');
// const log = console.log;

export interface Config {
    src: string,
    target: string
}

const diff = (cfg: Config) => {
    const { src, target } = cfg;
    return new Promise((resolve) => {
        looksSame(src, target, (error, res) => {
            resolve({ error, res});
        });
    })
}

export {
    diff
}