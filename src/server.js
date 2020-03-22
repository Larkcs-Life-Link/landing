import App from './App';
import React from 'react';
import { StaticRouter } from 'react-router-dom';
import express from 'express';
import theme from './theme';
import { Helmet } from 'react-helmet';
import { ServerStyleSheets } from '@material-ui/styles';
import { ThemeProvider  } from '@material-ui/core/styles';
import { renderToString } from 'react-dom/server';
const assets = require(process.env.RAZZLE_ASSETS_MANIFEST);
const bodyParser = require('body-parser')
var path=require('path');
const airtableRoutes = require('./api/airtable')
const publicFolder = process.env.NODE_ENV==='production' ? path.join(__dirname, '../build/public') : 'public';
const server = express();
server
.use(bodyParser.urlencoded({ extended: false }))
.use(bodyParser.json())
  .disable('x-powered-by')
  .use(express.static(publicFolder))
  .get('/',(req,res)=>{
    res.redirect('/home')
  })
  .get(/^\/(?!api).*/, (req, res) => {
    const context = {};
    const sheets = new ServerStyleSheets()
    const markup = renderToString(
      sheets.collect(
        <ThemeProvider  theme={theme}>
            <StaticRouter context={context} location={req.url}>
        <App />
      </StaticRouter>
      </ThemeProvider >
      )
    );
    const css = sheets.toString();
const html= `<!doctype html>
<html lang="">
<head>
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta charset="utf-8" />
    <title>Welcome to Razzle</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    ${
      assets.client.css
        ? `<link rel="stylesheet" href="${assets.client.css}">`
        : ''
    }
    <style id="jss-server-side">${css}</style>
    ${
      process.env.NODE_ENV === 'production'
        ? `<script src="${assets.client.js}" defer></script>`
        : `<script src="${assets.client.js}" defer crossorigin></script>`
    }
</head>
<body>
    <div id="root">${markup}</div>
</body>
</html>`

const helmet = Helmet.renderStatic();
    if (context.url) {
      res.redirect(context.url);
    } else {
      res.status(200).send(formatHTML(html, helmet));
    }


    function formatHTML(appStr, helmet) {
      return `
        <!DOCTYPE html>
        <html lang="en">
          <head>
          <META HTTP-EQUIV="CACHE-CONTROL" CONTENT="NO-CACHE">
          <meta name="viewport" content="width=device-width, initial-scale=1">
            ${helmet.title.toString()}
            ${helmet.meta.toString()}
            ${
              assets.client.css
                ? `<link rel="stylesheet" href="${assets.client.css}">`
                : ''
            }
            ${
              process.env.NODE_ENV === 'production'
                ? `<script src="${assets.client.js}" defer></script>`
                : `<script src="${assets.client.js}" defer crossorigin></script>`
            }
            <style id="jss-server-side">${css}</style>
          </head>
          <body>
          <div id="root">${markup}</div>
            <script src="./bundle.js"></script>
          </body>
        </html>
      `
    }


  }).use('/api/sync', airtableRoutes);

export default server;
