'use strict';

exports.config = {
    framework: 'mocha',
    directConnect: true,
    specs: [
        'client/pages/*.spec.e2e.js',
        'client/shared/*.spec.e2e.js',
        'client/staff/*.spec.e2e.js',
    ],
    seleniumAddress: 'http://localhost:4444/wd/hub',
    baseUrl: 'http://localhost:8080/',
    mochaOpts: {
        reporter: 'spec',
        timeout: 6000
    },
    onPrepare: function () {
        require('babel-core/register')({
            presets: ['es2015'],
            plugins: [
                'transform-es2015-modules-commonjs',
                'transform-runtime',
            ]
        });
    },
};