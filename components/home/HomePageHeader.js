// Imports
import Link from "next/link";

// Home Page (Header) Component
export default function HomePageHeader() {
  return (

    <header className="display-flex justify-content-center align-items-center">{/*flex-direction-row*/}{/*text-align-center*/}
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
            {/*<img src="/profile-images/home-header-picture-i-(cropped).jpg" alt="Simón Calle Laverde and his cat Ñeña in a pure HTML/CSS 3D rotating cube" style={{ width:"100%" }}/>*/}

            <div className="cube-3d-scene-container">
              <Link className="cube" href="https://simoncallelaverde.github.io/about" target="_blank">
                <div className="face front background-image-default" type="image" style={{ backgroundImage:"url('/profile-images/home-header-picture-i-(cropped).jpg')" }} title="Simón Calle Laverde and his cat Ñeña in a pure HTML/CSS 3D rotating cube">
                </div>

                <div className="face top background-image-default" type="image" style={{ backgroundImage:"url('/profile-images/home-header-picture-ii-(cropped).jpg')" }} title="Simón Calle Laverde and his cat Ñeña in a pure HTML/CSS 3D rotating cube" aria-hidden="true">
                </div>

                <div className="face right background-image-default" type="image" style={{ backgroundImage:"url('/profile-images/ñeña-facebook-video-screenshot-(cropped).png')" }} title="Simón Calle Laverde and his cat Ñeña in a pure HTML/CSS 3D rotating cube" aria-hidden="true">
                </div>

                <div className="face bottom background-image-default" type="image" style={{ backgroundImage:"url('/profile-images/home-header-picture-ii-(cropped).jpg')" }} title="Simón Calle Laverde and his cat Ñeña in a pure HTML/CSS 3D rotating cube" aria-hidden="true">
                </div>

                <div className="face left background-image-default" type="image" style={{ backgroundImage:"url('/profile-images/ñeña-facebook-video-screenshot-(cropped).png')" }} title="Simón Calle Laverde and his cat Ñeña in a pure HTML/CSS 3D rotating cube" aria-hidden="true">
                </div>

                <div className="face back background-image-default" type="image" style={{ backgroundImage:"url('/profile-images/home-header-picture-i-(cropped).jpg')" }} title="Simón Calle Laverde and his cat Ñeña in a pure HTML/CSS 3D rotating cube" aria-hidden="true">
                </div>
              </Link>
            </div>
          </div>
        </div>

      </div>
    </header>

  )
};