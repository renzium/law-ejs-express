const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 8080;

const server = express() // create an express server



server.use(express.static(path.join(__dirname, "public"))); // declare a directory for all the static files

server.set("views", path.join(__dirname, "views")); // declare a directory for all the template files

server.set("view engine", "ejs"); // declare a template engine for converting the templates to html for the browser to parse

// register routes

server.get("/", (req, res) => res.render("pages/index")); // register the home route to point to the index.ejs template
server.get("/contacts", (req, res) => res.render("pages/contacts")) // register the contacts routes to point to the contacts.ejs template
server.get("/about", (req, res) => res.render("pages/about")) // register the about routes to point to the about.ejs 
server.get("/music", (req, res) => res.render("pages/music")) // register the about routes to point to the about.ejs 
server.get("/gallery", (req, res) => res.render("pages/my-picture")) // register the about routes to point to the about.ejs 
server.get("/hot-spot", (req, res) => res.render("pages/hot-spot")) // register the about routes to point to the about.ejs 


server.listen(PORT, () => console.log(`Listening on ${PORT}`));

