// - - - - - - - B A S E D   I N   G R A P H   C M S   D E V   E D ' S   E X A M P L E   "stuff/[[SLUG]].js" - - - - - - - //
// - - - - - - - &   N O W   I N   "pages/index.js", "pages/projects.js", "pages/blog.js"   A S   W E L L - - - - - - - //

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
      webImages {
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

      <Header
        title={ projectData.title }
        client={ projectData.client }
      />

      <main>
        <section className="blogpostpage-article-section">
          <div className="container">




            {/*<Image src={headerImage.url} alt={`${title} Project's Header Image`} layout="fill"/>*/}{/* Must use "width" & "height" properties or "layout='fill'" property */}
            {/*<img src={projectData.headerImage.url} alt={`${projectData.title} Project's Header Image`} style={{width:"100%"}}/>*/}

            <h1>{ projectData.title }</h1>

            <h4>Client<br/>{projectData.client}</h4>

            <h4 className="mb-0">Roles</h4>
            <h5 className="mt-0">
              {projectData.roles.map(role => (
                <span key={role}>
                  {role}{" "}·{" "}
                </span>
              ))}
            </h5>

            <h4>Year<br/>{projectData.year}</h4>

            <Link className="button" href="{projectData.webLaunchUrl}" target="_blank">
              <h4>{projectData.webLaunchUrl}</h4>
            </Link>

            <Image src={projectData.thumbnailImage.url} alt={`${projectData.title} Project's Thumbnail Image`} width="600" height="380"/>

            {/*<h4>NAME FOR THUMBNAIL: {projectData.nameForThumbnail}</h4>*/}

            {/*<h4>TYPE: {projectData.type}</h4>*/}

            {/*<h4>CATEGORY: {projectData.category}</h4>*/}

            {/*<h4>SLUG: {projectData.slug}</h4>*/}

            <p>{projectData.content.text}</p>







            





            <h4 className="mb-0">WEB IMAGES: <span style={{color: "green"}}>{" "} (Multiple Values)</span></h4>
            {projectData.webImages.map(image => (
              <div key={image.url}>



                <Image src={image.url} alt={`${projectData.title} Case Study's Image`} width="400" height="220"/>



              </div>
            ))}

            {/* Repeated: Index "0" Only */}
            <h4 className="mb-0">WEB IMAGES [INDEX "0" ONLY]: <span style={{color: "purple"}}>{" "} (First Value Only)</span></h4>



            <Image src={projectData.webImages[0].url} alt={`${projectData.title} Case Study's Image`} width="400" height="220"/>




            <h4 className="mb-0">WEB IMAGE FONTS:</h4>



            <img src={projectData.webImageFonts.url} alt={`${projectData.title} Case Study's Fonts Image`} style={{width:"80%"}}/>
            {/*<Image src={projectData.webImageFonts.url} alt={`${projectData.title} Case Study's Fonts Image`} width="300" height="300"/>*/}




            {/*<h4 className="mb-0">PLATFORMS: <span style={{color: "green"}}>{" "} (Multiple Values)</span></h4>
            <h5 className="mt-0">
              {projectData.platforms.map(platform => (
                <div key={platform}>
                  {platform}
                </div>
              ))}
            </h5>*/}

            {/*<h4 className="mb-0">TAGS: <span style={{color: "green"}}>{" "} (Multiple Values)</span></h4>
            <h5 className="mt-0">
              {projectData.tags.map(tag => (
                <div key={tag}>
                  {tag}
                </div>
              ))}
            </h5>*/}




          </div>
        </section>
      </main>

      <Footer/>
    </>
  )
};