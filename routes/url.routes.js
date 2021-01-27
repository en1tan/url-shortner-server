const urlController = require('../controllers/url.controller');

const routes = [
    {
        method: 'GET',
        url: '/api/slug/all',
        handler: urlController.getAllSlugs
    },
    {
        method: 'GET',
        url: '/api/slug/:slug',
        handler: urlController.getUrl
    },
    {
        method: 'POST',
        url: '/api/slug/new',
        handler: urlController.generateSlug
    },
    {
        method: 'DELETE',
        url: '/api/slug/:slug',
        handler: urlController.deleteSlug
    }
]

module.exports = routes;