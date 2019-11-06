#!/usr/bin/env node

/*!
  Fix HTML includes of Javascript, CSS styles, images etc.
  Nick Freear / 10-Sep-2019.
*/

const replace = require('replace');

const OUTPUT_DIR  = '/docs';  // Was: '/_kn.open.ac.uk';
const PUBLIC_HTML = outputPath(); // '/public/');
const CSS_FILES   = outputPath('/css/');
const JQUERY_CDN  = 'https://unpkg.com/jquery@3.4.1/dist/jquery.slim.min.js';

// Fix <link>s to CSS stylesheets :~ href="../../../../20151123184024cs_/http%253A/kn.open.ac.uk/includes/header.css"
replace({
  paths: [ PUBLIC_HTML ],
  regex: /http:\/\/(cdn.leafletjs.com|fonts.googleapis.com|www.google.com|cdn.jsdelivr.net|s.w.org)/g,
  replacement: 'https://$1',
  count: true,
  recursive: true
});

replace({
  paths: [ PUBLIC_HTML ],
  regex: /href="(http:\/\/evidence.laceproject.eu\/)?(contribute|evidence|projects|propositions)\/"/g,
  replacement: 'href="/$2/"',
  count: true,
  recursive: true
});

replace({
  paths: [ PUBLIC_HTML ],
  regex: /href="(http:\/\/evidence.laceproject.eu\/)?(evidence\/by-sector)\/"/g,
  replacement: 'href="/$2/"',
  count: true,
  recursive: true
});

// Javascript embedded in HTML.
replace({
  paths: [ PUBLIC_HTML ],
  regex: /"http:\/\/evidence.laceproject.eu(\/.+\/iet-ou-logo-400px.svg)"/g,
  replacement: '"$1"',
  count: true,
  recursive: true
});

replace({
  paths: [ PUBLIC_HTML ],
  regex: /:"http:\\\/\\\/evidence.laceproject.eu\\\/wp-includes\\\/js\\\/wp-emoji-release.min.js\?ver=5.2.4"\}/g,
  replacement: ':"\/wp-includes\/js\/wp-emoji-release.min.js?ver=5.2.4"}',
  count: true,
  recursive: true
});

// 'http://evidence.laceproject.eu/wp-content/
replace({
  paths: [ PUBLIC_HTML ],
  regex: /'http:\/\/evidence.laceproject.eu\/(wp-content\/.+-hub\/|XX--api.+|wp-admin.*php)'/g,
  replacement: "'/$1'",
  count: true,
  recursive: true
});

replace({
  paths: [ PUBLIC_HTML ],
  regex: /'http:\/\/evidence.laceproject.eu\/api.+',/g,
  replacement: "'/api/%s/index.json@', // Was: 'http://evidence.laceproject.eu/api/%s/?'",
  count: true,
  recursive: true
});

function outputPath (file) {
  return require('path').join(__dirname, '/..', OUTPUT_DIR, file || '');
}

// End.
