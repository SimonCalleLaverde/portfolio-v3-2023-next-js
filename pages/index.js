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

// Querying With GraphQL
const graphCMSQuery = gql`
  {
    projects {

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
      webImages {
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

// GET STATIC PROPS
export async function getStaticProps() {
  // Making The API Call/Request
  const { projects } = await graphCMSRequestAPI.request(graphCMSQuery);

  return {
    props: {
      allProjectsData: projects//,
    }//,
    //revalidate: 10,
  }
};

//----------------------------------THIS PART ABOVE IS FETCHING CONTENT USING GRAPHCMS [END]----------------------------------//

// Home (Page) Component
export default function HomePage({ allProjectsData }) {
  return (
    <>
      <HeadComponent/>

      <Header/>

      <main>
        <section className="homepage-example-1-section">
        </section>

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
                webImages={project.webImages}
                type={project.type}
                category={project.category}
                tags={project.tags}
                content={project.content}
              />
            ))}
          </div>
        </section>

        <section className="homepage-example-3-section">
        </section>
      </main>

      <Footer/>
    </>
  )
};