# Getting Started

```
$ git clone https://github.com/MrRomanoSays/persons-api.git
$ cd persons-api  
$ npm install
$ npm start
```

### Quick Links
* [Read a doc](#read-a-document)  
 * [Read a person](#read-a-document)  
 * [Read an address](#read-an-address)
* [Read multiple docs](#read-multiple-documents)  
  * [Limit documents returned](#limit-the-number-of-documents-returned)  
* [Create a doc](#create-a-document)  
* [Update a doc](#update-a-document)  
* [Delete a doc](#delete-a-document)  
* [Status Code Guide](#troubleshooting-status-code-messages)  


## Endpoints

### READ A DOCUMENT

**`GET /persons/:id`** will [*"fetch"*]("https://pouchdb.com/api.html#fetch_document") a specific person from the database according to a unique "\_id key".

The following route parameters may be utilized:

**:id**   -   *Each person's unique identifier*  
**:firstName**   -   *The person's first name*  
**:lastName**   -   *The persons's last name*  
**:email**   -   *The email address associated with the person*  

**> Example Call:**

```
GET /persons/:id
EX: GET /persons/person_armstrong_lance_oops@gmail.com
```

**< Example Response:**
```
{
  "_id": "person_armstrong_lance_oops@gmail.com",
  "_rev": "2-a609c2a0185c4f47c17d872e00f32957",
  "firstName": "Lance",
  "lastName": "Armstrong",
  "email": "oops@gmail.com",
  "type": "person"
}
```
###### [Back to Quick Links](#quick-links)
-------------------

### READ AN ADDRESS

**`GET /addresses/:id`** will [*"fetch"*]("https://pouchdb.com/api.html#fetch_document") a specific person's address from the database according to its unique "\_id key".

The following route parameters may be utilized:

**:id**   -   *Each document's unique identifier*  
**:rev**   -   *The document's current revision identifier.*
**:person_id**  -  *The person's id that the document is associated with*  
**: address_type**  -  *Address types could be "home", "vacation", or "gravesite".*
**:street**  -  *The street name of the address*  
**:city**  -  *The city of the address*  
**:state**  -  *The state of the address*  
**:zip**  -  *The zipcode of the address*


**> Example Call:**

```
GET /addresses/:id
EX: GET /addresses/address_person_armstrong_lance_oops@gmail.com_1_sad_lane
```

**< Example Response:**
```
{
  "_id": "address_person_armstrong_lance_oops@gmail.com_1_sad_lane",
  "_rev": "1-49f86b73b2a59cb9af307220dc725b78",
  "person_id": "person_armstrong_lance_oops@gmail.com",
  "address_type": "home",
  "street": "1 Sad Lane",
  "city": "Dallas",
  "state": "TX",
  "zip": 75001
}
```
###### [Back to Quick Links](#quick-links)
-------------------

### READ MULTIPLE DOCUMENTS

**`GET /persons`** will [*"fetch"*]("https://pouchdb.com/api.html#fetch_document")  all the database documents whose unique id keys start with "person_".  

Here is an example of a person's id key for reference:

`id: person_jobs_steve_stevejobs@apple.com.`  

**> Example Call:**

```
GET /persons
EX: GET /persons
```

**< Example Response:**
```
[
  {
    "_id": "person_armstrong_lance_oops@gmail.com",
    "_rev": "2-a609c2a0185c4f47c17d872e00f32957",
    "firstName": "Lance",
    "lastName": "Armstrong",
    "email": "oops@gmail.com",
    "type": "person"
  },
  {
    "_id": "person_barnes_jimmy_jimbo@gmail.com",
    "_rev": "1-9fb5f3ca0f7532e49d3cc3e9e1b652b8",
    "firstName": "Jimmy",
    "lastName": "Barnes",
    "email": "Jimbo@gmail.com",
    "type": "person"
  }
  ]
  ```
  *Notice that this call returns an array filled with JSON objects.  In this example, two document objects were returned simulating a database of only two objects that met the `id: "person_"` criteria.*

#### Limit The Number of Documents Returned

Instead of retrieving all documents, you may wish to limit the number of documents returned.  This is performed by setting a *limit* within your query.  In the following example, the query would return only the first 10 people.  

**> Example Call:**
```
GET /persons?limit=[number]
EX: GET /persons?limit=10
```
*COMMON ERROR:  The documents returned in this way will be sorted alphabetically according to each person document's id key.*

###### [Back to Quick Links](#quick-links)
-------------------

### CREATE A DOCUMENT

**`post /persons`** will create, or  [*"put"*]("https://pouchdb.com/api.html#create_document"), a new person in the database using the entry's unique *"id key"*.  The document is passed specific details within the **body** of your request.  This should be made using JSON.

**> Example Call:**

```
POST /persons
EX: POST /persons
```
*Common Error:  Notice that an id is not provided after /persons*


> MESSAGE BODY

```
{
  "_id": "person_NewPersonFirstName_NewPersonLastName_NewPersonEmailAddress@gmail.com",
  "firstName": "NewPersonFirstName",
  "lastName": "NewPersonLastName",
  "email": "NewPersonEmailAddress@gmail.com",
  "type": "person"
}
```
*Common Error:  Notice there is not a rev key.  Since this is the creation of the document it does not exist.  It will be automatically generated by the database for future reference.*

**< Example Response:**
```
{
  "ok": true,
  "id": "person_NewPersonFirstName_NewPersonLastName_NewPersonEmailAddress@gmail.com",
  "rev": "1-e41a046293bbc20e9cb3bed7a5d40051"
}
```
###### [Back to Quick Links](#quick-links)
-------------------

### DELETE A DOCUMENT

**`delete /persons/:id`** will delete, or  [*"remove"*]("https://pouchdb.com/api.html#delete_document"), a person in the database using their unique *"id key"* and the document's latest *"rev key"*.

**> Example Call:**

```
DELETE /persons/:id
DELETE /persons/person_NewPersonFirstName_NewPersonLastName_NewPersonEmailAddress@gmail.com
```

**< Example Response:**
```
{
  "ok": true,
  "id": "person_NewPersonFirstName_NewPersonLastName_NewPersonEmailAddress@gmail.com",
  "rev": "2-91689fb6eae278e6e13c477a74ba10d8"
}
```
###### [Back to Quick Links](#quick-links)
-------------------

### UPDATE A DOCUMENT

**`put /persons/:id`** will update a database record using  [*"put"*]("https://pouchdb.com/api.html#create_document").  The put relies on the document's unique *"id key"* and the most recent *"rev key"*.  The update itself is provided within the **body** of your request.  This should be made using JSON.

**> Example Call:**

```
PUT /persons/:id
EX: /persons/person_seinfeld_elaine_elaine@gmail.com
```

> MESSAGE BODY
```
{
  "_id": "person_seinfeld_elaine_elaine@gmail.com",
  "_rev": "1-a5a789e9e1f3e563fb35f2b1afda4c72",
  "firstName": "Elaine",
  "lastName": "Bennis-Seinfeld",  //CHANGE MADE TO THIS VALUE
  "email": "elaine@gmail.com",
  "type": "person"
}
```
*Common Error:  Ensure that the `_rev` value is the most current version of the document.*


**< Example Response:**
```
{
  "ok": true,
  "id": "person_seinfeld_elaine_elaine@gmail.com",
  "rev": "2-cdc4f430df9b38c7e6ee2dcbea520d1c"  //NEW REVISION VALUE GENERATED REFLECTING UPDATE
}
```
###### [Back to Quick Links](#quick-links)
-------------------

### TROUBLESHOOTING STATUS CODE MESSAGES  

200 - The request has succeeded.  
201 - The request has been fulfilled and resulted in a new document being created.
409 - The request could not be completed due to a conflict with the current state of the database. This code is only allowed in situations where it is expected that the user might be able to resolve the conflict and resubmit the request.  
404 - The server has not found anything matching the Request.

-------------------
###### [Back to Quick Links](#quick-links)
