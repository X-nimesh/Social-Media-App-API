const profilePicModel = require('../models/profilePic-model');
const { Methods } = require('../utils/method');
const { response } = require('../utils/response-message');

exports.list = async (req, res) => {
    try {
        const profilePics = await profilePicModel.findAll();
        return res.json({ Pictures: profilePics })
    } catch (error) {
        throw error
    }
}
exports.post = async (req, res, next) => {
    try {
        const { description, uid } = req.body;
        await profilePicModel.create({ description, uid })
        return res.status(400).json({ message: 'data inserted successfully' })
    } catch (error) {
        next('Error: ' + error)
        // console.log(error);
        // throw error
    }
}
exports.view = async (req, res) => {
    try {
        const { id } = req.params;
        const resData = await profilePicModel.findOne({ where: { id } });
        response(res, 200, resdata, 'Profile Picture getby id', Methods.GET);
        return res.status(200).json({ message: 'Profile Picture getby id', data: resData })
    } catch (error) {
        throw error
    }

}
exports.update = async (req, res) => {
    try {
        const { id } = req.params;
        const { description, uid } = req.body;
        await profilePicModel.update({ description, uid }, { where: { id } });
        return res.status(200).json({ message: 'sucess' })
    } catch (error) {
        throw error;
    }
}
exports.delete = async (req, res) => {
    try {
        const { id } = req.params;
        await profilePicModel.destroy({
            where: { id }
        })
        res.status(200).json({ message: 'Deleted' })

    } catch (error) {
        throw error;
    }
}