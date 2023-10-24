// Imports
import Link from "next/link";

// Logo (Sitewide) Component
export default function Logo() {
  return (

    <>
      {/* Desktop | Screen Readers */}
      <div className="logo d-none d-md-block">
        <Link href="/">
          Simón Calle Laverde
        </Link>
      </div>
    </>

  )
};