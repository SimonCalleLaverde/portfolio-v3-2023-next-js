// Imports
import Link from "next/link";

// Modal Resume (Sitewide) Component
export default function ModalResume() {
  return (

    <div className="modal fade" id="modalResume" tabIndex="-1" aria-labelledby="modalResumeLabel" aria-describedby="Modal or popup showing my most recent resume and giving the option to download" aria-hidden="true">{/*data-bs-backdrop="static" data-bs-keyboard="false"*/}
      <div className="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-xl">{/*Scrollable Body: "modal-dialog-scrollable"*/}{/*Vertically Centered: "modal-dialog-centered"*/}
        {/*modal-sm*/}{/*Default*/}{/*modal-lg*/}{/*modal-xl*/}
        {/*There are a few classes for responsive Fullscreen, this is just one: "modal-fullscreen"*/}
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="modalResumeLabel">Resume 2023</h5>
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




            {/*<img src="/Simon Calle Laverde_LinkedIn.png" alt="Product Design inc. UX & UI. Course Certificate of Completion" style={{ width:"100%" }}/>*/}




            {/*TO CONTINUE TESTING THE BOTH EXAMPLES BELOW, AND BOTH STACKOVERFLOW LINK TABS*/}

            <embed src="/Simón Calle Laverde CV 2023 (English).pdf" width="100%" height="2100px"/>{/*800px*/}

            {/*<iframe src="/Simón Calle Laverde CV 2023 (English).pdf" style={{ width:"100%", height:"100%", border:"none" }}></iframe>*/}




          </div>

          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" className="btn btn-primary">Understood</button>{/*Download*/}




            <a href="/Simón Calle Laverde CV 2023 (English).pdf" download>Download the pdf</a>




          </div>
        </div>
      </div>
    </div>

  )
};