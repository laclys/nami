/*
 * @Author: Lac 
 * @Date: 2019-04-23 20:42:34 
 * @Last Modified by: Lac
 * @Last Modified time: 2019-04-24 23:44:09
 */
const Koa = require('koa')
const Router = require('koa-router')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })

const handle = app.getRequestHandler()

// app.prepare().then(() => {
  const server = new Koa()
  const router = new Router()

  router.get('/test', (ctx) => {
    ctx.body = '<p>request /test</p>'
  })

  server.use(async (ctx, next) => {
    await next()
  })

  server.use(router.routes())

  // server.use(async (ctx, next) => {
  //   await handle(ctx.req, ctx.res)
  //   ctx.respond = false
  // })

  server.listen(3000, () => {
    console.log('koa server listening on 3000')
  })
// })