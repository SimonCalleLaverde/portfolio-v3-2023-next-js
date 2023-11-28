// Imports
import Link from "next/link";

// Nav (Sitewide) Component
export default function Nav() {
  return (

    <>
      {/* Screen Readers */}
      <div className="visually-hidden">{/*sr-only*/}
        Navigation Menu
      </div>

      {/* Desktop | Screen Readers */}
      <nav className="top-nav d-none d-md-block">
        <div className="container-fluid display-flex justify-content-end">{/*container*/}

          {/* Instead Of Classes "display-flex align-items-center justify-content-between" I'm Using "display:inline-block" Again In The "<li></li>". Otherwise Paddings Must Be Very Exact/Hard-Coded/Magic-Numbers So "<a></a>(s)" & "<button></button>(s)" Align. The "display:inline-block" Option Will Align Them Perfectly No Matter The Paddings, Or Margins, Or Height Of The "<a></a>". With The "Flexbox" Option It Requires Like 2px More Padding-Bottom For Links & Button To Align, But Then It Misses Like 2px Margin-Top To Be Fully Centered, And Then To Center Them Vertically Plus Fully Inline Them With The Button As Well, It Becomes More Messy */}
          {/* See Comments For "Option 2" In "theme.scss" */}
          <ul className="">{/*"justify-content-between" Won't Affect Unless "<ul></ul>" Has A Bigger Width Than Its Natural Sum-Of-Childs' Width*/}
            {/*<li>
              <Link href="/">
                Welcome
              </Link>
            </li>*/}

            <li>
              <Link href="https://simoncallelaverde.github.io" target="_blank" rel="noreferrer" title="Visit my older Front-end Development 'Portfolio 2021' with 30 real client projects, while I finish a new 'My Story (About Me)' page 2023 in here.">
                {/*https://simoncallelaverde.github.io/about*/}

                {/*title="Sorry to temporarily redirect you to my Portfolio 2021, while I finish my new 'My Story' page 2023."*/}
                {/*title="Like with every movie sequel, my first Portfolio 2021 was way better! See 30 more Front-end Development projects there."*/}
                
                {/*Relevant work*/}
                {/*Other work*/}
                {/*More work*/}
                {/*Development work*/}
                
                {/*About me (2021)*/}
                Portfolio 2021
              </Link>
            </li>

            <li>
              <Link href="#" data-bs-toggle="modal" data-bs-target="#modalCertificate">{/*href="/get_in_touch"*/}
                {/*Get in touch*/}
                {/*UX & UI certificate*/}
                UX/UI certificate
              </Link>
            </li>

            <li>
              <button className="btn" type="button" data-bs-toggle="modal" data-bs-target="#modalResume">{/*btn-primary*/}
                Resume
              </button>
            </li>
          </ul>

        </div>
      </nav>

      {/* Mobile */}
      <nav className="top-nav d-block d-md-none" aria-hidden="true">
        <div className="container display-flex justify-content-center">

          {/* Instead Of Classes "display-flex align-items-center justify-content-between" I'm Using "display:inline-block" Again In The "<li></li>". Otherwise Paddings Must Be Very Exact/Hard-Coded/Magic-Numbers So "<a></a>(s)" & "<button></button>(s)" Align. The "display:inline-block" Option Will Align Them Perfectly No Matter The Paddings, Or Margins, Or Height Of The "<a></a>". With The "Flexbox" Option It Requires Like 2px More Padding-Bottom For Links & Button To Align, But Then It Misses Like 2px Margin-Top To Be Fully Centered, And Then To Center Them Vertically Plus Fully Inline Them With The Button As Well, It Becomes More Messy */}
          {/* See Comments For "Option 2" In "theme.scss" */}
          <ul className="">{/*"justify-content-between" Won't Affect Unless "<ul></ul>" Has A Bigger Width Than Its Natural Sum-Of-Childs' Width*/}
            <li>
              <Link href="/">
                Welcome
              </Link>
            </li>

            <li>
              <Link href="#" data-bs-toggle="modal" data-bs-target="#modalCertificate">
                {/*UX & UI certificate*/}
                UX/UI certificate
              </Link>
            </li>

            <li>
              <Link href="#" data-bs-toggle="modal" data-bs-target="#modalResume">
                Resume
              </Link>
            </li>
          </ul>

        </div>
      </nav>
    </>

  )
};