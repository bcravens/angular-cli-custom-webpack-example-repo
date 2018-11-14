import 'zone.js/dist/zone-node';
import 'reflect-metadata';
import * as express from 'express';
import * as path from 'path';

// import { renderModuleFactory } from '@angular/platform-server';
// import { readFileSync } from 'fs';
// import { enableProdMode } from '@angular/core';
// const { AppServerModuleNgFactory } = require('../dist-server/main');
// const { AppServerModuleNgFactory } = require(process.cwd() + '/dist-server/main');

// enableProdMode();

const app = express();

// var dir = "./";
app.enable('trust proxy');
app.use('/dist', express.static(path.resolve(process.cwd(), 'dist/clients-lib/bundles/clients-lib.umd.js')));
app.get('/@reviq/clients', (req, res) => {
    res.sendFile(path.resolve(process.cwd(), 'dist/clients-lib/bundles/clients-lib.umd.js'));
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

app.route('*').get((req, res) => {

    console.log("******* request *******")

    res.sendFile(path.resolve(process.cwd(), 'dist/clients-lib/bundles/clients-lib.umd.js'));

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

app.listen(3001, () => {
    console.log(`Angular Universal Node Express server listening on http://localhost:3001`);
});