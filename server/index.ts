const chalk = require('chalk');
const Koa = require('koa');
const app = new Koa();
const log = console.log;

app.use(require("koa-static")(__dirname + "./../dist"));

app.listen(3000);
log(chalk.green('server start at localhost:3000'));