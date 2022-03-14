import * as React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/core/styles';
import { CacheProvider } from '@emotion/react';
import Theme from '../src/ui/Theme';
import createEmotionCache from '../src/createEmotionCache';
import Header from '../src/ui/Header';
import Footer from '../src/ui/Footer';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export default function MyApp(props) {

  const [value, setValue] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(0)

  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <title>My page</title>
      </Head>
      <ThemeProvider theme={Theme}>
        <Header
          value={value}
          setValue={setValue}
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
        />
        <Component
          {...pageProps}
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
        />
        <Footer
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
        />
      </ThemeProvider>
    </CacheProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};
