//we go and get the posts from /posts.js and import it here in /routes/postsRoute.js
//importing array of posts
  const data = require("../data/posts.js");

  function index  (req,res){
  //here we show all posts
  //creating a new array
  let filteredArray=data;
  if (req.query.tags){
    const tag=req.query.tags.toLowerCase();
    console.log(tag)
    filteredArray= data.filter(post=>{
      return post.tags.map(tag=> tag.toLowerCase()).includes(tag)});
  }
  
 
  res.send(filteredArray);
  }


  function show  (req,res){
  // res.send(`post id ${req.params.id}`);
  console.log(`we are showing post id:${req.params.id}`) //debug
  //define variable post in wich we will put our filter result
  let post = data.find(obj => obj.id===parseInt(req.params.id))
  if(!post){

    return res.status(404).json({
      error: '404 not found',
      message:'post not found'
    })
  }
  res.json(post)
}


  function create  (req,res){
    //defining the new id for the new post
  const newId = data[data.length -1].id+1;
  // we destruct our req.body as follows
    const { title , content , image , tags }= req.body;
  //define the new post using the data from the destructuring  
  const newPost={
    id:newId,
    title,
    content,
    image,
    tags
  }
  //we insert it into the original data array
  data.push(newPost)
  // finally we can send it as a response json
  res.status(201).json(data)
   
 
}


  function modify  (req,res){
  // res.send(`update post ${req.params.id}`);
  //we use the same procedure for modify with controls to check what is been modified
   const id = parseInt(req.params.id);
  const post = data.find(post => post.id === id)
  console.log(post)
  if(!post){
    res.status(404);
    return res.json(
      {
        status:404,
        error:"not found",
        message:"cannot update inexistent post"
      }
    )
  }
  if(req.body.title){
    post.title=req.body.title;
  }
  
  if(req.body.content){
    post.content=req.body.content;
  }

  if(req.body.image){
    post.image=req.body.image;
  }

  if(req.body.tags){
    post.tags=req.body.tags
  }
  res.status(202).json(post)
}


  function update (req,res){
  // res.send(`modify post ${req.params.id}`);
  //we define a variable to have a int value as id taken from the URI
  const id = parseInt(req.params.id);
  //we go and check if the id is existent
  const post = data.find(post => post.id === id)
  //defining what to do if the post is not existent
  if(!post){
    //we set the status to 404
    res.status(404);
    //we return a json giving the error message
    return res.json(
      {
        status:404,
        error:"not found",
        message:"cannot update inexistent post"
      }
    )
  }
  //we here define the parameters of the new post taking the req.body parameters we passed 
  post.title=req.body.title;
  
  post.content=req.body.content;
  
  post.image=req.body.image;
  
  post.tags=req.body.tags
  //we show the new post
  res.status(202).json(post)
}


  function destroy  (req,res){
  

   const post = data.find(post => post.id=== parseInt(req.params.id));
  //  console.log(post)
  
if(post === undefined){
    res.status(404);
    return res.json ({
      status : 404,
      error: 'not found',
      message : 'post not found'
    })
  }

  // console.log(data.indexOf(post))
  data.splice(data.indexOf(post),1)
  res.status(204);
 res.send("post is been erased correctly")
  // console.log(data);
}

module.exports={
  index,
  show,
  create,
  modify,
  update,
  destroy
}