// Imports

// Header (HomePage) Component
export default function Header() {
  return (
    <header className="display-flex justify-content-center align-items-center text-align-center">{/*flex-direction-row*/}
      <div className="container">
        <h1 className="headline">
          Portfolio V3 2023 NextJS
        </h1>

        <p>I'm a<br/>
        UX/UI Product Designer & Front-end Developer<br/>
        So that you don't have to</p>
      </div>
    </header>
  )
};