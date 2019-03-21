'use strict';

const fs = require('fs');
const path = require('path');
const shell = require('shelljs');
const { mkdirp } = require('mz-modules');
const schemaJson = path.resolve(__dirname, './schema.json');

// copy schema
const cwd = process.cwd();
const vscodeDir = path.resolve(cwd, './.vscode/');
const settingJson = path.resolve(vscodeDir, './settings.json');

const destJson = path.resolve(vscodeDir, './egg-schema.json');
mkdirp.sync(vscodeDir);

const settingObj = fs.existsSync(settingJson)
  ? JSON.parse(fs.readFileSync(settingJson, 'utf-8'))
  : {};

// copy schema
shell.cp(schemaJson, destJson);

// update config
const schemas = settingObj['json.schemas'] = settingObj['json.schemas'] || [];
const schemaUrl = '.vscode/egg-schema.json';
const existSchema = schemas.find(schema => schema.url === schemaUrl);

if (!existSchema) {
  schemas.push({
    fileMatch: [ 'package.json' ],
    url: schemaUrl,
  });

  fs.writeFileSync(settingJson, JSON.stringify(settingObj, null, 2));
}

console.info(`create schema in ${destJson}`);
