const express = require("express")
const app = express()
const dal = require("./dal.js")
const bodyParser - require('body-parser')

console.log("Welcome to the persons api.")


app.get('/persons/:id', function (req, res) {
  dal.getPerson(req.params.id, function (err, doc) {
    if(err) res.send("ERROR reported by database: ", err)
    res.send("Succesful return from database: ", doc)
  })
})

//WRONG
// app.put('/persons/:id', function (req, res) {
//   dal.addPerson(req.params.id, function (err, res) {
//     if(err) res.send("ERROR reported by database: ", err)
//     res.send("Successfully added a person ", res)
//   })
// })

app.post('/persons', function(req, res) {
  console.log(req.body)
  
})



app.listen(3000, function() {
  console.log('Person API is listening on port 8080')
})
