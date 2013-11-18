module.exports = function(config){
    config.set({
        basePath: '..',
        frameworks: ['mocha', 'chai'],
        files: [
            'modules/behaviors.js',
            'tests/behaviors.js'
        ],
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['Chrome'],
        singleRun: false,
        reportSlowerThan: 500
    });
};