// REMOVED ALL "ROLLY" & "RELLAX" STUFF

// Imports
import Image from "next/image";

// About Page Lets Work (Section) Component
export default function AboutPageLetsWorkSection() {
  return (




    <section className="aboutpage-lets-work-section">
      {/* Desktop | Screen Readers */}
      <img className="image-england-castle d-none d-md-block" src="/about-page-images/about-london-england-castle-image.jpg" alt=""/>
      <img className="image-villa-de-leyva d-none d-md-block" src="/about-page-images/about-villa-de-leyva-colombia-daniela-patel-image.jpg" alt=""/>
      <img className="image-turkey-cats d-none d-md-block" src="/about-page-images/about-istanbul-turkey-cats-image.jpg" alt=""/>

      {/* Mobile */}
      <img className="image-england-castle d-block d-md-none mb-5 pb-2" src="/about-page-images/about-london-england-castle-image.jpg" alt="" aria-hidden="true"/>

      <div className="container">

        {/* Desktop | Screen Readers */}
        <div className="row d-none d-md-block">
          <div className="col-md-8 offset-md-2">
            <h2 className="text-intro text-rosybrown text-uppercase text-center">
              I&apos;ll be happy to work with you in any business website or branding related project. I love interactive design and doing awesome platforms that stand out!
            </h2>
          </div>
        </div>

        {/* Mobile */}
        <div className="row d-block d-md-none" aria-hidden="true">
          <div className="col-12">
            <h2 className="text-intro text-rosybrown text-uppercase text-center">
              I&apos;ll be happy to work with you in any business website or branding related project. I love interactive design and doing awesome platforms that stand out!
            </h2>
          </div>
        </div>

        {/*<div className="row mt-5">
          <div className="col-md-6 offset-md-3">
            <div className="about-contact-me text-rosybrown text-center">
              Contact me and we can talk about your needs and see if I can help. Drop me a line here or chat with me in social media.
            </div>
          </div>
        </div>*/}

      </div>

      {/* Mobile */}
      <img className="image-villa-de-leyva d-block d-md-none my-5 pb-1" src="/about-page-images/about-villa-de-leyva-colombia-daniela-patel-image.jpg" alt="" aria-hidden="true"/>
      <img className="image-turkey-cats d-block d-md-none mb-5 pb-2" src="/about-page-images/about-istanbul-turkey-cats-image.jpg" alt="" aria-hidden="true"/>
    </section>




  )
};