const fastify = require('fastify')({
    logger: true
})
require('./utils/db');

const PORT = process.env.PORT || 3000

const routes = require('./routes/url.routes');

fastify.get('/', async () => {
    return {
        uptime: process.uptime,
        message: "Up and running",
        lastCheck: Date.now()
    }
})

// Define the routes
routes.forEach((route, index) => {
    fastify.route(route)
});

const serve = async () => {
    try {
        await fastify.listen(PORT)
    } catch (err) {
        fastify.log.error(err)
        process.exit(1)
    }
}

serve()