// Imports
import Cube3D from "/components/Cube3D.js";

// Under Development Note (Sitewide) Component
export default function UnderDevelopmentNote() {
  return (

    <div className="under-development-note d-flex d-md-none flex-column justify-content-around align-items-center">{/*text-center*/}
      <Cube3D/>

      <div className="note">
        {/*
        <span>Coming Soon</span>
        <br/>Today 17.09.2020
        */}

        {/*
        Under development
        <br/><br/>
        <span>Note: I'm just getting back in track designing & developing this portfolio on May.
        <br/><br/>{Folio. 2023. V3}
        <br/><br/>Will be ready:</span>
        <br/>11.09.2020
        */}
        
        <h5>
          I haven&apos;t forgotten of you mobile and tablet users.
        </h5>

        <p className="mt-4">{/*mb-0*/}
          The responsive version is under development and will be launching {/*today:*/}in a few days.
          <br/><br/>

          {/*07.07.2023*/}
          {/*05.27.2023*/}
          {/*06.12.2023*/}
          {/*06.16.2023*/}
          {/*06.20.2023*/}
          {/*06.23.2023*/}
          {/*On due date*/}
          {/*–As of July 01, 2023*/}
          {/*—As of July 02, 2023*/}
          {/*—As of July 07, 2023*/}
          {/*07.07.2023*/}

          <span>
            —As of 07.07.2023
          </span>
        </p>
      </div>
    </div>

  )
};