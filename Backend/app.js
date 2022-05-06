import Koa from 'koa'
import bodyParser from 'koa-bodyparser'
import cors from '@koa/cors'

const app = new Koa();
app.use(cors());
app.use(bodyParser());

app.use(ctx => {
    ctx.set('Content-Type', 'text/html');
    ctx.body = "<h3>Not found</h3>";
    ctx.status = 404;
})

app.listen(3000, () => {
    console.log("Application is running on port 3000")
})
