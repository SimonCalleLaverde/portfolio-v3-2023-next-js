// - - - - - - - T O   B A S E   I N   "pages/projects/[slug].j" - - - - - - - //

// Imports
import Link from "next/link";
import Image from "next/image";
import HeadComponent from "../../components/HeadComponent.js";
import Header from "../../components/blogpost/Header.js";
import Footer from "../../components/Footer.js";
import { GraphQLClient, gql } from "graphql-request";

//----------------------------------THIS PART BELOW IS FETCHING CONTENT USING GRAPHCMS [START]----------------------------------//

// API Access Endpoint Token (Found at: "GraphCMS > Project > Project Settings > API Access > Content API")
const accessEndpoint = "https://api-us-east-1.hygraph.com/v2/cl5ketcvx2wnm01ta90nhcdmy/master";
const graphCMSRequestAPI = new GraphQLClient(accessEndpoint);

// Querying With GraphQL (The Specific Project That The Slug Matches)
const graphCMSQuery = gql`
  query Project($slug: String!) {
    project(where: {slug: $slug}) {

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
      webImagesSecond {
        url
      }
      webImagesThird {
        url
      }
      webImagesFourth {
        url
      }
      webImagesFifth {
        url
      }
      webImagesSixth {
        url
      }
      webImagesSeventh {
        url
      }

      webImageFonts {
        url
      }
      type
      category
      tags
      content {
        text
      }

      captionFirst {
        text
      }
      captionSecond {
        text
      }
      captionThird {
        text
      }
      captionFourth {
        text
      }
      captionFifth {
        text
      }
      captionSixth {
        text
      }
      captionSeventh {
        text
      }

      contentLastLeft {
        text
      }
      contentLastRight {
        text
      }

    }
  }
`;

// Getting All The Projects' Slugs
const graphCMSQuerySLUGLIST = gql`
  {
    projects {

      slug

    }
  }
`;

// IMPLEMENTING "STATIC SITE GENERATION" BELOW (WITH "getStaticPaths" & "getStaticProps")

// GET STATIC PATHS
export async function getStaticPaths() {
  const { projects } = await graphCMSRequestAPI.request(graphCMSQuerySLUGLIST);

  return {
    paths: projects.map(project => ({ params: { slug: project.slug } })),
    fallback: false
  }
};

// GET STATIC PROPS
export async function getStaticProps({ params }) {
  const slug = params.slug;
  const requestBlogPost = await graphCMSRequestAPI.request(graphCMSQuery, { slug });
  const projectData = requestBlogPost.project;

  return {
    props: {
      projectData
    }//,
    //revalidate: 10
  }
};

//----------------------------------THIS PART ABOVE IS FETCHING CONTENT USING GRAPHCMS [END]----------------------------------//

// BlogPost (Page) (Dynamic) Component
export default function BlogPostPage({ projectData }) {
  return (
    <>
      <HeadComponent
        title={ projectData.title }
      />

      {/*<Header
        title={ projectData.title }
        client={ projectData.client }
      />*/}

      <main>
        <header className="project-header text-rosybrown clearfix" id="project_header" data-scene>
          <div className="container">
            {/* MORE */}
          </div>
        </header>

        <section className="blogpostpage-article-section">
          <div className="container">
            {/* MORE */}
          </div>
        </section>
      </main>

      <Footer/>
    </>
  )
};