// Imports

// About Page (Header) Component
export default function AboutPageHeader() {
  return (




    <header className="aboutpage-header display-flex align-items-center text-align-center">{/*flex-direction-row*/}{/*data-scene*/}
      <div className="container">

        <div className="row mb-5less">
          <div className="col-10 offset-1 col-md-8 offset-md-2">
            <div className="about-header-middle text-center">
            
              {/*Desktop Sm | Screen Readers*/}
              <h1 className="text-header-ABOUT text-rosybrown text-uppercase mb-0 d-none d-sm-block">
                About me
              </h1>

              {/*Mobile Sm*/}
              <h1 className="text-header-ABOUT text-rosybrown text-uppercase mb-0 d-block d-sm-none" aria-hidden="true">
                <div>
                  About
                </div>

                <div>
                  me
                </div>
              </h1>

              <div>
                <div className="glitch-image-wrap">
                  <img className="glitch-img" src="/about-page-images/about-header-picture-(original)-(tinypng).jpg" alt="Picture of Simón Calle Laverde with a glitch effect"/>

                  <img className="glitch-img" src="/about-page-images/about-header-picture-(original)-(tinypng).jpg" alt="" aria-hidden="true"/>

                  <img className="glitch-img" src="/about-page-images/about-header-picture-(original)-(tinypng).jpg" alt="" aria-hidden="true"/>

                  <img className="glitch-img" src="/about-page-images/about-header-picture-(original)-(tinypng).jpg" alt="" aria-hidden="true"/>

                  <img className="glitch-img" src="/about-page-images/about-header-picture-(original)-(tinypng).jpg" alt="" aria-hidden="true"/>
                </div>
                
                <span className="about-header-info text-rosybrown">
                  B. 1988
                </span>
                
                <span className="about-header-short-story font-ultra-light text-italic text-chocolate">{/*text-rosybrown*/}{/*text-uppercase*/}
                  A short story
                  <br/>about me
                </span>
              </div>

            </div>
          </div>
        </div>

      </div>
    </header>




  )
};