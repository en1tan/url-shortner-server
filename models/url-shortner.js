const mongoose = require('mongoose');

const urlSchema = mongoose.Schema({
    slug: {
        type: String,
    },
    url: {
        type: String,
        validate: {
            validator: (url) => {
                return /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/.test(url);

            },
            message: props => `${props.value} is not a valid url!`
        },
        required: true
    }
});

module.exports = mongoose.model('Url', urlSchema);