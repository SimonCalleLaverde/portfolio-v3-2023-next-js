// Imports
import Link from "next/link";

// Nav (Sitewide) Component
export default function Nav() {
  return (

    <nav className="top-nav">
      <div className="container display-flex justify-content-end">{/*align-items-center*/}

        <ul className="display-flex align-items-center">{/*justify-content-between*/}
          <li>
            <Link className="link-underline" href="/">
              Welcome
            </Link>
          </li>

          <li>
            <Link className="link-underline" href="https://simoncallelaverde.github.io/about" target="_blank" rel="noreferrer" title="Sorry to temporarily redirect you to my Portfolio 2021, while I finish my new 'My Story' page 2023.">
              {/*title="Like with every movie sequel, my first Portfolio 2021 was way better! See 30 more Front-end Development projects there."*/}
              {/*Relevant work*/}
              {/*Other work*/}
              {/*More work*/}
              {/*Development work*/}
              About me (2021)
            </Link>
          </li>

          <li>
            <Link className="link-underline" href="#" data-bs-toggle="modal" data-bs-target="#modalCertificate">{/*href="/get_in_touch"*/}
              {/*Get in touch*/}
              UX & UI certificate
            </Link>
          </li>

          <li>
            {/*<Link className="link-underline" href="#">
              Resume
            </Link>*/}
            <button className="btn" type="button" data-bs-toggle="modal" data-bs-target="#modalResume">{/*btn-primary*/}
              Resume
            </button>
          </li>
        </ul>

      </div>
    </nav>

  )
};