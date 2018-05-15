const ghostVersion = require('../../lib/ghost-version');
const settingsCache = require('../../services/settings/cache');
const urlService = require('../../services/url');

const site = {
    docName: 'site',

    read: {
        permissions: false,
        query() {
            return {
                title: settingsCache.get('title'),
                url: urlService.utils.urlFor('home', true),
                version: ghostVersion.safe,
                defaultLocale: settingsCache.get('default_locale')
            };
        }
    }
};

module.exports = site;
