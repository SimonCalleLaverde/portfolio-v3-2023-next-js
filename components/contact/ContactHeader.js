// Imports
import Link from "next/link";

// Contact (Header) Component
export default function ContactHeader() {
  return (

    <header className="display-flex justify-content-center align-items-center text-align-center">{/*flex-direction-row*/}
      <div className="container">

        <h1 className="headline mt-5">
          Drop me a line
        </h1>

        <h4 className="mt-2">
          <Link className="link-underline text-rosybrown" href="mailto:simoncallelaverde@gmail.com">simoncallelaverde@gmail.com</Link>
        </h4>

        <h1 className="headline mt-5 pt-2">
          Give me a ring
        </h1>

        <h4 className="mt-2">
          +(57) 310 558 2638
        </h4>

      </div>
    </header>

  )
};