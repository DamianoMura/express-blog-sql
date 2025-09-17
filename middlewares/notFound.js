//defining middleware notFound
const notFound = (req, res, next) => {
  res.status(404).json({
    error:"404",
    message:"not found"
  })
}

//exporting middleware
module.exports= notFound;