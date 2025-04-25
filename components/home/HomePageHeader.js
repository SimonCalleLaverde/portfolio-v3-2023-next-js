// Imports
import Cube3D from "/components/Cube3D.js";
import MadeIn from "/components/MadeIn.js";
import Since1988 from "/components/Since1988.js";
import Copyright from "/components/Copyright.js";

// Home Page (Header) Component
export default function HomePageHeader() {
  return (

    <header className="homepage-header display-flex justify-content-center align-items-md-center">
      <div className="container">

        <div className="row mt-md-5 pt-md-3 pt-lg-4 pt-xl-4more pt-xxl-5">{/*d-flex flex-column flex-md-row justify-content-between*/}
          <div className="col-md-6 offset-md-1 order-md-2 d-flex flex-column align-items-center align-items-md-start">{/*"d-flex flex-column align-items-center align-items-md-start" For Mobile, In Portrait*/}
            <p className="mb-3">{/*mb-3 mb-md-4*/}
              {/*Hello*/}
              {/*It&apos;s nice to meet you!*/}
              {/*Nice to meet you!*/}
              {/*Welcome*/}
              {/*Welcome, nice to meet you!*/}
              Welcome!
            </p>

            {/* Desktop | Screen Readers */}
            <h1 className="headline-hero d-none d-md-block mb-md-0">{/*text-start*/}
              I&apos;m Simón Calle—{/*Em Dash*/}
              <br/>Web, UX, UI, & Product
              {/*<br/>*/} Designer with 5+ years
              {/*<br/>*/} of experience in Front-
              {/*<br/>*/} end—{/*Em Dash*/}graduated as a
              {/*<br/>*/} creative Publicist{/*.*/}
            </h1>

            {/* Mobile */}
            <h1 className="headline-hero d-block d-md-none mb-5" aria-hidden="true">{/*text-start*/}
              I&apos;m Simón Calle—{/*Em Dash*/}
              Web, UX, UI, & Product
              Designer with 5+ years
              of experience in Front-
              end—{/*Em Dash*/}graduated as a
              creative Publicist{/*.*/}
            </h1>




            {/* HIDDEN | TO TEST SOON */}
            {/* Desktop | Screen Readers */}
            <h1 className="headline-hero   d-none   mb-md-0">{/*d-none d-md-block*/}
              I&apos;m Simón Calle—{/*Em Dash*/}
              <br/>Digital Product Designer with
              {/*<br/>*/} experience in UX, UI,
              {/*<br/>*/} & Front-end—{/*Em Dash*/}graduated as a
              {/*<br/>*/} {/*creative */}Publicist{/*.*/}
            </h1>

            {/* HIDDEN | TO TEST SOON */}
            {/* Mobile */}
            <h1 className="headline-hero   d-none   mb-5" aria-hidden="true">{/*d-block d-md-none*/}
              I&apos;m Simón Calle—{/*Em Dash*/}
              Digital Product Designer with
              experience in UX, UI,
              & Front-end—{/*Em Dash*/}graduated as a
              {/*creative*/} Publicist{/*.*/}
            </h1>




            <p className="slogan mt-2">
              Bringing exciting new projects to life.
              {/*<br/>Getting the ball rolling back in 2025.*/}
            </p>

            {/* Work on your work, until your work, gets you work — Chris do */}
            {/*<p>A designer who codes</p>*/}
            {/*<p>I&apos;m a UX/UI Product Designer & Front-end Developer</p>*/}
          </div>

          <div className="col-md-5 order-md-1">
            {/*<img src="/home-page-images/home-header-picture-i-(cropped).jpg" alt="Simón Calle Laverde and his cat Ñeña in a pure HTML & CSS 3D rotating cube" style={{ width:"100%" }}/>*/}
            <Cube3D/>
          </div>
        </div>

      </div>

      {/*<MadeIn/>

      <Since1988/>*/}

      <Copyright/>
    </header>

  )
};