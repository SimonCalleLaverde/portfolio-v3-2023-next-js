// Imports
import Link from "next/link";

// Home Disclaimer (Section) Component
export default function HomeDisclaimerSection() {
  return (

    <section className="homepage-disclaimer-section font-light text-turquoise">
      <div className="container">

        <div className="row">
          <div className="col-md-10">

            <h4 className="mb-3">
              Disclaimer
            </h4>

            <p>
              {/*construction*/}{/* its latest version isn&apos;t live yet.*/}{/* Due date for completion: Saturday 05.20.2023.*/}
              {/*I apologize for the inconvenience, this site is under development.*/}
              I apologize for the inconvenience, this portfolio is in its final stage of development. In the meantime, you can check out my
              previous <Link href="https://simoncallelaverde.github.io" target="_blank" rel="noreferrer"><em><strong>Portfolio 2021</strong></em></Link> and
              take a peek at what I&apos;ve work on before.
            </p>

            <p>
              This new <em>Portfolio 2023</em> will be using better technologies like ReactJS (the most in demand JavaScript library for building User Interfaces,
              created by Facebook&apos;s developers team) and NextJS (the React framework for the Web, used by some of the world&apos;s largest companies) and I will
              be able to structure my Case Studies better.
            </p>

            <p>
              I&apos;m also finally and currently showcasing my latest <em>User Experience (UX) & Product Design</em> real {/*stakeholder*/}client&apos;s project which I worked
              on {/*in*/}at an in-person 3 months duration <Link href="https://experiencehaus.com/courses/product-design-inc-ux-ui/" target="_blank" rel="noreferrer"><em><strong>Product Design inc. UX & UI.</strong></em></Link> course {/*which*/}that
              I {/*was taking*/}enrolled at the <em>Experience Haus, London, United Kingdom</em> from October 2022 to February 2023.
            </p>

            {/*<p>
              I took a while learning new tech and re-building this simpler but more to the point Portfolio, organizing my new most recent case study and others to come soon, so now I really
              want to start applying to jobs and put a first MVP version in the wild while I polish it and add to it over time.
            </p>*/}

            {/*<p>
              Desktop's version due date for completion: Saturday 05.20.2023.
            </p>*/}

            <p>
              {/*April 20, 2023*/}
              {/*04.20.2023*/}
              {/*May 15, 2023*/}
              {/*—As of May, 2023*/}
              {/*—As of July 02, 2023*/}
              {/*—As of July 07, 2023*/}
              Launching {/*today: 07.07.2023*/}in a few days.
              <br/>—As of 07.07.2023
            </p>

            {/*Portfolio 2021 (UI & Front-end Work)*/}
            {/*Portfolio 2021 (UI Design & Front-end Development)*/}
            {/*Archaic Portfolio 2021*/}
            <Link className="btn mt-2" href="https://simoncallelaverde.github.io" target="_blank" rel="noreferrer">Portfolio 2021</Link>

          </div>
        </div>

      </div>
    </section>

  )
};