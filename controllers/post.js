const inshorts = require("inshorts-news-api");

exports.getPosts = (req, res) => {
       inshorts.getNews({
              lang: req.body.lang,
              category: req.body.category
       }, (result, news_offset) => {
              return res.json({posts:result, news_offset:news_offset});
       })
}

exports.getMorePosts = (req, res) => {
       inshorts.getMoreNews({
              lang: req.body.lang,
              category: req.body.category,
              news_offset: req.body.news_offset
       }, (result, news_offset) => {
              return res.json({posts:result, news_offset:news_offset});
       })
}