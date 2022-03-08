const express = require("express");
const router = express.Router();

const { getPosts, getMorePosts } = require("../controllers/post");

//read from inshorts
router.post("/posts", getPosts);

//get more posts
router.post("/posts/more", getMorePosts);

module.exports = router;