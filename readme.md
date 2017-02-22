# Getting Started

```
$ git clone <some github url>
$ cd persons-api
$ npm install
$ npm start
```

## Endpoints

### `GET /persons/:id`

**`GET /persons/:id`** will [*"fetch"*]("https://pouchdb.com/api.html#fetch_document") a specific person from the database according to a unique "\_id key".

The following route parameters can be utilized:

**:id**   -   *Each document's unique identifier*  
**:firstName**   -   *The First Name associated with the document*  
**:lastName**   -   *The Last Name associated with the document*  
**:email**   -   *The email address associated with the document*  
**:type**   -   *The type associated with the document.*  
* For documents of `/persons` type would be "person"  
* For documents of `/addresses` type could be ["home", "vacation", "gravesite"]

**Example `/persons` Call:**

```
GET /persons/person_armstrong_lance_oops@gmail.com

```

**Example `/persons` Response:**
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
-------------------

### `POST /persons`

**`post /persons`** will create, or  [*"put"*]("https://pouchdb.com/api.html#create_document"), a new person in the database using their unique *"id key"* and text for the document that you will need to provide in the **body** of your request.

**Example `POST /persons` Call:**

```
POST /persons

```

```
MESSAGE body

{
  "_id": "person_NewPersonFirstName_NewPersonLastName_NewPersonEmailAddress@gmail.com",
  "firstName": "NewPersonFirstName",
  "lastName": "NewPersonLastName",
  "email": "NewPersonEmailAddress@gmail.com",
  "type": "person"
}
```

**Example `/persons` Response:**
```
{
  "ok": true,
  "id": "person_NewPersonFirstName_NewPersonLastName_NewPersonEmailAddress@gmail.com",
  "rev": "1-e41a046293bbc20e9cb3bed7a5d40051"
}
```

-------------------

### `DELETE /persons/:id`

**`delete /persons/:id`** will delete, or  [*"remove"*]("https://pouchdb.com/api.html#delete_document"), a person in the database using their unique *"id key"* and the document's latest *"rev key"*.

**Example `DELETE /persons/:id` Call:**

```
DELETE /persons/person_NewPersonFirstName_NewPersonLastName_NewPersonEmailAddress@gmail.com

```

**Example `/persons` Response:**
```
{
  "ok": true,
  "id": "person_NewPersonFirstName_NewPersonLastName_NewPersonEmailAddress@gmail.com",
  "rev": "2-91689fb6eae278e6e13c477a74ba10d8"
}
```
