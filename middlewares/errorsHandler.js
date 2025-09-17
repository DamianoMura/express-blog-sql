//defining the errorsHandler Middleware
const errorsHandler = (err, req, res, next ) => {
  console.log(err);
  res.status(500).json({
    error: err.message
  })
}

//export middleware
module.exports=errorsHandler;