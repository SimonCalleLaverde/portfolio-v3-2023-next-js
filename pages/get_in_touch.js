// Imports
import Link from "next/link";
import Image from "next/image";
import HeadConfig from "../components/HeadConfig.js";//Site-Wide
import TitleConfig from "../components/contact/TitleConfig.js";//NEW 2025//Per-Page
import ContactPageHeader from "../components/contact/ContactPageHeader.js";

// Contact (Page) Component
export default function ContactPage() {
  return (
    <>

      <HeadConfig/>
      <TitleConfig/>

      <ContactPageHeader/>

      {/*<main>
        <div className="container">
          <h1>Contact (Page) Component</h1>
        </div>
      </main>*/}

      {/*<Footer/>*/}

    </>
  )
};