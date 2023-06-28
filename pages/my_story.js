// Imports
import Link from "next/link";
import Image from "next/image";
import HeadConfig from "../components/HeadConfig.js";
import AboutPageHeader from "../components/about/AboutPageHeader.js";
import AboutPageLetsWorkSection from "../components/about/AboutPageLetsWorkSection.js";
import AboutPageMyselfSection from "../components/about/AboutPageMyselfSection.js";

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

      {/*<Footer/>*/}

    </>
  )
};