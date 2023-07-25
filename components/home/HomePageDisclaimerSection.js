// Imports
import Link from "next/link";

// HomePage Disclaimer (Section) Component
export default function HomePageDisclaimerSection() {
  return (

    <section className="homepage-disclaimer-section font-ultra-light text-turquoise text-start">
      <div className="container">

        <div className="row">
          <div className="col-md-10">
            <h4 className="mb-3">
              {/*Disclaimer*/}
              Welcome
            </h4>

            {/* Hidden */}
            <p className="d-none">
              {/*construction*/}{/* its latest version isn&apos;t live yet.*/}{/* Due date for completion: Saturday 05.20.2023.*/}
              {/*I apologize for the inconvenience, this site is under development.*/}
              I apologize for the inconvenience, this portfolio is in its final stage of development. In the meantime, you can check out my
              previous <Link href="https://simoncallelaverde.github.io" target="_blank" rel="noreferrer"><em><strong>Portfolio 2021</strong></em></Link> and
              take a peek at what I&apos;ve {/*work*/}worked on before.
            </p>

            {/* Hidden */}
            <p className="d-none">
              This new <em>Portfolio 2023</em> will be using better technologies like ReactJS (the most in demand JavaScript library for building User Interfaces,
              created by Facebook&apos;s developers team) and NextJS (the React framework for the Web, used by some of the world&apos;s largest companies) and I will
              be able to structure my Case Studies better.
            </p>

            {/* Hidden */}
            <p className="d-none">
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

            {/* Hidden */}
            <p className="d-none">
              {/*April 20, 2023*/}
              {/*04.20.2023*/}
              {/*May 15, 2023*/}
              {/*—As of May, 2023*/}
              {/*—As of July 02, 2023*/}
              {/*—As of July 07, 2023*/}
              Launching {/*today: 07.07.2023*/}{/*in a few days.*/}{/*tomorrow*/}tonight:
              {/*<br/>—As of 07.07.2023*/}
              <br/>—07.17.2023
            </p>

            <p>
              My name is Simón Calle Laverde and I am a <em>UX, UI, & Product Designer</em> with experience in <em>Front-end Development</em> as well. While taking a course in <em>Web Design and Design for Mobile Devices</em> which I enrolled over 9 years ago in 2013, I found myself in love with all the stages of
              developing digital products and digital experiences.
            </p>

            <p>
              I {/*come*/}came from a creative career background that {/*focuses mainly*/}its main focus is in {/*human*/}<em>persuasion</em> and <em>human behaviour</em> {/*which*/}where its studies included subjects like: history of design, graphic design, semiotics, linguistics, psychology, sociology, human studies, and many more.
            </p>

            <p>
              I took a bit creating {/*My*/}this newest <em>Portfolio 2023</em> which is using advanced technologies such as ReactJS, {/*which is */}a highly sought-after JavaScript library for building user interfaces developed by the team on Facebook. I {/*am incorporating*/}incorporated NextJS, a ReactJS framework for production widely utilized by some of the world&apos;s leading companies.
              {/*These advancements allowed me to create a more sophisticated structure for my case studies than I ever had before.*/}{/* Additionaly, I integrated a robust <em>CMS (Content Management System)</em> called <em>Hygraph CMS</em>as well.*/}
            </p>

            <p>
              I am also finally excited to present my latest <em>User Experience (UX), User Interface (UI), and Product Design</em> project, which I developed for a real client during a three-month in-person <em>Product Design inc. UX & UI</em> course that I enrolled at Experience Haus, London, United Kingdom from October 2022 to February 2023.
            </p>

            {/*Portfolio 2021 (UI & Front-end Work)*/}
            {/*Portfolio 2021 (UI Design & Front-end Development)*/}
            {/*Archaic Portfolio 2021*/}
            {/*<Link className="btn mt-2" href="https://simoncallelaverde.github.io" target="_blank" rel="noreferrer">Portfolio 2021</Link>*/}
          </div>
        </div>

      </div>
    </section>

  )
};