const express = require('express');
const { Sequelize } = require('sequelize');
const db = require('./config/db');
const commentModel = require('./models/comment-model');

// models
const postModel = require('./models/post-model');
const userModel = require('./models/user-model');
const profilePicModel = require('./models/profilePic-model');

// controllers
const comments = require('./controller/commentController');
const posts = require('./controller/postController');
const users = require('./controller/userController');
const profilePics = require('./controller/profilePicController');



(async () => {
    try {
        await db.authenticate('connected');
    } catch (error) {
        console.log(error);
    }
})()

// userModel.sync({ alter: true });
// commentModel.sync({ alter: true });
// postModel.sync({ alter: true });
// profilePicModel.sync({ alter: true });

db.sync({ alter: true });

// associations

// one to many
postModel.hasMany(commentModel, {
    foreignKey:
        { name: 'post_id' }
})
commentModel.belongsTo(postModel, {
    foreignKey:
        { name: 'post_id' }
})

// user and post assocaiton
// one to many
userModel.hasMany(postModel, {
    foreignKey:
        { name: 'user_id' }
})
postModel.belongsTo(userModel, {
    foreignKey:
        { name: 'user_id' },
    onDelete: 'restrict',
    onUpdate: 'restrict'
})

// user and profile pic associations
// one to one
userModel.hasOne(profilePicModel, {
    foreignKey:
        { name: 'uid' }
})
profilePicModel.belongsTo(userModel, {
    foreignKey:
        { name: 'uid' },
    onDelete: 'restrict',
    onUpdate: 'restrict'
})

const app = express();

app.use(express.json());
const PORT = 3000;

// posts
app.get('/post', posts.list)
app.post('/post', posts.post)
app.get('/post/:id', posts.view)
app.put('/post/:id', posts.update)
app.delete('/post/:id', posts.delete)

// comments
app.get('/comment', comments.list)
app.post('/comment', comments.post)
app.get('/comment/:id', comments.view)
app.put('/comment/:id', comments.update)
app.delete('/comment/:id', comments.delete)

// users endpoint
app.get('/user', users.list)
app.post('/user', users.post)
app.get('/user/:uid', users.view)
app.put('/user/:uid', users.update)
app.delete('/user/:uid', users.delete)

// profile pic endpoint
app.get('/profilePic', profilePics.list)
app.post('/profilePic', profilePics.post)
app.get('/profilePic/:id', profilePics.view)
app.put('/profilePic/:id', profilePics.update)
app.delete('/profilePic/:id', profilePics.delete)

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
})




// app
// .get('/get-all', async (req, res) => {
//     try {
//         const commentData = await commentModel.findAll();
//         return res.json({ posts: commentData })
//     } catch (error) {
//         throw error
//     }
// })
// .post('/', async (req, res, next) => {
//     try {
//         const { name, description } = req.body;
//         await commentModel.create({ name, description })
//         return res.json({ message: 'data inserted' })
//     } catch (error) {
//         throw error
//     }
// })
// .get('/:id', async (req, res) => {
//     try {
//         const { id } = req.params;
//         const resData = await commentModel.findOne({ where: { id } });

//         return res.status(200).json({ message: 'blog getby id', data: resData })
//     } catch (error) {
//         throw error
//     }

// })
// .put('/:id', async (req, res) => {
//     try {
//         const { id } = req.params;
//         const { name, description } = req.body;
//         await commentModel.update({ name, description }, { where: { id } });
//         return res.status(200).json({ message: 'sucess' })
//     } catch (error) {
//         throw error;
//     }
// })
// .delete('/:id', async (req, res) => {
//     try {
//         const { id } = req.params;
//         await commentModel.destroy({
//             where: { id }
//         })
//         res.status(200).json({ message: 'Deleted' })

//     } catch (error) {
//         throw error;
//     }
// })

// app.get('/user/:uid', async (req, res) => {
//     try {
//         const { uid } = req.params;
//         const resData = await userModel.findOne({ where: { uid } });
//         return res.status(200).json({ message: 'blog getby id', data: resData })
//     } catch (error) {
//         throw error
//     }
// })
//     .post('/user', async (req, res, next) => {
//         try {
//             const { name, email, about } = req.body;
//             await userModel.create({ name, email, about })
//             return res.json({ message: 'data inserted ' })
//         } catch (error) {
//             throw error
//         }
//     })



