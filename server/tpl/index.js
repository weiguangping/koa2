const normalTpl = require('./normal')
const ejs = require('./ejs')
const pug = require('./pug')
module.exports = {
  normal: normalTpl,
  ejsTpl: ejs,
  pugTpl: pug
}
