const pouchDB = require("pouchdb-http")
const {map, omit, compose} = require ("ramda")

const db = new pouchDB("http://localhost:3000/test")

function getPerson (id, cb) {
  db.get(id, function (err, doc) {
      //Error
      if(err) console.log("Error: ", err)
      //Success
      console.log("Success! ", doc)
      cb(null, doc)
  })
}




//TESTING
getPerson("person_armstrong_lance_oops@gmail.com", function (err, res) {
  if(err) return console.log("ERROR AT DATABASE LEVEL", err)
  console.log("SUCCESSFUL PING OF DATABASE...SENT FROM DAL", res)
})



const dal = {
  getPerson: getPerson
}

module.exports = dal
