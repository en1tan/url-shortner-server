const mongoose = require('mongoose');

const urlSchema = mongoose.Schema({
    slug: {
        type: String,
        validate: {
            validator: (slug) => {
                return /^(https:|http:|ftp:|www\.)\S*/.test(slug);
            },
            message: props => `${props.value} is not a valid url!`
        },
        required: true
    },
    url: {
        type: String
    }
});

// Add nanoid from pre save
// urlSchema.pre('save', async () => {

// })

module.exports = mongoose.model('Url', urlSchema);