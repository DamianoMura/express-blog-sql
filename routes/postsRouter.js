// import express
const express = require('express');
const router = express.Router();





//we import the destructured controller 
const {index , show , create , modify , update , destroy} = require('../controllers/postsController.js')
// define all routes
//index for posts

router.get('/',index);

// show id 
router.get('/:id',show)

// insert new  id 
router.post('/',create)

// update post  id 
router.put('/:id',update)

// modify post  id 
router.patch('/:id',modify)

// delete post  id 
router.delete('/:id',destroy)


module.exports=router;
