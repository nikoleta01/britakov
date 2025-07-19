import Head from "next/head";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "../styles/theme";
import { AppProps } from "next/app";
import "../styles/global.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
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
    </>
  );
}
