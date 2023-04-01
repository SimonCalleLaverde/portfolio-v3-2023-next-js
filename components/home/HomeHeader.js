// Imports

// Home (Header) Component
export default function HomeHeader() {
  return (
    <header className="display-flex justify-content-center align-items-center text-align-center">{/*flex-direction-row*/}
      <div className="container">
        <h1 className="headline">
          {/*Portfolio V3 2023 NextJS*/}
          Simón Calle Laverde - 2023
        </h1>

        <p>A DESIGNER WHO CODES</p>

        <br/>

        <p>I'm a <em>{` { `}UX/UI Product Designer & Front-end Developer{` } `}</em><br/>
        So that you don't have to.</p>

        {/*Work on your work, until your work, gets you work - Chris do*/}
      </div>
    </header>
  )
};