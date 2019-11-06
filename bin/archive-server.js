#!/usr/bin/env node

/*!
  LACE E-H Archive | Node test server | © 2019 The Open University (IET).

	https://github.com/IET-OU/cloudworks-ac-uk/blob/master/_scripts/archive-server.js
  https://github.com/tapio/live-server#usage-from-node
*/

const liveServer = require('live-server')
const fs = require('fs')
// const loaderJs = __dirname + '/../loader.js';

const params = {
	port: 9000, // 8181, // Set the server port. Defaults to 8080.
	host: '0.0.0.0', // Set the address to bind to. Defaults to 0.0.0.0 or process.env.IP.
	// root: '/public', // Set root directory that's being served. Defaults to cwd.
	open: false, // When false, it won't load your browser by default.
	ignore: 'scss,my/templates', // comma-separated string for paths to ignore
	// file: '404.html', // When set, serve this file (server root relative) for every 404 (useful for single-page applications)
	wait: 1000, // Waits for all changes, before reloading. Defaults to 0 sec.
	mount: [ [ '/components', './node_modules' ] ], // Mount a directory to a route.
	logLevel: 1, // 0 = errors only, 1 = some, 2 = lots

	middleware: [

    function (req, res, next) {
			const IS_AJAX_REQUEST = /^\/(api|wp-includes|wp-content)/.test(req.url)

			// console.log('URL:', req.url)

			if (IS_AJAX_REQUEST) {
				console.log('Ajax:', req.url) // Was: console.log('File: ', loaderJs)

				res.statusCode = 302;
				res.setHeader('Location', '/doc' + req.url)
				res.setHeader('x-archive-server', 'Ajax=' + req.url)
				res.end();

				/*const script = fs.readFileSync(loaderJs, 'utf8')

				if (script) {
					res.statusCode = 200;
					res.setHeader('Content-Type', 'application/javascript')
					res.setHeader('x-archive-server', 'script=' + loaderJs)
					res.write(script, 'utf8')
					res.end();

					return;
				} */
			}

      next();
    }
  ]
};

liveServer.start(params);

// End.
