const profilePics = require('../service/profile_pic_service');
exports.profilePicController = (app) => {
    app.get('/profilePic', profilePics.list)
        .post('/profilePic', profilePics.post)
        .get('/profilePic/:id', profilePics.view)
        .put('/profilePic/:id', profilePics.update)
        .delete('/profilePic/:id', profilePics.delete)
}