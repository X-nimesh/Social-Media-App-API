const commentModel = require('../models/comment-model');

exports.list = async (req, res) => {
    try {
        const commentData = await commentModel.findAll();
        return res.json({ posts: commentData })
    } catch (error) {
        throw error
    }
}
exports.post = async (req, res, next) => {
    try {
        const { name, description, post_id } = req.body;
        await commentModel.create({ name, description, post_id })
        return res.json({ message: 'data inserted' })
    } catch (error) {
        throw error
    }
}
exports.view = async (req, res) => {
    try {
        const { id } = req.params;
        const resData = await commentModel.findOne({ where: { id } });

        return res.status(200).json({ message: 'blog getby id', data: resData })
    } catch (error) {
        throw error
    }

}
exports.update = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, description } = req.body;
        await commentModel.update({ name, description }, { where: { id } });
        return res.status(200).json({ message: 'sucess' })
    } catch (error) {
        throw error;
    }
}
exports.delete = async (req, res) => {
    try {
        const { id } = req.params;
        await commentModel.destroy({
            where: { id }
        })
        res.status(200).json({ message: 'Deleted' })

    } catch (error) {
        throw error;
    }
}