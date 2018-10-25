const mongoose = require('mongoose')
const express = require('express')
const app = express()
const dbRoute = 'mongodb://localhost:27017/mernTest'
const API_PORT = 3001
const bodyParser = require('body-parser')
const router = express.Router()

require('./models/models')

mongoose.connect(
	dbRoute,
	{ useNewUrlParser: true }
)

let db = mongoose.connection

db.once('open', () => console.log('connected to the database'))
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/api', router)
app.use(function(req, res) {
	res.status(404).send({ url: req.originalUrl + ' not found' })
})

const routes = require('./routes/routes')
routes(router)

app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`))
