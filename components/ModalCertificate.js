// Imports
import Link from "next/link";

// Modal Certificate (Sitewide) Component
export default function ModalCertificate() {
  return (

    <div className="modal fade" id="modalCertificate" tabIndex="-1" aria-labelledby="modalCertificateLabel" aria-describedby="Modal or popup showing my most recent resume and giving the option to download" aria-hidden="true">{/*data-bs-backdrop="static" data-bs-keyboard="false"*/}
      <div className="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-lg">{/*Scrollable Body: "modal-dialog-scrollable"*/}{/*Vertically Centered: "modal-dialog-centered"*/}
        {/*modal-sm*/}{/*Default*/}{/*modal-lg*/}{/*modal-xl*/}
        {/*There are a few classes for responsive Fullscreen, this is just one: "modal-fullscreen"*/}
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="modalCertificateLabel">Product Design inc. UX & UI. certificate</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>

          <div className="modal-body">
            <img src="/Simon Calle Laverde_LinkedIn.png" alt="Product Design inc. UX & UI. Course Certificate of Completion" style={{ width:"100%" }}/>
          </div>

          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Awesome! 🎉</button>{/*Congratulations*/}{/*Nice! 🎉*/}
          </div>
        </div>
      </div>
    </div>

  )
};