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

function outputPath (file) {
  return require('path').join(__dirname, '/..', OUTPUT_DIR, file || '');
}

// End.
