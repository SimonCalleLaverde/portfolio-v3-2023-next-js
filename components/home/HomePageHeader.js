// Imports
import Cube3D from "/components/Cube3D.js";

// Home Page (Header) Component
export default function HomePageHeader() {
  return (

    <header className="homepage-header display-flex justify-content-center align-items-center">{/*flex-direction-row*/}{/*text-align-center*/}
      <div className="container">

        <div className="row mt-md-5 pt-md-5">
          <div className="col-md-6">
            <p className="mb-4">Hello</p>

            <h1 className="headline">
              {/*Portfolio V3 2023 NextJS*/}
              Simón Calle—{/*Em Dash*/}<br/>UX, UI, & Product Designer with experience in Front-end—{/*Em Dash*/}graduated as a Publicist.
            </h1>

            {/*<p>A DESIGNER WHO CODES</p>*/}

            {/*<p>I&apos;m a UX/UI Product Designer & Front-end Developer</p>*/}

            {/*Work on your work, until your work, gets you work — Chris do*/}
          </div>

          <div className="col-md-5 offset-md-1">
            {/*<img src="/profile-images/home-header-picture-i-(cropped).jpg" alt="Simón Calle Laverde and his cat Ñeña in a pure HTML & CSS 3D rotating cube" style={{ width:"100%" }}/>*/}

            <Cube3D/>
          </div>
        </div>

      </div>
    </header>

  )
};