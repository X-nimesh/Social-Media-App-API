const userModel = require('../../models/user-model');
exports.findAll = async () => {
    return await userModel.findAll();
}
exports.createUser = async (name, email, about) => {
    return await userModel.create({ name, email, about })
}