const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  setTimeout(() => {
    console.log("Hello world")
    res.json({message: "Hello world"})
  }, 10000)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
