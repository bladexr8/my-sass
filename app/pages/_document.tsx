// Document HOC
// used to modify html, head and body
// and inject shared information for
// all pages like metadata, fonts, and styles

// will integrate with Material-UI

// NOTE: Head, Html, Main and Nextscript must be returned
//       in render method for the pages of a next.js app
//       to render properly

import { ServerStyleSheets } from '@material-ui/styles';
import Document, { Head, Html, Main, NextScript } from 'next/document';
import React from 'react';

class MyDocument extends Document {
  public static getInitialProps = async (ctx) => {
    // Render app and page and get the context of the page
    // with collected side effects
    const sheets = new ServerStyleSheets();
    const originalRenderPage = ctx.renderPage;
    ctx.renderPage = () => 
      originalRenderPage({
        enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
      });

    const initialProps = await Document.getInitialProps(ctx);

    console.log(`Initial Props: ${initialProps}`);
    console.log(`Initial Props Styles: ${initialProps.styles}`);
    console.log(`React Children Styles Array: ${React.Children.toArray(initialProps.styles)}`);
    console.log(`Server Style Sheets: ${sheets}`);
    console.log(`Server Style Sheets Style Element: ${sheets.getStyleElement()}`);

    return {
      ...initialProps,
      styles: [...React.Children.toArray(initialProps.styles), sheets.getStyleElement()],
    };
  };
  
  public render() {
    console.log(`Node Environment: ${process.env.NODE_ENV}`);
    console.log(`URL App: ${process.env.URL_APP}`);
    console.log('***rendered on the server...');
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
