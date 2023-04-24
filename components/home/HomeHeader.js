// Imports

// Home (Header) Component
export default function HomeHeader() {
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
            {/*<img src="/profile-images/home-header-picture-(cropped).jpg" alt="Home header picture of Simón Calle Laverde with his glasses on his hair" style={{ width:"100%" }}/>*/}




            <div className="cube-3d-scene-container">
              <div className="cube">
                <div className="face front">
                  <img src="/profile-images/home-header-picture-(cropped).jpg" alt="Home header picture of Simón Calle Laverde with his glasses on his hair" style={{ width:"100%" }}/>
                </div>

                <div className="face top">
                  Top
                </div>

                <div className="face right">
                  Right
                </div>

                <div className="face bottom">
                  Bottom
                </div>

                <div className="face left">
                  Left
                </div>

                <div className="face back">
                  Back
                </div>
              </div>
            </div>




          </div>
        </div>

      </div>
    </header>
  )
};