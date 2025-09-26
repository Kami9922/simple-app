import express from 'express'
const app = express()

import fetch from 'node-fetch'

app.get('/', (req, res) => {
	fetch('http://date:3005')
		.then((res) => res.json())
		.then((date) => {
			res.send(`Hello, current date is ${date}\n`)
		})
})

app.listen(3000, () => {
	console.log(`Server has started on port: 3000`)
})
