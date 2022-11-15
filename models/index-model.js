const userModel = require('./user-model');
const commentModel = require('./comment-model');
const postModel = require('./post-model');
const profilePicModel = require('./profilePic-model');
exports.registerModel = (db) => {
    userModel.sync({ alter: true });
    commentModel.sync({ alter: true });
    postModel.sync({ alter: true });
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
        // onDelete: 'restrict',
        // onUpdate: 'restrict'
    })
}