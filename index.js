import express from 'express'
import path from 'path'

// create an express app
const app = express()
const router = express.Router()
app.use(
    router,
    express.static('./static')
    )
const port = +process.env.PORT || 1000


//router
router.get('^/$|/ express', display, (req, res)=>{
    res.status(200).sendFile(path.resolve('./static/html/index.html'))
})


//middleware
function display(req, res, next) {
    console.log("Hello There");
    next()
}

router.get('/about', (req, res)=>{
    res.json({
        status: res.statusCode,
        msg: 'About Page'
    })
})

// app.all('*', (req, res)=>{
//     res.json({
//         status: 404,
//         msg: '404 page'
//     })
// })
app.listen(port)


