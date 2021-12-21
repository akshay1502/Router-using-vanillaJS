
const express = require('express')
const app = express()

app.use(`${process.env.PORT}/static` || '/static', express.static('public'));

app.get('/*', (req,res) => {
  res.sendFile(__dirname+"/"+"index.html");
})

app.listen(process.env.PORT || 3000);
console.log(process.env.PORT);