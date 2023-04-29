// Imports
import Link from "next/link";

// Home Disclaimer (Section) Component
export default function HomeDisclaimerSection() {
  return (

    <section className="homepage-disclaimer-section font-ultra-light text-rosybrown">
      <div className="container">

        <div className="row">
          <div className="col-md-12">



            <h4 className="mb-3">
              Disclaimer
            </h4>

            <p>
              I apologize for the inconvenience, this site is under construction.{/* its latest version isn&apos;t live yet.*/} Completion due date: 05.12.2023.
            </p>

            <p>
              In the meantime you can check out my previous Portfolio (V2){/*II*/} 2021 for more <Link href="https://simoncallelaverde.github.io/about" target="_blank">about</Link> me
              or to see all the <Link href="https://simoncallelaverde.github.io/projects" target="_blank">work</Link> I've been a part of. There I have 28 Front-end Development projects
              I helped build for an Australian based digital agency, and 2 independent User Interfase (UI) Design projects I designed and developed.
            </p>

            <p>
              Although this new Portfolio (V3) 2023 will have the option to create better case studies and it has my latest
              User Experience (UX) & Product Design real client project that I worked in a Product Design inc. UX & UI. course
              I was taking in 2022 - 2023 in London, UK.
            </p>

            <p>
              —As of {/*April 20, 2023*/}{/*04.20.2023*/} April 28, 2023
            </p>



          </div>
        </div>

      </div>
    </section>

  )
};