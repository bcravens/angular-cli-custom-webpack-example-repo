const path = require('path');

module.exports = {
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'client.js',
        library: 'clients',
        libraryTarget: 'umd',
        umdNamedDefine: false
    },
    entry: {
        client: './src/app/app.module.ts'
    },
    "externals": {
        // "rxjs": "rxjs",
        // "@angular/core": "ng.core",
        // "@angular/common": "ng.common",
        // "@angular/platform-browser": "ng.platformBrowser",
        // "@angular/elements": "ng.elements"
    }
}