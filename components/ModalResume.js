// Imports
import Link from "next/link";

// Modal Resume (Sitewide) Component
export default function ModalResume() {
  return (

    <div className="modal fade" id="modalResume" tabIndex="-1" aria-labelledby="modalResumeLabel" aria-describedby="Modal or popup showing my most recent resume and giving the option to download" data-bs-backdrop="static" data-bs-keyboard="false" aria-hidden="true">
      <div className="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-xl">{/*Scrollable Body: "modal-dialog-scrollable"*/}{/*Vertically Centered: "modal-dialog-centered"*/}
        {/*modal-sm*/}{/*Default*/}{/*modal-lg*/}
        {/*There are a few classes for responsive Fullscreen, this is just one: "modal-fullscreen"*/}
        <div className="modal-content">
          <div className="modal-header">
            <h3 className="modal-title" id="modalResumeLabel">
              {/*Resume (CV) 2023*/}
              {/*Resume (CV) 2023 (English)*/}
              {/*Resume (CV) 2024 (English)*/}
              Resume 2025 (English).
            </h3>
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
            {/* Seems like "Adobe" is the best (most recent also) solution. "PDF.js" is very widely used as well, but can be slow for larger/many PDF's.
            "iframe" seems not to work (or not used to work) in some android chrome browsers, iOS safari, blah, blah, it just downloads the file.
            "object" tag for me showed without the sidebar that iframes did, it seems to be able to embed 'img', 'html', 'video', 'audio' and much more, but
            as per 'w3schools' there is a tag for each of those, and e.g. to embed HTML, it is better to use the "iframe" tag. */}
            {/* For now I will use <object></object>. I also added extra "target='_blank'" button option. */}

            {/* Working Example */}
            {/*<embed src="/Simon Calle Laverde CV 2024 (English).pdf" width="100%" height="475px"/>*/}{/*width="800px"*/}{/*height="2100px"*/}

            {/* Working Example */}
            {/*<iframe src="/Simon Calle Laverde CV 2024 (English).pdf" style={{ width:"100%", height:"475px", border:"none" }}></iframe>*/}
            {/*height:"100%"*/}

            {/* Raw Example (With Google Docs Viewer, Needs The File To Be Available Online Wherever) */}
            {/*<iframe src="http://docs.google.com/gview?url=http://path.com/to/your/pdf.pdf&embedded=true" style="width:600px; height:500px;" frameborder="0"></iframe>*/}

            {/*https://mozilla.github.io/pdf.js/*/}

            {/*https://developer.adobe.com/document-services/apis/pdf-embed/*/}

            {/* Working Example */}
            <object data="/Simon Calle Laverde CV 2024 (English).pdf?#zoom=85.9&scrollbar=0&toolbar=0&navpanes=0" width="100%" height="475" type="application/pdf">{/*zoom=135.3 (Was For (Smaller) CV 2023)*/}{/*"zoom=92" (approx with "modal-lg")*/}{/*"zoom=138" (approx with "modal-xl")*/}
              {/*<p>Sorry :( the PDF cannot be displayed in this browser. Please consider downloading the PDF.</p>*/}

              {/* Hidden */}
              <p className="d-none">
                {/*It seems like your web browser is not configured to display PDF files.
                {" "}Don&apos;t worry, just click the button below to &quot;Download the PDF&quot;
                {" "}or click to &quot;Open in a new tab&quot;.*/}

                It seems like your web browser is not configured to display PDF files.
                {" "}Don&apos;t worry, just click the button below to &quot;Open and download&quot;
                {" "}the PDF.
              </p>
              
              {/* Callback To Img */}
              <img src="/Simon Calle Laverde CV 2024 (English).png" alt="Product Design inc. UX & UI. Course Certificate of Completion" style={{ width:"100%" }}/>
            </object>

            {/* Raw Example */}
            {/*<object data='http://website.com/nameoffolder/documentname.pdf#toolbar=1' 
            type='application/pdf' 
            width='100%' 
            height='700px'>
            Yes that is true. A good thing about the object tag is that it can detect that. And it allows you to put further options for the visitors to view the page through either gdrive, onedrive and etc.
            <object data='example.com/path.pdf#toolbar=1' type='application/pdf' width='100%' height='700px'> <p>It appears your Web browser is not configured to display PDF files. No worries, just <a href='example.com/path.pdf'>click here to download the PDF file.</a> or <a href="drive.google.com/[drive path]/view?usp=sharing"> click here to view</a></p> </object>*/}
          </div>

          <div className="modal-footer">
            {/*<Link className="btn" href="/Simon Calle Laverde CV 2024 (English).pdf" download>Download the PDF</Link>*/}
            {/*<Link className="btn" href="/Simon Calle Laverde CV 2024 (English).pdf" target="_blank" rel="noreferrer">Open in a new tab</Link>*/}
            {/*<Link className="btn" href="/Simon Calle Laverde CV 2024 (English).pdf" target="_blank" rel="noreferrer">Open and download</Link>*/}
            {/*Open to download in a new tab*/}
            <Link className="btn btn-chocolate" href="/Simon Calle Laverde CV 2024 (English).pdf" target="_blank" rel="noreferrer" download>Download the PDF</Link>
            <button className="btn btn-chocolate" type="button" data-bs-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>

  )
};