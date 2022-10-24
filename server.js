const express = require('express');
const app = express();
require('dotenv').config();
const port = process.env.port;
const router = require('./router/route.js')
const bodyParser = require("body-parser")
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use([router])



app.listen(port, () => {
    console.log(`Our Server is running at port ${port}`)
})