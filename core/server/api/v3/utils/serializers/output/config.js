const _ = require('lodash');
const debug = require('@tryghost/debug')('api:v3:utils:serializers:output:config');

module.exports = {
    all(data, apiConfig, frame) {
        debug('all');

        frame.response = {
            config: _.pick(data, [
                'version',
                'environment',
                'database',
                'mail',
                'useGravatar',
                'labs',
                'clientExtensions',
                'enableDeveloperExperiments',
                'stripeDirect',
                'mailgunIsConfigured',
                'emailAnalytics',
                'billingUrl'
            ])
        };
    }
};
