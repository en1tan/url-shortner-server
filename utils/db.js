const mongoose = require('mongoose');
const mongoUrl = process.env.MONGODB_URI || 'mongodb://x1k:hero@localhost:27017/fastify-rmix?authSource=admin';
try {
    mongoose.connect(mongoUrl, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    console.log("Database connected successfully");
} catch (err) {
    console.log(err);
}

module.exports = mongoose;