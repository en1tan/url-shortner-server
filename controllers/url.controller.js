const boom = require('boom');
const { nanoid } = require('nanoid');
const Url = require('../models/Url');

// Get all Slugs
exports.getAllSlugs = async (req, rep) => {
    try {
        let slugs = await Url.find();
        return rep.code(200).send({ susccess: true, data: slugs });
} catch (err) {
        throw boom.boomify(err);
    }
}

// Get a url by slug id
exports.getUrl = async (req, rep) => {
    try {
        const {slug} = req.params
        let url = await Url.find({ slug });
        return rep.code(200).send({success: true, data: url})
    } catch (err) {

    }
}

// Add new slug
exports.generateSlug = async (req, rep) => {
    try {
        const { url } = req.body;
        let newSlug = new Url({
            url,
            slug: nanoid(7)
        });
        newSlug.save();
        return rep.code(201).send({ success: true, data: newSlug });
    } catch (err) {
        throw boom.boomify(err);
    }
}

// Delete Slug
exports.deleteSlug = async (req, rep) => {
    const {slug} = req.params
    try {
        Url.deleteOne({ slug });
        return rep.code(200).send({ success: true });
    } catch (err) {

    }
}