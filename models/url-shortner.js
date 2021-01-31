const mongoose = require('mongoose');

const urlSchema = mongoose.Schema({
    slug: {
        type: String,
    },
    url: {
        type: String,
        validate: {
            validator: (url) => {
                return '/^(http[s]?:\\/\\/(www\\.)?|ftp:\\/\\/(www\\.)?|(www\\.)?){1}([0-9A-Za-z-\\.@:%_\+~#=]+)+((\\.[a-zA-Z]{2,3})+)(/(.)*)?(\\?(.)*)?$/i'.test(url);
            },
            message: props => `${props.value} is not a valid url!`
        },
        required: true
    }
});

// Add nanoid from pre save
// urlSchema.pre('save', async () => {

// })

module.exports = mongoose.model('Url', urlSchema);