const inshorts = require("inshorts-news-api");
const { Post } = require("../models/PostDTO");

exports.getPosts = async (req, res) => {
       const newsData = await inshorts.getNews({
              language: req.body.lang,
              category: req.body.category
       });
       return res.json({
              posts: new Post().fromDocuments(newsData.news),
              news_offset: newsData.news_offset
       });
}

exports.getMorePosts = async (req, res) => {
       const newsData = await inshorts.getNews({
              language: req.body.lang,
              category: req.body.category,
              news_offset: req.body.news_offset
       });
       return res.json({
              posts: new Post().fromDocuments(newsData.news),
              news_offset: newsData.news_offset
       });
}