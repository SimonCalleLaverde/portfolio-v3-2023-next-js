// NOT IN USE

// Imports

// Project Page (Header) Component
export default function ProjectPageHeader({ title, client }) {
  return (
    <header className="display-flex justify-content-center align-items-center text-align-center">{/*flex-direction-row*/}
      <div className="container">
        <h1 className="text-header">
          { title }<br/>{ client }
        </h1>
      </div>
    </header>
  )
};