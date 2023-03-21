// Imports
import Link from "next/link";
import Image from "next/image";
import HeadComponent from "../components/HeadComponent.js";
import Header from "../components/homepage/Header.js";
import Footer from "../components/Footer.js";
import { GraphQLClient, gql } from "graphql-request";
import ProjectCard from "../components/homepage/ProjectCard.js";

//----------------------------------THIS PART BELOW IS FETCHING CONTENT USING GRAPHCMS [START]----------------------------------//

// API Access Endpoint Token (Found at: "GraphCMS > Project > Project Settings > API Access > Content API")
const accessEndpoint = "https://api-us-east-1.hygraph.com/v2/cl5ketcvx2wnm01ta90nhcdmy/master";
const graphCMSRequestAPI = new GraphQLClient(accessEndpoint);

// Querying With GraphQL //projects(where: { title_contains: "..." }) { //projects(where: { slug_contains: "..." }) { //projects(where: { slug: "jomaira-imagen" }) { //projects(where: { category_contains: "Recent Independent Project" }) { //projects(where: { roles_contains_all: "UX Research" }) { //projects(where: { type_contains: "Coaching Website Re-Design" }) { //projects(where: { tags_contains_all: "Home" }) {
const graphCMSQuery = gql`
  {
    projects(where: { tags_contains_all: "Home" }) {

      id
      title
      slug
      nameForThumbnail
      client
      thumbnailImage {
        url
      }
      headerImage {
        url
      }
      platforms
      year
      roles
      webLaunchUrl
      webImagesFirst {
        url
      }
      type
      category
      tags
      content {
        text
      }

    }
  }
`;



const graphCMSQuery2 = gql`
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
  const { projects } = await graphCMSRequestAPI.request(graphCMSQuery);
  const { skills } = await graphCMSRequestAPI.request(graphCMSQuery2);

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
      <HeadComponent/>

      <Header/>

      <main>
        <section className="homepage-projects-section">
          <div className="container">
            {/* Mapping through "allProjectsData" and displaying each "project", in a "ProjectCard" component */}
            {allProjectsData.map(project => (
              <ProjectCard
                key={project.id}
                title={project.title}
                slug={project.slug}
                nameForThumbnail={project.nameForThumbnail}
                client={project.client}
                thumbnailImage={project.thumbnailImage}
                headerImage={project.headerImage}
                platforms={project.platforms}
                year={project.year}
                roles={project.roles}
                webLaunchUrl={project.webLaunchUrl}
                webImagesFirst={project.webImagesFirst}
                type={project.type}
                category={project.category}
                tags={project.tags}
                content={project.content}
              />
            ))}
          </div>
        </section>

        <section className="home-skills-set-section clearfix" id="skills_set_section" data-scene>{/*data-scene="rotateZ"*/}
          <div className="container">

            <div className="skills-set-table">



              {/* Mapping through "allSkillsData" and displaying each "skill" */}
              {/* for skill in sorted_skills */}
              { allSkillsData.map(skill => (
                <div className="skill-row">
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

      <Footer/>
    </>
  )
};