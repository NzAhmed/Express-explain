#What is Express.js

Express is a fast, assertive, essential and moderate web framework of Node.js. You can assume express as a layer built on the top of the Node.js that helps manage a server and routes. It provides a robust set of features to develop web and mobile applications.

Let's see some of the core features of Express framework:

    It can be used to design single-page, multi-page and hybrid web applications.
    It allows to setup middlewares to respond to HTTP Requests.
    It defines a routing table which is used to perform different actions based on HTTP method and URL.
    It allows to dynamically render HTML Pages based on passing arguments to templates.

#Why use Express

    Ultra fast I/O
    Asynchronous and single threaded
    MVC like structure
    Robust API makes routing easy

******************************************************

Learn the basics of Express by understanding the Hello World code

Those 4 lines of code do a lot behind the scenes.

First, we import the express package to the express value.

We instantiate an application by calling the express() method.

Once we have the application object, we tell it to listen for GET requests on the / path, using the get() method.

There is a method for every HTTP verb: get(), post(), put(), delete(), patch():

app.get('/', (req, res) => { /* */ })
app.post('/', (req, res) => { /* */ })
app.put('/', (req, res) => { /* */ })
app.delete('/', (req, res) => { /* */ })
app.patch('/', (req, res) => { /* */ })

Those methods accept a callback function, which is called when a request is started, and we need to handle it.

We pass in an arrow function:

(req, res) => res.send('Hello World!')

Express sends us two objects in this callback, which we called req and res, that represent the Request and the Response objects.

Request is the HTTP request. It can give us all the info about that, including the request parameters, the headers, the body of the request, and more.

Response is the HTTP response object that we’ll send to the client.

What we do in this callback is to send the ‘Hello World!’ string to the client, using the Response.send() method.

This method sets that string as the body, and it closes the connection.

The last line of the example actually starts the server, and tells it to listen on port 3000. We pass in a callback that is called when the server is ready to accept new requests.
