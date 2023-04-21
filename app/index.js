const express = require("express")
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.json())

const port = 3000

let live = true
let ready = true

app.get('/', (req, res) => {
  res.send('Hello World v2!')
})


app.post('/status', (req, res) => {
  live = req.body.live
  ready = req.body.ready
  res.json(req.body)
})


app.get('/alive', (req, res) => {
  if(live)
    res.status(200).send("ok")
  else
    res.status(500).send("fail")
})

app.get('/ready', (req, res) => {
  if(ready)
    res.status(200).send("ok")
  else
    res.status(500).send("fail")
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})