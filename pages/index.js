// Imports
import Link from "next/link";
import Image from "next/image";
import HeadConfig from "../components/HeadConfig.js";
import HomeHeader from "../components/home/HomeHeader.js";
import HomeProjectCard from "../components/home/HomeProjectCard.js";
import { GraphQLClient, gql } from "graphql-request";

//----------------------------------THIS PART BELOW IS FETCHING CONTENT USING GRAPHCMS [START]----------------------------------//

// API Access Endpoint Token (Found at: "GraphCMS > Project > Project Settings > API Access > Content API")
const accessEndpoint = "https://api-us-east-1.hygraph.com/v2/cl5ketcvx2wnm01ta90nhcdmy/master";
const graphCMSRequestAPI = new GraphQLClient(accessEndpoint);

// Querying (Projects) With GraphQL //projects(where: { title_contains: "..." }) { //projects(where: { slug_contains: "..." }) { //projects(where: { slug: "jomaira-imagen" }) { //projects(where: { category_contains: "Recent Independent Project" }) { //projects(where: { roles_contains_all: "UX Research" }) { //projects(where: { type_contains: "Coaching Website Re-Design" }) { //projects(where: { tags_contains_all: "Home" }) {
const graphCMSQueryProjects = gql`
  {
    projects(where: { tags_contains_all: "Home" }) {

      id
      slug
      order
      thumbnailImage {
        url
      }
      title
      nameForThumbnail
      type
      roles2
      year2
      category
      platforms2

    }
  }
`;

// Querying (Skills) With GraphQL
const graphCMSQuerySkills = gql`
  {
    skills {

      id
      skillTitle
      skillDescription {
        html
      }

    }
  }
`;

// GET STATIC PROPS
export async function getStaticProps() {
  // Making The API Call/Request
  const { projects } = await graphCMSRequestAPI.request(graphCMSQueryProjects);
  const { skills } = await graphCMSRequestAPI.request(graphCMSQuerySkills);

  return {
    props: {
      allProjectsData: projects,
      allSkillsData: skills//,
    }//,
    //revalidate: 10,
  }
};

//----------------------------------THIS PART ABOVE IS FETCHING CONTENT USING GRAPHCMS [END]----------------------------------//

// Home (Page) Component
export default function HomePage({ allProjectsData, allSkillsData }) {
  return (
    <>

      <HeadConfig/>

      <HomeHeader/>

      <main>




        <section className="   homepage-projects-headline-section   ">
          <div className="container">

            <div className="row">
              <div className="col-md-12">
                <h4 className="text-rosybrown mb-3">
                  This site is under construction
                  <br/>Its latest version isn&apos;t live yet.
                  <br/>Expect completion soon - 15.04.2023.
                </h4>

                <p className="text-rosybrown">
                  In the meantime you can check out my previous Portfolio 2021 for
                  <em>{" "}<Link className="link-line-through text-rosybrown" href="https://simoncallelaverde.github.io/about" target="_blank">more about me</Link>{" "}</em>
                  or for a <em>{" "}<Link className="link-line-through text-rosybrown" href="https://simoncallelaverde.github.io/projects" target="_blank">projects page</Link>{" "}</em>.
                  There I have 28 Front-end Development projects I helped build for a Australian based digital agency and 2
                  independent User Interfase (UI) Design projects I designed and developed.
                </p>

                <p className="text-rosybrown">
                  Although this new Portfolio 2023 will have the option to create better Case Studies and it has my latest
                  User Experience (UX) & Product Design real client project that I worked in a Product Design inc. UX & UI. course
                  I took in 2022 - 2023 in London, UK.
                </p>

                <p className="text-rosybrown">
                  - As of April 06, 2023
                </p>
              </div>
            </div>

          </div>
        </section>




        <section className="homepage-projects-headline-section">
          <div className="container">

            <div className="row">
              <div className="col-md-12">{/*col-md-10 offset-md-1*/}
                <h3 className="font-headline text-gigantic text-rosybrown text-uppercase mb-0">{/*text-center*/}
                  Featured
                  <br/>Projects
                </h3>
              </div>
            </div>

          </div>
        </section>

        {/* Mapping through "allProjectsData" and displaying each "project", in a "HomeProjectCard" component */}
        {/* Was {% include home/home_project_article.html %} */}
        { allProjectsData.map(project => (
          <section className="homepage-projects-cards-section" id={ project.id } key={ project.id }>
            <div className="container">

              <div className="row">
                <div className="col-12 col-md-10 offset-md-1">{/*col-10 offset-1 col-md-8 offset-md-2*/}

                  <HomeProjectCard
                    slug={ project.slug }
                    order={ project.order }
                    thumbnailImage={ project.thumbnailImage }
                    title={ project.title }
                    nameForThumbnail={ project.nameForThumbnail }
                    type={ project.type }
                    roles2={ project.roles2 }
                    year2={ project.year2 }
                    category={ project.category }
                    platforms2={ project.platforms2 }
                  />

                </div>
              </div>

            </div>
          </section>
        )) }

        <section className="homepage-skills-headline-section">
          <div className="container">

            <div className="row">
              <div className="col-md-12">{/*col-md-10 offset-md-1*/}
                <h3 className="font-headline text-gigantic text-rosybrown text-uppercase mb-0">{/*text-center*/}
                  Some Of My
                  <br/>Skills Set
                </h3>
              </div>
            </div>

          </div>
        </section>

        <section className="homepage-skills-set-section">
          <div className="container">

            <div className="skills-set-table">
              {/* Mapping through "allSkillsData" and displaying each "skill" */}
              {/* for skill in sorted_skills */}
              { allSkillsData.map(skill => (
                <div className="skill-row" key={ skill.id }>
                  <div className="row">
                    <div className="col-md-4">
                      <h3 className="text-medium text-rosybrown mb-4more mb-md-0">{/*text-huge*/}
                        {/* {{ skill.title }} */}
                        { skill.skillTitle }
                      </h3>
                    </div>

                    <div className="col-md-8">
                      {/* {{ skill.content }} */}
                      {/* { skill.skillDescription.html } */}
                      { skill.skillDescription &&
                        <div className="skill-content font-ultra-light text-rosybrown mb-4" dangerouslySetInnerHTML={{ __html: skill.skillDescription.html }}>
                        </div>
                      }
                    </div>
                  </div>
                </div>
              )) }
              {/* endfor */}
            </div>

          </div>
        </section>
      </main>

      {/*<Footer/>*/}

    </>
  )
};