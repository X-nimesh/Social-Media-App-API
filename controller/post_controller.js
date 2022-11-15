const posts = require('../service/post_service');


exports.postsController = (app) => {//  posts
    app.get('/post', posts.list)
        .post('/post', posts.post)
        .get('/post/:id', posts.view)
        .put('/post/:id', posts.update)
        .delete('/post/:id', posts.delete)
}