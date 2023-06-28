// REMOVED ALL "ROLLY" & "RELLAX" STUFF

// Imports
import Image from "next/image";

// About Page Myself (Section) Component
export default function AboutPageMyselfSection() {
  return (




    <section className="aboutpage-myself-section">
      {/* Desktop | Screen Readers */}
      <img className="image-candelaria d-none d-md-block rellax" src="/about-page-images/about-bogota-colombia-candelaria-image.jpg"/>
      <img className="image-england-port d-none d-md-block rellax" src="/about-page-images/about-london-england-port-image.jpg"/>
      <img className="image-palm-beach d-none d-md-block rellax" src="/about-page-images/about-colombia-palm-beach-image.jpg"/>
      <img className="image-bogota-colombia d-none d-md-block rellax" src="/about-page-images/about-bogota-colombia-marcela-pinzon-image.jpg"/>

      {/* Mobile */}
      <img className="image-candelaria d-block d-md-none mb-5 pb-2" src="/about-page-images/about-bogota-colombia-candelaria-image.jpg" aria-hidden="true"/>
      <img className="image-england-port d-block d-md-none mb-5" src="/about-page-images/about-london-england-port-image.jpg" aria-hidden="true"/>
      {/*<img className="image-palm-beach d-block d-md-none" src="/about-page-images/about-colombia-palm-beach-image.jpg" aria-hidden="true"/>*/}
      {/*<img className="image-bogota-colombia d-block d-md-none" src="/about-page-images/about-bogota-colombia-marcela-pinzon-image.jpg" aria-hidden="true"/>*/}

      <div className="container">

        <div className="row pb-1 pb-md-0">
          <div className="col-md-6 offset-md-5">
            <div className="">{/*pl-3*/}
              <div className="about-intro font-ultra-light text-rosybrown">
                {/* {{ content }} */}




Hi there, I live in the beautiful country of Colombia which I have shown in some photos throughout my portfolio. I have a career in marketing and advertising and over 6 years of experience in web development. I worked over 4 years of that time for an international agency and clients around the world. {/*We started working in a physical environment, the company then moved to a remote setting in the last two and a half years that I worked there.*/}

I started my journey after graduating with a bachelor's degree as a <em className="font-ultra-light text-italic">Publicist</em> {/*with studies in marketing and advertising */}in the <a href="https://www.utadeo.edu.co/es" target="blank">Universidad&nbsp;Jorge&nbsp;Tadeo&nbsp;Lozano</a>. I wanted to apply my 5 years long career knowledge through digital platforms so I then took a continuing education program course in <em className="font-ultra-light text-italic">Web Design and Design for Mobile Devices</em> in a recognized university here in my country, the <a href="https://www.javeriana.edu.co/home" target="blank">Pontificia&nbsp;Universidad&nbsp;Javeriana</a>.

I then worked for over 4 years with the great team of <a href="https://www.codenation.com/" target="blank">Code&nbsp;Nation</a>, a 5 star rated international{/* company*/} digital agency based in Australia. There, we created dozens of robust and powerful campaign websites and platforms for both progressive and big organizations. {/*we had a couple of occations  where all the team could get together.*/}

In the past couple of years I have been learning much more about UI design, UX research and strategy, web best practices, and enhancing my design and coding skills alike. <a href="/projects">Read&nbsp;&&nbsp;see&nbsp;more.</a>




                {/*Hi, I live in the beautiful country of Colombia. I have a career in marketing and advertising and 6+ years of experience in web development, working 4 years of that time for an international company and clients from different countries, managing the work first in a physical environment, and then for 2 and a half years everything was remote; we had a couple of occations  where all the team could get together.

                I started with a basic university course for web development in a recognized university here in my country, the Pontificia Universidad Javeriana, after graduating from marketing and advertising in the Universidad Jorge Tadeo Lozano.

                I then worked for 4+ years with the great team of Code Nation, a 5 star rated international company based in Australia. There, we created dozens of robust and powerful campaign websites and platforms for both progressive and big organizations.*/}
              </div>

              {/* Desktop Sm | Screen Readers */}
              <div className="about-postdata d-none d-sm-flex flex-row justify-content-between font-ultra-light text-rosybrown mt-sm-5less mt-md-5">{/*column-div*/}
                <div>
                  I also have a background in photography and some experience in advertising photography. I studied photography for 5 years of my live in an elective course, utilizing both analogical and digital photography. I then

                  {/*I have also a background in photography and some experience in advertising photography. I studied photography for 5 years of my live, utilizing all from analogical photography to digital photography, I then worked on a personal*/}
                </div>

                <div>
                  worked on a monograph project around photography for advertising while graduating school, and followed with a job in a photography studio where I worked for small periods of time in different occations.

                  {/*project around photography for advertising, and then I had a job in a photography studio. But it is a hard job nowadays, as now anyone with a digital camera can call themselves a photographer; that’s one bussy industry.*/}
                </div>
              </div>

              {/* Mobile Sm */}
              <div className="about-postdata font-ultra-light text-rosybrown mt-5less d-block d-sm-none" aria-hidden="true">
                <div>
                  I also have a background in photography and some experience in advertising photography. I studied photography for 5 years of my live in an elective course, utilizing both analogical and digital photography. I then worked on a monograph project around photography for advertising while graduating school, and followed with a job in a photography studio where I worked for small periods of time in different occations.
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Desktop | Screen Readers */}
        <div className="row d-none d-md-block">
          <div className="col-md-12">
            <img className="image-england-park" src="/about-page-images/about-london-england-park-image.jpg"/>
          </div>
        </div>

      </div>

      {/* Mobile */}
      <img className="image-england-park d-block d-md-none mt-5 pt-1" src="/about-page-images/about-london-england-park-image.jpg" aria-hidden="true"/>
    </section>




  )
};