// Imports
import Link from "next/link";
import Image from "next/image";
import HeadConfig from "../components/HeadConfig.js";
import ProjectsHeader from "../components/projects/ProjectsHeader.js";
import ProjectsProjectCard from "../components/projects/ProjectsProjectCard.js";
import { GraphQLClient, gql } from "graphql-request";

//----------------------------------THIS PART BELOW IS FETCHING CONTENT USING GRAPHCMS [START]----------------------------------//

// API Access Endpoint Token (Found at: "GraphCMS > Project > Project Settings > API Access > Content API")
const accessEndpoint = "https://api-us-east-1.hygraph.com/v2/cl5ketcvx2wnm01ta90nhcdmy/master";
const graphCMSRequestAPI = new GraphQLClient(accessEndpoint);

// Querying (Projects) With GraphQL
const graphCMSQueryProjects = gql`
  {
    projects {

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

// GET STATIC PROPS
export async function getStaticProps() {
  // Making The API Call/Request
  const { projects } = await graphCMSRequestAPI.request(graphCMSQueryProjects);

  return {
    props: {
      allProjectsData: projects//,
    }//,
    //revalidate: 10,
  }
};

//----------------------------------THIS PART ABOVE IS FETCHING CONTENT USING GRAPHCMS [END]----------------------------------//

// Projects (Page) Component
export default function ProjectsPage({ allProjectsData }) {
	return (
		<>

      <HeadConfig/>

      <ProjectsHeader/>

      <main>
        {/*<section className="homepage-projects-headline-section">
          <div className="container">

            <div className="row">
              <div className="col-md-10 offset-md-1">
                <h2 className="font-headline text-gigantic text-rosybrown text-uppercase text-center mb-0">
                  Recent
                  <br/>Independent
                  <br/>Projects
                </h2>
              </div>
            </div>

          </div>
        </section>*/}

        {/* Mapping through "allProjectsData" and displaying each "project", in a "HomeProjectCard" component */}
        {/* Was {% include home/home_project_article.html %} */}
        { allProjectsData.map(project => (
          <section className="homepage-projects-cards-section" id={ project.id } key={ project.id }>
            <div className="container">

              <div className="row">
                <div className="col-10 offset-1 col-md-8 offset-md-2">

                  <ProjectsProjectCard
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
      </main>

      {/*<Footer/>*/}

    </>
  )
};