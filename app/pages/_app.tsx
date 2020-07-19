// App HOC
// Used to:
// 1. Share Theme Styles
// 2. Share MobX store
// 3. remove server-side injected CSS

import CssBaseline from'@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/styles';
import App from 'next/app';
import React from 'react';
// import { isMobile } from '../lib/isMobile';
import { theme } from '../lib/theme';

class MyApp extends App {
  
  public componentDidMount() {
    // Remove the server-side injected CSS
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }

  public render() {
    const { Component, pageProps } = this.props;

    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    );
  }
}

export default MyApp;
