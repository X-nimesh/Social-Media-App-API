const userModel = require('../models/user-model');

exports.list = async (req, res) => {
    try {
        const userData = await userModel.findAll();
        return res.json({ users: userData })
    } catch (error) {
        throw error
    }
}
exports.post = async (req, res, next) => {
    try {
        const { name, email, about } = req.body;
        await userModel.create({ name, email, about })
        return res.status(400).json({ message: 'data inserted successfully' })
    } catch (error) {
        throw error
    }
}
exports.view = async (req, res) => {
    try {
        const { uid } = req.params;
        const resData = await userModel.findOne({ where: { uid } });

        return res.status(200).json({ message: 'users getby id', data: resData })
    } catch (error) {
        throw error
    }

}
exports.update = async (req, res) => {
    try {
        const { uid } = req.params;
        const { name, email, about } = req.body;
        await userModel.update({ name, email, about }, { where: { uid } });
        return res.status(200).json({ message: 'sucess' })
    } catch (error) {
        throw error;
    }
}
exports.delete = async (req, res) => {
    try {
        const { uid } = req.params;
        await userModel.destroy({
            where: { uid }
        })
        res.status(200).json({ message: 'Deleted' })

    } catch (error) {
        throw error;
    }
}