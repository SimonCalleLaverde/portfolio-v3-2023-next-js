// Imports
import Link from "next/link";

// Contact Page (Header) Component
export default function ContactPageHeader() {
  return (

    <header className="display-flex align-items-center text-align-center">{/*flex-direction-row*/}
      <div className="container">

        <div className="row">
          <div className="col-md-6 offset-3">

            <div className="contact-card mt-5 p-5">
              <h1 className="headline">
                Drop me a line
              </h1>

              <h4 className="mt-2">
                <Link className="link-underline text-rosybrown" href="mailto:simoncallelaverde@gmail.com">simoncallelaverde@gmail.com</Link>
              </h4>

              <h1 className="headline mt-5">
                Give me a ring
              </h1>

              <h4 className="mt-2 mb-0">
                +(57) 310 558 2638
              </h4>
            </div>

          </div>
        </div>

      </div>
    </header>

  )
};