// Imports
import Link from "next/link";
import Image from "next/image";
import TitleConfig from "../components/about/TitleConfig.js";//NEW 2025//Per-Page
import HeadConfig from "../components/HeadConfig.js";//Site-Wide
import AboutPageHeader from "../components/about/AboutPageHeader.js";
import AboutPageMyselfSection from "../components/about/AboutPageMyselfSection.js";
import AboutPageLetsWorkSection from "../components/about/AboutPageLetsWorkSection.js";
import Footer from "../components/Footer.js";

// About (Page) Component
export default function AboutPage() {
  return (
    <>

      <HeadConfig/>

      <AboutPageHeader/>

      <AboutPageMyselfSection/>

      <AboutPageLetsWorkSection/>

      {/*<main>
        <div className="container">
          <h1>About (Page) Component</h1>
        </div>
      </main>*/}

      <Footer/>

    </>
  )
};