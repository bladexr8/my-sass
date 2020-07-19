// Document HOC
// used to modify html, head and body
// and inject shared information for
// all pages like metadata, fonts, and styles

// will integrate with Material-UI

// NOTE: Head, Html, Main and Nextscript must be returned
//       in render method for the pages of a next.js app
//       to render properly

import Document, { Head, Html, Main, NextScript } from 'next/document';
import React from 'react';

class MyDocument extends Document {
  public render() {
    console.log(`Node Environment: ${process.env.NODE_ENV}`);
    console.log(`URL App: ${process.env.URL_APP}`);
    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta name="google" content="notranslate" />
          <meta name="theme-color" content="#303030" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
