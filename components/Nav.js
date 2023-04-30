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
            <Link className="link-underline" href="/get_in_touch">
              Get in touch
            </Link>
          </li>

          <li>
            <Link className="link-underline" href="https://simoncallelaverde.github.io/projects" target="_blank" title="Like with every movie sequel, my first Portfolio 2021 was way better! See 30 more Front-end Development projects there.">
              More work{/*Other work*/}{/*Relevant work*/}
            </Link>
          </li>

          {/*<li>
            <Link className="link-underline" href="#">
              Resume
            </Link>
          </li>*/}




          <li>
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#modalResume">
              Resume
            </button>
          </li>




        </ul>

      </div>
    </nav>

  )
}