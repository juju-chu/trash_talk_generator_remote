const express = require('express')
const app = express()
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const generateTalk = require('./generate_trash_talk.js')
const checkCareer = require('./check_career.js')
const port = 3000

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.render('index')
})

app.post('/', (req, res) => {
  const talk = generateTalk(req.body.target)
  const careerTitle = checkCareer(req.body.target)
  res.render('index', { talk, careerTitle })
})

app.listen(port, () => {
  console.log('done!')
})