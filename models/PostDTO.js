class Post {

    fromDocument(post) {
        return {
            image: post.news_obj.image_url,
            title: post.news_obj.title,
            author: post.news_obj.author_name,
            content: post.news_obj.content,
            postedAt: new Date(post.news_obj.created_at ?? 981495183000).toLocaleString(),
            sourceURL: post.news_obj.source_url,
            readMore: post.news_obj.source_url
        }
    }

    fromDocuments(posts) {
        return posts.map(post => this.fromDocument(post))
    }
}

module.exports.Post = Post;