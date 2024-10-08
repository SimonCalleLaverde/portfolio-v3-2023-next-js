// Imports
import Head from "next/head"
import Logo from "../components/Logo.js";
import Nav from "../components/Nav.js";
import UnderDevelopmentNote from "../components/UnderDevelopmentNote.js";
import ModalResume from "../components/ModalResume.js";
import ModalCertificate from "../components/ModalCertificate.js";
import ModalReferral from "../components/ModalReferral.js";
import Footer from "../components/Footer.js";
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

      <Logo/>
      <Nav/>

      {/*<UnderDevelopmentNote/>*/}

      <ModalResume/>
      <ModalCertificate/>
      <ModalReferral/>

      <Component {...pageProps}/>

      {/*<Footer/>*/}

      {/* BOOTSTRAP 5 (JS & POPPER) */}
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossOrigin="anonymous"/>

      {/* ROLLY.JS */}
      {/*<Script type="text/javascript" src="/js/rolly.min.js"/>*/}
      {/*<Script type="text/javascript" src="/js/custom_javascripts.js"/>*/}

    </>
  )
};