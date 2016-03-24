import 'babel-polyfill';
require('es6-promise').polyfill();
require('isomorphic-fetch');
import koa from 'koa';
// import koaProxy from 'koa-proxy';
import koaStatic from 'koa-static';
import Transmit from 'react-transmit';
import Root from 'Components/Root';

try {
  const app = koa();
  const hostname = process.env.HOSTNAME || 'localhost';
  const port = process.env.PORT || 3000;
  const webserver = `http://${hostname}:${port}`;

  app.use(koaStatic('static'));

  // app.use(koaProxy({
  //   host: githubApi.url,
  //   match: /^\/api\/github\//i,
  //   map: (path) => path.replace(/^\/api\/github\//i, '/')
  // }));

  app.use(function *(next) {
    yield ((callback) => {
      Transmit.renderToString(Root).then(({reactString, reactData}) => {
        const template = (
          `<!doctype html>
          <html lang='en-us'>
            <head>
              <meta charset='utf-8' />
              <title>Neos React Rendering</title>
            </head>
            <body>
              <div id='react-root'>${reactString}</div>
            </body>
          </html>`
        );

        this.type = 'text/html';
        this.body = Transmit.injectIntoMarkup(template, reactData, [`${webserver}/dist/client.js`]);

        callback(null);
      }).catch(e => {
        callback(e);
      });
    });
  });

  app.listen(port, () => {
    console.info('==> ✅  Server is listening');
    console.info('==> 🌎  Go to http://%s:%s', hostname, port);
  });
} catch (error) {
  console.error(error.stack || error);
  throw error;
}
