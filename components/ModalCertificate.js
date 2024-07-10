// Imports
import Link from "next/link";

// Modal Certificate (Sitewide) Component
export default function ModalCertificate() {
  return (

    <div className="modal fade" id="modalCertificate" tabIndex="-1" aria-labelledby="modalCertificateLabel" aria-describedby="Modal or popup showing my Product Design inc. UX & UI. Certificate of Completion" data-bs-backdrop="static" data-bs-keyboard="false" aria-hidden="true">
      {/* Scrollable Body: "modal-dialog-scrollable" */}
      {/* Vertically Centered: "modal-dialog-centered" */}
      <div className="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-lg">{/*modal-sm*/}{/*Default*/}{/*modal-xl*/}
        {/* There are a few classes for responsive Fullscreen, this is just one: "modal-fullscreen" */}
        <div className="modal-content">
          <div className="modal-header">
            <h3 className="modal-title" id="modalCertificateLabel">
              {/*Product Design inc. UX & UI. certificate*/}
              {/*Product Design inc. UX & UI. - Certificate of Completion*/}
              Product Design inc. UX & UI.
            </h3>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>

          {/* Option 2: "Simon Calle Laverde_Instagram.png" */}
          <div className="modal-body">
            <img src="/Simon Calle Laverde_LinkedIn.png" alt="Product Design inc. UX & UI. Certificate of Completion" style={{ width:"100%" }}/>
          </div>

          <div className="modal-footer">
            <Link className="btn btn-chocolate" href="https://experiencehaus.com/courses/product-design-inc-ux-ui/" target="_blank" rel="noreferrer">Visit the Experience Haus course</Link>
            <button className="btn btn-chocolate" type="button" data-bs-dismiss="modal">Close</button>
            {/*<button className="btn" type="button" data-bs-dismiss="modal">Awesome! 🎉</button>*/}
            {/*Congratulations*/}{/*Nice! 🎉*/}
          </div>
        </div>
      </div>
    </div>

  )
};