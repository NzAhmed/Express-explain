/*
- download and install Node
- install express
    >npm i express
*/
// Express is a Node.js Web Framework.
var express = require("express");

// Instantiate an application by calling the express() method.
var app = express();


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
*/

app.listen(3000, function(){
	console.log("server now listening!");
});

/*
Run the Application:
>node index.js
*/

