// Imports
import Head from "next/head"
import Script from "next/script"
// Adding "main.scss" (Global Or General) CSS (Can Only Within This "_app.js")
import "../styles/main.scss";//import "../styles/globals.scss";

// Main Entry Point Into The App (Every Individual Page Will Start From This Template)
export default function PortfolioV32023NextJS({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
      </Head>

      {/* BOOTSTRAP 5 (JS & POPPER) */}
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossOrigin="anonymous"/>

      <Component {...pageProps}/>
    </>
  )
};