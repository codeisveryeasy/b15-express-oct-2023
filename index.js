//import express

let expressApp = require('express')

//create express app
let app = expressApp()

//enable express app to use JSON content-type
app.use(expressApp.json())

//define a port where API will be exposed
let PORT = 1234

//setup temporary data source
let videos = [
    {
        "id":1,
        "videoid":"OI0F-zEhPJw",
        "title":"Kantara"
    },
    {
        "id":2,
        "videoid":"OI0F-zEhfg",
        "title":"Something"
    }
]

//create first api
//  http://localhost:1234/youtube/welcome
// API endpoint -> /youtube/welcome
// API URL ->  http://localhost:1234/youtube/welcome
app.get("/youtube/welcome", (request, response)=>{
    //api implementation
    console.log("endpoint called: /youtube/welcome with GET request")
    response.send("Hello from youtube server, GET")
})

//create second api
//  http://localhost:1234/youtube/welcome
// API endpoint -> /youtube/welcome
// API URL ->  http://localhost:1234/youtube/welcome
app.post("/youtube/welcome", (request, response)=>{
    //api implementation
    console.log("endpoint called: /youtube/welcome with POST request")
    response.send("Hello from youtube server, POST")
})


/*
http://localhost:1234/youtube/all
*/
app.get("/youtube/all", (request,response)=>{
    console.log("endpoint called: /youtube/all with GET request")
    response.send(videos)
})


//start/fire api at given port
app.listen(PORT, ()=>{
    console.log("Listening to port: " + PORT)
})

