// Imports
import Cube3D from "/components/Cube3D.js";

// Home Page (Header) Component
export default function HomePageHeader() {
  return (

    <header className="homepage-header display-flex justify-content-center align-items-center">{/*flex-direction-row*/}{/*text-align-center*/}
      <div className="container">

        <div className="row d-flex flex-column flex-md-row justify-content-between mt-md-5 pt-md-5">
          <div className="col-md-6">
            <p className="mb-4">
              Hello
            </p>

            <h1 className="headline-hero mb-5 mb-md-0">
              Simón Calle—{/*Em Dash*/}<br/>
              UX, UI, & Product<br/>
              Designer with<br/>
              experience in Front-<br/>
              end—{/*Em Dash*/}graduated as a<br/>
              Publicist.
            </h1>

            {/* Work on your work, until your work, gets you work — Chris do */}

            {/*<p>A designer who codes</p>*/}

            {/*<p>I&apos;m a UX/UI Product Designer & Front-end Developer</p>*/}
          </div>

          <div className="col-md-5 offset-md-1">
            {/*<img src="/home-page-images/home-header-picture-i-(cropped).jpg" alt="Simón Calle Laverde and his cat Ñeña in a pure HTML & CSS 3D rotating cube" style={{ width:"100%" }}/>*/}

            <Cube3D/>
          </div>
        </div>

      </div>
    </header>

  )
};