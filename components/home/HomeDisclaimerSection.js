// Imports
import Link from "next/link";

// Home Disclaimer (Section) Component
export default function HomeDisclaimerSection() {
  return (

    <section className="homepage-disclaimer-section font-light text-turquoise">
      <div className="container">

        <div className="row">
          <div className="col-md-12">

            <h4 className="mb-3">
              Disclaimer
            </h4>

            <p>
              I apologize for the inconvenience, this site is under development.{/*construction*/}{/* its latest version isn&apos;t live yet.*/} First minimum viable version completion due date: 05.15.2023.
            </p>

            <p>
              In the meantime you can check out my previous Portfolio (V2){/*II*/} 2021 for more <Link href="https://simoncallelaverde.github.io/about" target="_blank" rel="noreferrer">about</Link> me
              or to see all the <Link href="https://simoncallelaverde.github.io/projects" target="_blank" rel="noreferrer">work</Link> I&apos;ve been a part of. There I have 28 Front-end Development projects
              I helped build for an Australian based digital agency, and 2 independent User Interfase (UI) Design projects I designed and developed.
            </p>

            <p>
              Although this new Portfolio (V3) 2023 is made with better technologies (i.e. ReactJS / NextJS) and will have the option to create better case studies, it also has my latest
              Product Design & User Experience (UX) real client project that I worked in a <em>Product Design inc. UX & UI.</em> course
              I was taking in 2022 - 2023 in London, UK.
            </p>

            <p>
              I took a while learning new tech and re-building this simpler but more to the point Portfolio, organizing my new most recent case study and others to come soon, so now I really
              want to start applying to jobs and put a first MVP version in the wild while I polish it and add to it over time.
            </p>

            <p>
              —As of {/*April 20, 2023*/}{/*04.20.2023*/} May 08, 2023
            </p>

          </div>
        </div>

      </div>
    </section>

  )
};