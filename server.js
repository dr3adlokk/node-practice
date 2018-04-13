var express = require('express')
var bodyparser = require('body-parser')
var path = require('path')
// var userArr = require('../data/user')
var app = express()
app.use(bodyparser.urlencoded({extended: true}))
app.use(bodyparser.json())
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', function (req, res) {
  res.render('index.html')
})

app.get('/reserve', function (req, res) {
 res.redirect('reserve.html')
})

app.get('/tables', function (req, res) {
 res.redirect('tables.html')
})


// module.exports = function(app) {
//   app.post('/posty', function (req, res) {
//     userArr.push(req.body)
//     res.send(true)
//   })
// }
// require('./routes/basicroutes')(app)

app.listen(3000)
console.log('localhost:3000 listening...')