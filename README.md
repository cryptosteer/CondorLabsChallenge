# Web developer test using NodeJS

This test has two parts, both served by the same Node Instance, but they are not related. 

### Frontend test

Create a finding course page, with the basic search functionality and pagination. You choose the way and approach for the pagination.

### Backend test

Build an API REST and expose a CRUD for the providers collection.

## Getting Started

### Prerequisites

* Npm 3.10.10
* Mongo 3.4.9
* Express 4.16.2
* Mongoose 4.12.1
* Nodemon 1.12.1

### Installing

Installing packages from project root folder /CondorLabsChallenge.

```
npm install
```

## How to use it

To start the server run this command from project root folder /CondorLabsChallenge.

```
npm run start
```

### Using the frontend

Please access to this link: http://localhost:3000/frontend/

### Using the backend api

**List all providers**
```
GET /providers HTTP/1.1
Host: localhost:3000
Cache-Control: no-cache
```

**Get provider**
```
GET /providers/59dd33286922125a97e1740a HTTP/1.1
Host: localhost:3000
Cache-Control: no-cache
```

**Create provider**
```
POST /providers HTTP/1.1
Host: localhost:3000
Content-Type: application/x-www-form-urlencoded
Cache-Control: no-cache

firstName=Jesus&lastName=Steer&middleName=D&email=Wilhelm_Waelchi31%40hotmail.com&specialty=59dce30ec776d42ce52f6168&projectedStartDate=2016-10-13T16%3A21%3A05.482Z&employerId=441&providerType=ARNP&staffStatus=TEACHING&assignedTo=55453&status=APPROVED&createdBy=6159
```

**Delete provider**
```
DELETE /providers/59dd30f07d87765850d0b42d HTTP/1.1
Host: localhost:3000
Cache-Control: no-cache
Content-Type: multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW
```

**Update provider**
```
PUT /providers/59dd33286922125a97e1740a HTTP/1.1
Host: localhost:3000
Content-Type: application/x-www-form-urlencoded
Cache-Control: no-cache

firstName=Jesus&lastName=Steer&middleName=D&email=jesus_steer%40hotmail.com&specialty=59dce30ec776d42ce52f6168&projectedStartDate=2016-10-13T16%3A21%3A05.482Z&employerId=441&providerType=ARNP&staffStatus=TEACHING&assignedTo=55453&status=APPROVED&createdBy=6159
```

## Built With

* [Node](https://nodejs.org/) - A JavaScript runtime built on Chrome's V8 JavaScript engine
* [Express](http://expressjs.com/) - Fast, unopinionated, minimalist web framework for Node.js.
* [MongoDB](https://www.mongodb.com/) - Atlas Database as a Service

## Author

* **Jesus Steer** - *Initial work* - [jsteerv](https://github.com/jsteerv)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

