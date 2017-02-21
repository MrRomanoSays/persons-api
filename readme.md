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

**:id**   *Each document's unique identifier*  
**:firstName**    *The First Name associated with the document*  
**:lastName**   *The Last Name associated with the document*  
**:email**    *The email address associated with the document*  
**:type**   *The type associated with the document.  
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

**Example `/addresses` Call:**

```
CHANGE GET /persons/person_armstrong_lance_oops@gmail.com

```

**Example `/addresses` Response:**
```
{CHANGE
  "_id": "person_armstrong_lance_oops@gmail.com",
  "_rev": "2-a609c2a0185c4f47c17d872e00f32957",
  "firstName": "Lance",
  "lastName": "Armstrong",
  "email": "oops@gmail.com",
  "type": "person"
}
```
