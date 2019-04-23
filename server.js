/*
 * @Author: Lac 
 * @Date: 2019-04-23 20:42:34 
 * @Last Modified by: Lac
 * @Last Modified time: 2019-04-23 20:43:55
 */
const Koa = require('koa')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })

const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = new Koa()

  server.use(async (ctx, next) => {
    await handle(ctx.req, ctx.res)
    ctx.respond = false
  })

  server.listen(3000, () => {
    console.log('koa server listening on 3000')
  })
})