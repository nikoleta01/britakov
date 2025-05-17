import { useEffect } from "react";
import Head from "next/head";
import { CacheProvider, EmotionCache } from "@emotion/react";
import createCache from "@emotion/cache";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { AppProps } from "next/app";
import theme from "../styles/theme";
import "../styles/global.css";

// Client-side cache, shared for the whole session of the user in the browser
const clientSideEmotionCache = createCache({ key: "css", prepend: true });

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

export default function MyApp({
  Component,
  emotionCache = clientSideEmotionCache,
  pageProps,
}: MyAppProps) {
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles && jssStyles.parentElement) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <title>Britakov - Umelecko-remeselné kováčstvo</title>
        <meta
          name="description"
          content="Britakov - Umelecko-remeselné kováčstvo, ponúkame širokú škálu kovaných výrobkov, zábradlí, brán, plotov a iných kovových prvkov."
        />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  );
}
