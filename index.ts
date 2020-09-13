import koa from 'koa'
import _ from '@koa/router'

const app = new koa()
const router = new _()

router.get('/', (ctx) => {
  ctx.body = 'Hello World'
})
app.use(router.routes())

app.listen(4000, () =>
  console.log('Server running on port 4000')
)
