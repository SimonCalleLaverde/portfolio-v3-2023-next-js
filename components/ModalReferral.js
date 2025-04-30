// Imports
import Link from "next/link";

// Modal Referral (Sitewide) Component
export default function ModalReferral() {
  return (

    <div className="modal fade" id="modalReferral" tabIndex="-1" aria-labelledby="modalReferralLabel" aria-describedby="Modal or popup showing my Code Nation Australia Work Referral Letter" data-bs-backdrop="static" data-bs-keyboard="false" aria-hidden="true">
      {/* Scrollable Body: "modal-dialog-scrollable" */}
      {/* Vertically Centered: "modal-dialog-centered" */}
      <div className="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-lg">{/*modal-sm*/}{/*Default*/}{/*modal-xl*/}
        {/* There are a few classes for responsive Fullscreen, this is just one: "modal-fullscreen" */}
        <div className="modal-content">
          <div className="modal-header">
            <h3 className="modal-title" id="modalReferralLabel">
              {/*Code Nation Australia Work Referral Letter*/}
              {/*Work Referral Letter*/}
              {/*Boss Referral Letter*/}
              Referral Letter from my Australian Ex-Boss. Which I&apos;m Showing for the First Time Here Since 2025.
            </h3>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>

          <div className="modal-body">
            <img src="/Referral Letter Simon Calle Laverde.png" alt="Code Nation Australia Work Referral Letter" style={{ width:"100%" }}/>
          </div>

          <div className="modal-footer">
            <Link className="btn btn-chocolate" href="https://www.codenation.com/" target="_blank" rel="noreferrer">Visit Code Nation, Melbourne, Australia</Link>
            <button className="btn btn-chocolate" type="button" data-bs-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>

  )
};