// Imports
import Link from "next/link";

// Nav (Sitewide) Component
export default function Nav() {
  return (

    <nav>
      <div className="container">

        <ul>
          <li>
            <Link href="/">
              Welcome
            </Link>
          </li>

          <li>
            <Link href="/get_in_touch">
              Get in touch
            </Link>
          </li>

          <li>
            <Link href="#">
              Resume
            </Link>
          </li>

          <li>
            <Link href="https://simoncallelaverde.github.io/projects" target="_blank" title="Like with every movie sequel, my first Portfolio 2021 was way better! See 30 more Front-end Development projects there.">
              Relevant work
            </Link>
          </li>
        </ul>

      </div>
    </nav>

  )
}