const Koa = require('koa2')
const app = new Koa()
// const {normal, ejsTpl, pugTpl} = require('./tpl')
// const ejs = require('ejs')
// const pug = require('pug')
const views = require('koa-views')
const {resolve} = require('path')
app.use(views(resolve(__dirname, './views'), {
  extension: 'pug'
}))
app.use(async(ctx, next) => {
  await ctx.render('index', {
    you: 'Luke',
    me: 'darker'
  })
})
// app.use(async(ctx, next) => {
//   ctx.type = 'text/html;charset=utf-8'
//   ctx.body = pug.render(pugTpl, {
//     you: 'Luke',
//     me: 'gp'
//   })
// })
app.listen(4455)
