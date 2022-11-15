const express = require('express');
const db = require('./config/db');
const { postsController } = require('./controller/post_controller');
const { userController } = require('./controller/user_controller');
const { registerModel } = require('./models/index-model');
const { commentController } = require('./controller/comment_controller');
const { profilePicController } = require('./controller/profilePic_Controller');


(async () => {
    try {
        await db.authenticate('connected');
    } catch (error) {
        console.log(error);
    }
})()


// register models and associations
registerModel(db);

// express app
const app = express();
app.use(express.json());
const PORT = 3000;


// controllers
postsController(app);
commentController(app);
userController(app);
profilePicController(app);


app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
})
