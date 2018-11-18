const defaultConfig = require('../webpack.config.js');

module.exports = {
    plugins: defaultConfig.plugins,
    module: {
        rules: defaultConfig.module.rules
    }
};
