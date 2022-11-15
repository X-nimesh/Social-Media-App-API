const comments = require('../service/comment_service');

exports.commentController = (app) => {
    app.get('/comment', comments.list)
        .post('/comment', comments.post)
        .get('/comment/:id', comments.view)
        .put('/comment/:id', comments.update)
        .delete('/comment/:id', comments.delete)
}