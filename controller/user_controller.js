const users = require('../service/user_service');
exports.userController = (app) => {

    app.get('/user', users.list)
        .post('/user', users.post)
        .get('/user/:uid', users.view)
        .put('/user/:uid', users.update)
        .delete('/user/:uid', users.delete)
}