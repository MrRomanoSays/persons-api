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

function addPerson (doc, cb) {
  db.put(doc, function (err, doc) {
    if(err) return cb(err)
    cb(null, doc)
  })
}




//TESTING

const newPersonToAdd = {
  "_id": "person_seinfeld_elaine_elaine@gmail.com",
  "firstName": "Elaine",
  "lastName": "Seinfeld",
  "email": "elaine@gmail.com",
  "type": "person"
}

addPerson(newPersonToAdd, function (err, res) {
  if(err) return console.log("ERROR AT DATABASE LEVEL", err)
  console.log("SUCCESSFUL PING OF DATABASE...SENT FROM DAL", res)
})



const dal = {
  getPerson: getPerson,
  addPerson: addPerson
}

module.exports = dal
