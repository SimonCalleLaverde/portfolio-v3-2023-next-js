// Imports
import Link from "next/link";
import Image from "next/image";
import HeadConfig from "../components/HeadConfig.js";
import HomePageHeader from "../components/home/HomePageHeader.js";
import HomePageDisclaimerSection from "../components/home/HomePageDisclaimerSection.js";
import HomePageProjectsHeadlineSection from "../components/home/HomePageProjectsHeadlineSection.js";
// Soon: HomePageProjectsCardsSection.js
import ProjectCard from "../components/ProjectCard.js";
import HomePageSkillsHeadlineSection from "../components/home/HomePageSkillsHeadlineSection.js";
// Soon: HomePageSkillsSetSection.js
import Footer from "../components/Footer.js";
import { GraphQLClient, gql } from "graphql-request";

//----------------------------------THIS PART BELOW IS FETCHING CONTENT USING GRAPHCMS [START]----------------------------------//

// API Access Endpoint Token (Found at: "GraphCMS > Project > Project Settings > API Access > Content API")
const accessEndpoint = "https://api-us-east-1.hygraph.com/v2/cl5ketcvx2wnm01ta90nhcdmy/master";
const graphCMSRequestAPI = new GraphQLClient(accessEndpoint);

// Querying (Projects) With GraphQL
// FILTERING EXAMPLE:
// projects(where: { title_contains: "..." }) { //projects(where: { slug_contains: "..." }) { //projects(where: { slug: "jomaira-imagen" }) { //projects(where: { category_contains: "Recent Independent Project" }) { //projects(where: { roles_contains_all: "UX Research" }) { //projects(where: { type_contains: "Coaching Website Re-Design" }) { //projects(where: { tags_contains_all: "Home" }) {
// ORDERING EXAMPLE:
// {
//   posts(orderBy: createdAt_ASC) {
//     id
//     createdAt
//   }
// }
const graphCMSQueryProjects = gql`
  {
    projects(where: { tags_contains_all: "Home" }, orderBy: order_ASC) {

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

      <HomePageHeader/>

      <main>
        <HomePageDisclaimerSection/>

        <HomePageProjectsHeadlineSection/>

        <section className="homepage-projects-cards-section">
          <div className="container">

            <div className="row">
              <div className="col-12">{/*col-12 col-lg-10*/}{/*col-12*/}{/*col-12 col-md-10 offset-md-1*/}{/*col-10 offset-1 col-md-8 offset-md-2*/}
                {/* Mapping through "allProjectsData" and displaying each "project", in a "ProjectCard" component */}
                {/* Was {% include home/home_project_article.html %} */}
                { allProjectsData.map(project => (

                  <ProjectCard id={ project.id } key={ project.id }
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

                )) }
              </div>
            </div>

          </div>
        </section>

        <HomePageSkillsHeadlineSection/>

        <section className="homepage-skills-set-section">
          <div className="container">

            <div className="skills-set-table text-start">
              {/* Mapping through "allSkillsData" and displaying each "skill" */}
              {/* for skill in sorted_skills */}
              { allSkillsData.map(skill => (
                <div className="skill-row" key={ skill.id }>
                  <div className="row">
                    <div className="col-md-3">{/*col-md-4*/}
                      <h3 className="skill-title text-medium mb-4more mb-md-0">{/*headline-huge*/}
                        {/* {{ skill.title }} */}
                        { skill.skillTitle }
                      </h3>
                    </div>

                    <div className="col-md-8 offset-md-1">{/*col-md-8*/}
                      {/* {{ skill.content }} */}
                      {/* { skill.skillDescription.html } */}
                      { skill.skillDescription &&
                        <div className="skill-content font-light mb-4" dangerouslySetInnerHTML={{ __html: skill.skillDescription.html }}/>
                      }
                      {/*font-ultra-light*/}
                    </div>
                  </div>
                </div>
              )) }
              {/* endfor */}
            </div>

          </div>
        </section>
      </main>

      <Footer/>

    </>
  )
};