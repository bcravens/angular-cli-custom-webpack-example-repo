"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("zone.js/dist/zone-node");
require("reflect-metadata");
// import { renderModuleFactory } from '@angular/platform-server';
var express = require("express");
// import { readFileSync } from 'fs';
// import { enableProdMode } from '@angular/core';
var path = require("path");
// const { AppServerModuleNgFactory } = require('../dist-server/main');
// const { AppServerModuleNgFactory } = require(process.cwd() + '/dist-server/main');
// enableProdMode();
var app = express();
// var dir = "./";
app.enable('trust proxy');
app.use('/dist', express.static(path.resolve(process.cwd(), 'dist/client.js')));
app.get('/@reviq/clients', function (req, res) {
    res.sendFile(path.resolve(process.cwd(), 'dist/client.js'));
});
// console.log(process.cwd())
// const indexHtml = readFileSync(process.cwd() + '/dist/index.html', 'utf-8').toString();
// const indexHtml = readFileSync(__dirname + '/dist/index.html', 'utf-8').toString();
// app.get('*.*', express.static(__dirname + '/dist', {
//     maxAge: '1y'
// }));
// app.get('*.*', express.static(process.cwd() + '/dist', {
//     maxAge: '1y'
// }));
app.route('*').get(function (req, res) {
    console.log("******* request *******");
    res.sendFile(path.resolve(process.cwd(), 'dist/client.js'));
    // renderModuleFactory(AppServerModuleNgFactory, {
    //     document: indexHtml,
    //     url: req.url
    // })
    //     .then(html => {
    //         res.status(200).send(html);
    //     })
    //     .catch(err => {
    //         console.log(err);
    //         res.sendStatus(500);
    //     });
});
app.listen(3001, function () {
    console.log("Angular Universal Node Express server listening on http://localhost:3001");
});
//# sourceMappingURL=server.js.map