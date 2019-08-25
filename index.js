/*
- download and install Node
- install express
    >npm i express
*/
// Express is a Node.js Web Framework.

// First import the express package to the express value
var express = require("express");

// Instantiate an application by calling the express() method.
var app = express();

/*
Routing
Routing refers to how an application’s endpoints (URIs) respond to client requests.
You define routing using methods of the Express app object that correspond to HTTP methods; 
for example, app.get() to handle GET requests and app.post to handle POST requests
*/
app.get('/', function (req, res) {
  res.send('hello world')
})

/* 
Once we have the application object, tell it to listen for requests using
methods like get(), post(), put(), delete(), patch():
app.get('/', (req, res) => {  })
app.post('/', (req, res) => {  })
app.put('/', (req, res) => {  })
app.delete('/', (req, res) => {  })
app.patch('/', (req, res) => {  })

- Those methods accept a callback function, which is called when a request is started, and we need to handle it.
- Express sends us two objects in this callback, which we called req and res, that represent the Request and the Response objects.
- Request is the HTTP request. It can give us all the info about that, including the request parameters, the headers, 
the body of the request, and more.

- Response is the HTTP response object that we’ll send to the client.
- What we do in this callback is to send the ‘Hello World!’ string to the client, using the Response.send() method.
-This method sets that string as the body, and it closes the connection.
-----------------------------------
Declareing route by url like /api/products/101 where 101 is mapped into the req object object as:

router.get('/api/products/:id', function (req, res) {
  console.log("choice id is " +r eq.params.id);
});
*/

app.listen(3000, function(){
	console.log("server now listening!");
});

/*
** Sending a response

- In the Hello World example we used the Response.send() method to send a simple string as a response, and to close the connection:
    (req, res) => res.send('Hello World!')
- If you pass in a string, it sets the Content-Type header to text/html.
- if you pass in an object or an array, it sets the application/json Content-Type header, and parses that parameter into JSON.
- send() automatically sets the Content-Length HTTP response header.
- send() also automatically closes the connection.

** Send a JSON response

- The Response.json() method accepts an object or array, and converts it to JSON before sending it:
- res.json({ username: 'Flavio' })



Run the Application:
>node index.js
*/

