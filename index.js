const express = require('express');
const bodyParser = require('body-parser');

const authMiddleware = require('./middlewares/authMiddleware')
const authController = require('./controllers/authController')


const app = express()
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.post('/register', authMiddleware.registerValidation, authController.create);


app.listen(3002, () => {
  console.log('SERVER IS RUNNING ON PORT 3002')
})