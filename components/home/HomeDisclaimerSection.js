// Imports
import Link from "next/link";

// Home Disclaimer (Section) Component
export default function HomeDisclaimerSection() {
  return (

    <section className="homepage-disclaimer-section font-light text-turquoise">
      <div className="container">

        <div className="row">
          <div className="col-md-12">

            <div>
              <h4 className="mb-3">
                Disclaimer
              </h4>

              <p>
                I apologize for the inconvenience, this site is under development.{/*construction*/}{/* its latest version isn&apos;t live yet.*/}{/* Due date for completion: Saturday 05.20.2023.*/}
              </p>

              <p>
                In the meantime, you can check out my previous <em>Portfolio (V2){/*II*/} 2021</em> for more{/*bio*/} <Link href="https://simoncallelaverde.github.io/about" target="_blank" rel="noreferrer"><em><strong>about me</strong></em></Link> and so that you can take a peek at what I&apos;ve done before
                and at {/*some*/}a big part of the digital <Link href="https://simoncallelaverde.github.io/projects" target="_blank" rel="noreferrer"><em><strong>work & projects</strong></em></Link> I&apos;ve been a part of. There I have a good bunch (28) Front-end Development projects I helped build for an
                Australian-based digital agency, and {/*2*/}a couple independent User Interfase (UI) Design projects I designed and developed myself.
              </p>

              <p>
                Although this is only a rough first version, this new <em>Portfolio (V3) 2023</em> is being made with better technologies (i.e. ReactJS / NextJS) and it will have the option to display better case studies. It is also currently showing my latest real client User Experience (UX)
                & Product Design project that I worked {/*in*/}at a in-person <Link href="https://experiencehaus.com/courses/product-design-inc-ux-ui/" target="_blank" rel="noreferrer"><em><strong>Product Design inc. UX & UI{/*.*/}</strong></em></Link> course {/*that*/}which I {/*was taking*/}enrolled
                in 2022 - 2023 at Experience Haus, London, UK.
              </p>

              {/*<p>
                I took a while learning new tech and re-building this simpler but more to the point Portfolio, organizing my new most recent case study and others to come soon, so now I really
                want to start applying to jobs and put a first MVP version in the wild while I polish it and add to it over time.
              </p>*/}

              <p>
                Due date for desktop's version completion: Saturday 05.20.2023.
              </p>

              <p>
                —As of {/*April 20, 2023*/}{/*04.20.2023*/} May 15, 2023
              </p>

              <Link className="btn mt-2" href="https://simoncallelaverde.github.io" target="_blank" rel="noreferrer">Portfolio 2021 (UI & Front-end Work)</Link>
              {/*Portfolio 2021 (UI Design & Front-end Development)*/}
              {/*Portfolio 2021 (UI & Front-end Work)*/}
            </div>

          </div>
        </div>

      </div>
    </section>

  )
};