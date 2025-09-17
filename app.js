//testing that all works with terminal command aliases we just created in package.json
//console.log("hello world") //debug
//importing express
const express = require("express");
//calling the function that creates the process
const app = express();
//setting up port
const port = 3000;

//lets enable static  assets
app.use(express.static('public'));
//lets enable static  assets
app.use(express.static('public/'));
//enable json decoding for req.body (body parser)
app.use(express.json());
//importing the errorsHandler middleware
const errorsHandler = require("./middlewares/errorsHandler.js");
//importing the notFound middleware
const notFound = require("./middlewares/notFound.js");
//creating the endpoint

app.get('/',(req,res)=>{
  res.send('welcome to my blog');
})
//creating the endpoint bacheca to show our posts 
// app.get('/bacheca',(req,res)=>{
 
  
//   //lets test if that worked
//   console.log(data);
//   res.json(data);
//   // console.log(param)
//   // console.log(req.route)
//   console.log(app)
// })  
//i commented it because we now have a route called posts so we will show them from there and we now import it

const postsRoute = require('./routes/postsRouter.js');

app.use('/posts', postsRoute);
app.use(errorsHandler);
app.use(notFound);

app.listen(port,()=>{
  console.log(`blog is  listening on port ${port}`);
})
