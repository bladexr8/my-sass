// App HOC
// Used to:
// 1. Share Theme Styles
// 2. Share MobX store
// 3. remove server-side injected CSS

import App from 'next/app';
import React from 'react';

class MyApp extends App {
  public render() {
    const { Component, pageProps } = this.props;

    return <Component {...pageProps} />;
  }
}

export default MyApp;
