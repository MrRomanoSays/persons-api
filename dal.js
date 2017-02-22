const PouchDB = require('pouchdb-http')
const {map, omit, compose} = require('ramda')
const db = new PouchDB('http://localhost:3000/test')


// create and export a function that retrieves a person from your couch database

function getPerson(id, cb) {
//  "person_maddux_greg_maddog96@yahoo.com"
  db.get(id, function (err, doc) {
    if (err) return cb(err)
    cb(null, doc)
  })
}

function addPerson(doc, cb) {
  db.put(doc, function (err, res) {
    if (err) return cb(err)
    cb(null, res)
  })
}

function deletePerson (id, cb) {

  db.get(id, function(err, doc) {
    if (err) return cb(err)

    db.remove(doc, function(err, removedDoc) {
      if (err) return cb(err)
      cb(null, removedDoc)
    })

  })

}

const dal = {
  getPerson: getPerson,
  addPerson: addPerson,
  deletePerson: deletePerson
}

module.exports = dal
