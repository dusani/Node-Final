/*
1. Node is a back-end framework built using google chrome's v8 engine. Node is used to build fast real time web application programing interfaces(APIs).

2. NPM comes bundled with node.js when you install it.

3.app.render() sends files to the browser.

4. app.use(bodyParser.json()); uses the body-parser middleware to parse incoming requests with json.

5. Express uses the static middleware to serve up content from a particular directory, in this case it will serve up the content of the public folder or directory.

6. The CRUD outline will be as follows:
    {
        "id": 1,
        "name": "New York Stock Exchange",
        "symbol": "NYSE",
        "price": 123567,
        "time_date": "12:00:00 PM 04/03/2018",
        "exchange": "Forex"
    }

    {
        "GET /stocks": {
            "desc": "returns all stocks",
            "response": "200 application/json",
            "data": [{},{},{}]
        },
        "GET /stocks/:id": {
            "desc": "returns one stock object by its id",
            "response": "200 application/json",
            "data": {}
        },
        "POST /stocks": {
            "desc": "creates and adds a new stock to the database",
            "response": "201 application/json",
            "data": {}
        },
        "PUT /stocks/:id": {
            "desc": "Edits or updates a stock by its id",
            "response": "200 application/json",
            "data": {}
        },
        "DELETE /stocks/:id": {
            "desc": "returns and deletes the matching stock",
            "response": "200 application/json",
            "data": {}
        }
    }

7.

8. A callback is a function passed to another function which we want to invoke at some point.

9. Ascynchronous means more than one code or process is running simultaneously while synchronous means only one code or process is executing at a time.

10. package.json is a file usually at the root of any node project. It is used to give information to npm. This allows npm identify the node project as well as handle any of the projects dependecies.

11. The fs module is used for file based operations. for example: const fs = require('fs');

12. By using the fs module. This module has a method called open, this accepts the path to the file we want to open and also accepts a callback. For example: fs.open(path, callback);

13. __dirname refers to the current working directory in node.

14. No you cannot access the DOM directly in node.

15. node.js solves the problem of blocking i/o by providing callback functions.

16. ExpressJS is the most common node.js framework.

17. app.get("/items", (req, res) => {
    if (err) throw err;

    res.json(items);
})

18. CRUD stands for Create, Read, Update, and Delete.

19. Ryan Dahl originially developed node.js.

20. In the module with the code we want to be accessible to other modules we add the following piece of code:
        module.exports = WhateverVariable;

    In the module where we want to use the code from another module we add the following piece of code:
        const WhateverVariable = require('and the path to the module goes here');
*/
