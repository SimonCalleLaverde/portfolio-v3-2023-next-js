// Imports
import Cube3D from "/components/Cube3D.js";

// Under Development Note (Sitewide) Component
export default function UnderDevelopmentNote() {
  return (

    <div className="under-development-note d-flex flex-column justify-content-around align-items-center text-center py-5 px-4 d-md-none">
      <Cube3D/>

      <div className="note">
        {/*
        Under development
        <br/><br/>
        <span>Note: I'm just getting back in track designing & developing this portfolio on May.
        <br/><br/>{Folio. 2023. V3}
        <br/><br/>Will be ready:</span>
        <br/>11.09.2020
        */}
        
        <h5 className="mb-4">
          I haven&apos;t forgotten of you tablet and mobile users. These responsive versions are under development and will be coming soon.
        </h5>

        {/*05.27.2023*/}
        {/*06.12.2023*/}
        <span>
          06.16.2023
        </span>

        {/*
        <span>Coming Soon</span>
        <br/>Today 17.09.2020
        */}
      </div>
    </div>

  )
};