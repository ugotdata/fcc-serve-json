const express = require('express')
const app = express()
const port = 3000

app.get('/json', (req, res) => {
res.json({"message": "Hello json"})
})

app.listen(port, () => {
console.log(`Example app listening on port ${port}`)
})