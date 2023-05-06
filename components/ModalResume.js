// Imports
import Link from "next/link";

// Modal Resume (Sitewide) Component
export default function ModalResume() {
  return (

    <div className="modal fade" id="modalResume" tabIndex="-1" aria-labelledby="modalResumeLabel" aria-describedby="Modal or popup showing my most recent resume and giving the option to download" data-bs-backdrop="static" data-bs-keyboard="false" aria-hidden="true">
      <div className="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-xl">{/*Scrollable Body: "modal-dialog-scrollable"*/}{/*Vertically Centered: "modal-dialog-centered"*/}
        {/*modal-sm*/}{/*Default*/}{/*modal-lg*/}{/*modal-xl*/}
        {/*There are a few classes for responsive Fullscreen, this is just one: "modal-fullscreen"*/}
        <div className="modal-content">
          <div className="modal-header">
            <h3 className="modal-title" id="modalResumeLabel">Resume (CV) 2023</h3>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>

          <div className="modal-body">
            {/*<div class="container-fluid">
              <div class="row">
                <div class="col-md-12">
                  Using the grid
                </div>
              </div>
            </div>*/}

            {/* Different Options */}
            {/*<embed src="/Simón Calle Laverde CV 2023 (English).pdf" width="100%" height="475px"/>*/}{/*width="800px"*/}{/*height="2100px"*/}
            <iframe src="/Simón Calle Laverde CV 2023 (English).pdf" style={{ width:"100%", height:"475px", border:"none" }}></iframe>{/*height:"100%"*/}
          </div>

          <div className="modal-footer">
            <a className="btn" href="/Simón Calle Laverde CV 2023 (English).pdf" download>Download the PDF</a>
            <button className="btn" type="button" data-bs-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>

  )
};