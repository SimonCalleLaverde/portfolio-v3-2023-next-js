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
        
        <span>I haven&apos;t forgotten of you mobile users. The mobile version is under development.
        <br/><br/>Coming soon</span>
        <br/>05.15.2023

        {/*
        <span>Coming Soon</span>
        <br/>Today 17.09.2020
        */}
      </div>
    </div>

  )
};