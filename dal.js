const PouchDB = require('pouchdb-http')
const {map, omit,compose,prop} = require('ramda')
const db = new PouchDB('http://localhost:3000/test')

// create and export a function that retrieves a person from your couch database
function getPerson(id, cb) {
    //  "person_maddux_greg_maddog96@yahoo.com"
    db.get(id, function(err, doc) {
        if (err) return cb(err)
        cb(null, doc)
    })
}


function getPersons(limit, cb) {
    db.allDocs({
        include_docs: true,
        start_key: "person_",
        end_key: "person_\uffff",
        limit: limit
    }, function(err, docs) {
        if (err) cb(err)
        cb(null, docs)
    })
}

function addPerson(doc, cb) {
    if (prop("firstName", doc) && prop("lastName", doc) && prop("email", doc)) {

        db.put(prepNewPerson(doc), function(err, res) {
            if (err) return cb(err)
            cb(null, res)
        })


    } else {
        cb({
            "name": "bad_request",
            "status": 400,
            "message": "bad request",
            "reason": "Adding a new person requires the following required fields:  First Name, Last Name and Email",
            "error": "bad_request"
        })
    }
}


//HELPER FUNCTION FOR addPerson
function prepNewPerson(doc) {
    doc._id = "person_" + doc.lastName.toLowerCase() + "_" + doc.firstName.toLowerCase() + "_" + doc.email.toLowerCase()
    doc.type = "person"
    return doc
}


function updatePerson(doc, cb) {
    db.put(doc, function(err, res) {
        if (err) return cb(err)
        cb(null, res)
    })
}


function deletePerson(id, cb) {
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
    updatePerson: updatePerson,
    deletePerson: deletePerson,
    getPersons: getPersons
}

module.exports = dal
