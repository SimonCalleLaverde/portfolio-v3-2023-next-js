// Imports

// Header (ProjectPage) Component
export default function Header({ title, client }) {
	return (
    <header className="display-flex justify-content-center align-items-center text-align-center">{/*flex-direction-row*/}
      <div className="container">
        <h1 className="headline">
          { title }<br/>{ client }
        </h1>
      </div>
    </header>
	)
};