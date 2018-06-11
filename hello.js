const express = require('express')
const app = express()
const control = require('./control');
app.get('/',control.hello)

app.listen(3100,()=>{console.log('running....')})