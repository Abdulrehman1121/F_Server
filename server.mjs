import express from 'express'
const app = express()
const port = process.env.PORT || 3000

app.get('/food', (req, res) => {
  console.log(`${req.ip} is asking for food`)
  res.send('Here some Food');
})
app.get('/water', (req, res) => {
    console.log(`${req.ip} is asking for water`)
    res.send('Here some water');
  })
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})