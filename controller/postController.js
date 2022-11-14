const postModel = require('../models/post-model');

exports.list = async (req, res) => {
    try {
        const postData = await postModel.findAll();
        return res.json({ posts: postData })
    } catch (error) {
        throw error
    }
}
exports.post = async (req, res, next) => {
    try {
        const { title, description, user_id } = req.body;
        await postModel.create({ title, description, user_id })
        return res.json({ message: 'data inserted' })
    } catch (error) {
        throw error
    }
}
exports.view = async (req, res) => {
    try {
        const { id } = req.params;
        const resData = await postModel.findOne({ where: { id } });

        return res.status(200).json({ message: 'blog getby id', data: resData })
    } catch (error) {
        throw error
    }

}
exports.update = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, description } = req.body;
        await postModel.update({ id, title, description }, { where: { id } });
        return res.status(200).json({ message: 'sucess' })
    } catch (error) {
        throw error;
    }
}
exports.delete = async (req, res) => {
    try {
        const { id } = req.params;
        await postModel.destroy({
            where: { id }
        })
        res.status(200).json({ message: 'Deleted' })

    } catch (error) {
        throw error;
    }
}