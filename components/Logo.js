// Imports
import Link from "next/link";

// Logo (Sitewide) Component
export default function Logo() {
  return (

    <>
      {/* Desktop | Screen Readers */}
      <div className="logo d-none d-md-block" title="Creative Art & Tech Studio">
        <Link href="/">
          {/*Simon <span className="font-ultra-light">Calle Laverde</span>*/}
          {/*Simon's Cat <span className="font-ultra-light">Studio</span>*/}
          {/*Digital Product Design <span className="font-ultra-light">Studio</span>*/}
          {/*DPD <span className="font-ultra-light">Studio</span>*/}

          {/*CAT <span className="font-ultra-light">Studio</span>*/}
          {/*Creative Analog/Absurd T... <span className="font-ultra-light">Studio</span>*/}

          {/*Creative Art & Tech <span className="font-ultra-light">Studio</span>*/}
          C.A.T. <span className="font-ultra-light">Studio</span>
        </Link>
      </div>
    </>

  )
};