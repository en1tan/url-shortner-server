const mongoose = require('mongoose');

const UrlSchema = new mongoose.Schema({
    slug: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true,
        validate: {
            validator: (url) => {
                return /^(https:|http:|ftp:|www\.)\S*/.test(url);
            },
            message: props => `${props.value} is not a valid url!`
            }
        }
})

module.exports = mongoose.model('Url', UrlSchema);