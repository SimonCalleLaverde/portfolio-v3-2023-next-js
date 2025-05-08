// - - - - - - - B A S E D   I N   G R A P H   C M S   D E V   E D ' S   E X A M P L E   "stuff/[[SLUG]].js" - - - - - - - //
// - - - - - - - &   N O W   I N   "pages/index.js", "pages/projects.js", "pages/blog.js"   A S   W E L L - - - - - - - //

// Imports
import Link from "next/link";
import Image from "next/image";
import TitleConfig from "../../components/project/TitleConfig.js";//NEW 2025//Per-Page
import HeadConfig from "../../components/HeadConfig.js";//Site-Wide
import ProjectPageHeader from "../../components/project/ProjectPageHeader.js";
import Footer from "../../components/Footer.js";
import { GraphQLClient, gql } from "graphql-request";

//----------------------------------THIS PART BELOW IS FETCHING CONTENT USING GRAPHCMS [START]----------------------------------//

// API Access Endpoint Token (Found at: "GraphCMS > Project > Project Settings > API Access > Content API")
const accessEndpoint = "https://api-us-east-1.hygraph.com/v2/cl5ketcvx2wnm01ta90nhcdmy/master";
const graphCMSRequestAPI = new GraphQLClient(accessEndpoint);

// Querying With GraphQL (The Specific Project That The Slug Matches)
const graphCMSQuery = gql`
  query GetProjectBySlug($slug: String!) {
    project(where: {slug: $slug}) {

      id

      order
      title
      client
      roles2
      year2
      duration

      webLaunchUrl
      prototypeLaunchUrl

      headerImage {
        url
      }
      content {
        html
      }

      webImagesFirst {
        url
      }
      captionFirst {
        html
      }

      webImagesSecond {
        url
      }
      captionSecond {
        html
      }

      webImagesThird {
        url
      }
      captionThird {
        html
      }

      webImagesFourth {
        url
      }
      captionFourth {
        html
      }

      webImagesFifth {
        url
      }
      captionFifth {
        html
      }

      webImagesSixth {
        url
      }
      captionSixth {
        html
      }

      webImagesSeventh {
        url
      }
      captionSeventh {
        html
      }

      webImagesEighth {
        url
      }
      captionEighth {
        html
      }

      webImagesNinth {
        url
      }
      captionNinth {
        html
      }

      webImagesTenth {
        url
      }
      captionTenth {
        html
      }

      webImagesEleventh {
        url
      }
      captionEleventh {
        html
      }

      webImagesTwelfth {
        url
      }
      captionTwelfth {
        html
      }

      webImagesThirteenth {
        url
      }
      captionThirteenth {
        html
      }

      webImagesFourteenth {
        url
      }
      captionFourteenth {
        html
      }

      webImagesFifteenth {
        url
      }
      captionFifteenth {
        html
      }

      webImagesSixteenth {
        url
      }
      captionSixteenth {
        html
      }

      webImagesSeventeenth {
        url
      }
      captionSeventeenth {
        html
      }

      webImagesEighteenth {
        url
      }
      captionEighteenth {
        html
      }

      webImagesNineteenth {
        url
      }
      captionNineteenth {
        html
      }

      webImagesTwentieth {
        url
      }
      captionTwentieth {
        html
      }

      webImageFonts {
        url
      }

      contentLastLeft {
        html
      }
      contentLastRight {
        html
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
  const requestProject = await graphCMSRequestAPI.request(graphCMSQuery, { slug });
  const projectData = requestProject.project;

  return {
    props: {
      projectData
    }//,
    //revalidate: 10
  }
};

//----------------------------------THIS PART ABOVE IS FETCHING CONTENT USING GRAPHCMS [END]----------------------------------//

// Project (Page) (Dynamic) Component
export default function ProjectPage({ projectData }) {
  return (
    <>

      <TitleConfig
        title={ projectData.title }
      />
      <HeadConfig
        title={ projectData.title }
      />

      {/*<ProjectPageHeader
        title={ projectData.title }
        client={ projectData.client }
      />*/}

      <ProjectPageHeader
        key={ projectData.id }
        id={ projectData.id }

        order={ projectData.order }
        title={ projectData.title }
        client={ projectData.client }
        roles2={ projectData.roles2 }
        year2={ projectData.year2 }
        duration={ projectData.duration }

        webLaunchUrl={ projectData.webLaunchUrl }
        prototypeLaunchUrl={ projectData.prototypeLaunchUrl }

        headerImage={ projectData.headerImage }
        content={ projectData.content }
      />

      <main>
        <section className="project-page-section text-creme text-start">
          <div className="container">
            {/*{ projectData.webImages.map(image => (
              <div key={ image.url }>
                <Image src={ image.url } alt={ `${ projectData.title } Case Study's Image` } width="400" height="220"/>
              </div>
            )) }*/}

            {/*{ projectData.contentMultiple.map(content => (
              <div key={ content.text }>
                <p>{ content.text }</p>
              </div>
            )) }*/}

            {/* With "Image": Must use 'width=""' & 'height=""' properties, or 'layout="fill"' property */}
            {/*<Image src={ projectData.thumbnailImage.url } alt={ `${ projectData.title } Case Study's Image` } width="600" height="380"/>*/}
            {/*<img src={ projectData.thumbnailImage.url } alt={ `${ projectData.title } Case Study's Image` } style={{ width:"100%" }}/>*/}

            <div className="row page-content-mid">
              <div className="col-md-12">{/*col-md-10 offset-md-1*/}
                {/*<Image src={ projectData.webImagesFirst[0].url } alt={ `${ projectData.title } Case Study's Image` } width="400" height="220"/>*/}
                { projectData.webImagesFirst && projectData.webImagesFirst.map(image => (
                  <div key={ image.url } className="mb-4 mb-md-5">
                    {/* {% if forloop.last %}mb-1 mb-md-1 mb-lg-4{% else %}mb-2 mb-md-3 mb-lg-5less{% endif %} */}
                    <img src={ image.url } alt={ `${ projectData.title } Case Study's Image` } style={{ width:"100%" }} loading="lazy"/>
                  </div>
                ))}
              </div>

              {/* Some New Examples */}
              {/* if (data !== null && data !== '')
              // do something
              } */}

              {/* if (data) {
              // do something
              } */}

              {/* https://steph-ny.medium.com/logical-and-vs-ternary-operator-cdf06ae5d432 */}
              {/* We could also use this approach */}
              {/* array.length > 0 && array.map(i => i); // returns false */}

              {/* The most ideal solution, however, is to use the ternary operator and control what you want as the outcome when the condition isn’t met */}
              {/* array ? true : false; // returns true;
              array.length ? true : false // returns false as the length is 0; */}

              {/* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_AND */}
              {/* Logical AND (&&) evaluates operands from left to right, returning immediately with the value of the first falsy operand it encounters; if all values are truthy, the value of the last operand is returned.
              If a value can be converted to true, the value is so-called truthy. If a value can be converted to false, the value is so-called falsy. */}

              {/* result = "" && "foo"; // result is assigned "" (empty string)
              result = 2 && 0; // result is assigned 0
              result = "foo" && 4; // result is assigned 4 */}

              {/* Because "CMS when not clearing input" generates "<p></p>", so string would not be length "0", but length "7" */}
              {/* projectData.captionFirst.html.length > 7 && ... */}

              {/* Input-Dont-Exist - Not ever written 'or' Cleared (in the CMS)
              Input-Exists - Lorem Ipsum 'or' Errased but not cleared, so throws <p></p> (in the CMS) */}
              { (projectData.captionFirst && projectData.captionFirst.html !== "<p></p>") &&
                <div className="col-md-8 offset-md-2 mb-md-3">{/*col-md-6 offset-md-3*/}
                  <div className="mt-1 mt-md-4 mb-md-5less pb-5 font-light" dangerouslySetInnerHTML={{ __html: projectData.captionFirst.html }}/>
                  {/*font-ultra-light*/}
                </div>
              }
            </div>

            <div className="row page-content-mid">
              <div className="col-md-12">{/*col-md-10 offset-md-1*/}
                { projectData.webImagesSecond && projectData.webImagesSecond.map(image => (
                  <div key={ image.url } className="mb-4 mb-md-5">
                    <img src={ image.url } alt={ `${ projectData.title } Case Study's Image` } style={{ width:"100%" }}/>
                  </div>
                ))}
              </div>

              { (projectData.captionSecond && projectData.captionSecond.html !== "<p></p>") &&
                <div className="col-md-8 offset-md-2 mb-md-3">{/*col-md-6 offset-md-3*/}
                  <div className="mt-1 mt-md-4 mb-md-5less pb-5 font-light" dangerouslySetInnerHTML={{ __html: projectData.captionSecond.html }}/>
                  {/*font-ultra-light*/}
                </div>
              }
            </div>

            <div className="row page-content-mid">
              <div className="col-md-12">{/*col-md-10 offset-md-1*/}
                { projectData.webImagesThird && projectData.webImagesThird.map(image => (
                  <div key={ image.url } className="mb-4 mb-md-5">
                    <img src={ image.url } alt={ `${ projectData.title } Case Study's Image` } style={{ width:"100%" }}/>
                  </div>
                ))}
              </div>

              { (projectData.captionThird && projectData.captionThird.html !== "<p></p>") &&
                <div className="col-md-8 offset-md-2 mb-md-3">{/*col-md-6 offset-md-3*/}
                  <div className="mt-1 mt-md-4 mb-md-5less pb-5 font-light" dangerouslySetInnerHTML={{ __html: projectData.captionThird.html }}/>
                  {/*font-ultra-light*/}
                </div>
              }
            </div>

            <div className="row page-content-mid">
              <div className="col-md-12">{/*col-md-10 offset-md-1*/}
                { projectData.webImagesFourth && projectData.webImagesFourth.map(image => (
                  <div key={ image.url } className="mb-4 mb-md-5">
                    <img src={ image.url } alt={ `${ projectData.title } Case Study's Image` } style={{ width:"100%" }}/>
                  </div>
                ))}
              </div>

              { (projectData.captionFourth && projectData.captionFourth.html !== "<p></p>") &&
                <div className="col-md-8 offset-md-2 mb-md-3">{/*col-md-6 offset-md-3*/}
                  <div className="mt-1 mt-md-4 mb-md-5less pb-5 font-light" dangerouslySetInnerHTML={{ __html: projectData.captionFourth.html }}/>
                  {/*font-ultra-light*/}
                </div>
              }
            </div>

            <div className="row page-content-mid">
              <div className="col-md-12">{/*col-md-10 offset-md-1*/}
                { projectData.webImagesFifth && projectData.webImagesFifth.map(image => (
                  <div key={ image.url } className="mb-4 mb-md-5">
                    <img src={ image.url } alt={ `${ projectData.title } Case Study's Image` } style={{ width:"100%" }}/>
                  </div>
                ))}
              </div>

              { (projectData.captionFifth && projectData.captionFifth.html !== "<p></p>") &&
                <div className="col-md-8 offset-md-2 mb-md-3">{/*col-md-6 offset-md-3*/}
                  <div className="mt-1 mt-md-4 mb-md-5less pb-5 font-light" dangerouslySetInnerHTML={{ __html: projectData.captionFifth.html }}/>
                  {/*font-ultra-light*/}
                </div>
              }
            </div>

            <div className="row page-content-mid">
              <div className="col-md-12">{/*col-md-10 offset-md-1*/}
                { projectData.webImagesSixth && projectData.webImagesSixth.map(image => (
                  <div key={ image.url } className="mb-4 mb-md-5">
                    <img src={ image.url } alt={ `${ projectData.title } Case Study's Image` } style={{ width:"100%" }}/>
                  </div>
                ))}
              </div>

              { (projectData.captionSixth && projectData.captionSixth.html !== "<p></p>") &&
                <div className="col-md-8 offset-md-2 mb-md-3">{/*col-md-6 offset-md-3*/}
                  <div className="mt-1 mt-md-4 mb-md-5less pb-5 font-light" dangerouslySetInnerHTML={{ __html: projectData.captionSixth.html }}/>
                  {/*font-ultra-light*/}
                </div>
              }
            </div>

            <div className="row page-content-mid">
              <div className="col-md-12">{/*col-md-10 offset-md-1*/}
                { projectData.webImagesSeventh && projectData.webImagesSeventh.map(image => (
                  <div key={ image.url } className="mb-4 mb-md-5">
                    <img src={ image.url } alt={ `${ projectData.title } Case Study's Image` } style={{ width:"100%" }}/>
                  </div>
                ))}
              </div>

              { (projectData.captionSeventh && projectData.captionSeventh.html !== "<p></p>") &&
                <div className="col-md-8 offset-md-2 mb-md-3">{/*col-md-6 offset-md-3*/}
                  <div className="mt-1 mt-md-4 mb-md-5less pb-5 font-light" dangerouslySetInnerHTML={{ __html: projectData.captionSeventh.html }}/>
                  {/*font-ultra-light*/}
                </div>
              }
            </div>

            <div className="row page-content-mid">
              <div className="col-md-12">{/*col-md-10 offset-md-1*/}
                { projectData.webImagesEighth && projectData.webImagesEighth.map(image => (
                  <div key={ image.url } className="mb-4 mb-md-5">
                    <img src={ image.url } alt={ `${ projectData.title } Case Study's Image` } style={{ width:"100%" }}/>
                  </div>
                ))}
              </div>

              { (projectData.captionEighth && projectData.captionEighth.html !== "<p></p>") &&
                <div className="col-md-8 offset-md-2 mb-md-3">{/*col-md-6 offset-md-3*/}
                  <div className="mt-1 mt-md-4 mb-md-5less pb-5 font-light" dangerouslySetInnerHTML={{ __html: projectData.captionEighth.html }}/>
                  {/*font-ultra-light*/}
                </div>
              }
            </div>

            <div className="row page-content-mid">
              <div className="col-md-12">{/*col-md-10 offset-md-1*/}
                { projectData.webImagesNinth && projectData.webImagesNinth.map(image => (
                  <div key={ image.url } className="mb-4 mb-md-5">
                    <img src={ image.url } alt={ `${ projectData.title } Case Study's Image` } style={{ width:"100%" }}/>
                  </div>
                ))}
              </div>

              { (projectData.captionNinth && projectData.captionNinth.html !== "<p></p>") &&
                <div className="col-md-8 offset-md-2 mb-md-3">{/*col-md-6 offset-md-3*/}
                  <div className="mt-1 mt-md-4 mb-md-5less pb-5 font-light" dangerouslySetInnerHTML={{ __html: projectData.captionNinth.html }}/>
                  {/*font-ultra-light*/}
                </div>
              }
            </div>

            <div className="row page-content-mid">
              <div className="col-md-12">{/*col-md-10 offset-md-1*/}
                { projectData.webImagesTenth && projectData.webImagesTenth.map(image => (
                  <div key={ image.url } className="mb-4 mb-md-5">
                    <img src={ image.url } alt={ `${ projectData.title } Case Study's Image` } style={{ width:"100%" }}/>
                  </div>
                ))}
              </div>

              { (projectData.captionTenth && projectData.captionTenth.html !== "<p></p>") &&
                <div className="col-md-8 offset-md-2 mb-md-3">{/*col-md-6 offset-md-3*/}
                  <div className="mt-1 mt-md-4 mb-md-5less pb-5 font-light" dangerouslySetInnerHTML={{ __html: projectData.captionTenth.html }}/>
                  {/*font-ultra-light*/}
                </div>
              }
            </div>

            <div className="row page-content-mid">
              <div className="col-md-12">{/*col-md-10 offset-md-1*/}
                { projectData.webImagesEleventh && projectData.webImagesEleventh.map(image => (
                  <div key={ image.url } className="mb-4 mb-md-5">
                    <img src={ image.url } alt={ `${ projectData.title } Case Study's Image` } style={{ width:"100%" }}/>
                  </div>
                ))}
              </div>

              { (projectData.captionEleventh && projectData.captionEleventh.html !== "<p></p>") &&
                <div className="col-md-8 offset-md-2 mb-md-3">{/*col-md-6 offset-md-3*/}
                  <div className="mt-1 mt-md-4 mb-md-5less pb-5 font-light" dangerouslySetInnerHTML={{ __html: projectData.captionEleventh.html }}/>
                  {/*font-ultra-light*/}
                </div>
              }
            </div>

            <div className="row page-content-mid">
              <div className="col-md-12">{/*col-md-10 offset-md-1*/}
                { projectData.webImagesTwelfth && projectData.webImagesTwelfth.map(image => (
                  <div key={ image.url } className="mb-4 mb-md-5">
                    <img src={ image.url } alt={ `${ projectData.title } Case Study's Image` } style={{ width:"100%" }}/>
                  </div>
                ))}
              </div>

              { (projectData.captionTwelfth && projectData.captionTwelfth.html !== "<p></p>") &&
                <div className="col-md-8 offset-md-2 mb-md-3">{/*col-md-6 offset-md-3*/}
                  <div className="mt-1 mt-md-4 mb-md-5less pb-5 font-light" dangerouslySetInnerHTML={{ __html: projectData.captionTwelfth.html }}/>
                  {/*font-ultra-light*/}
                </div>
              }
            </div>

            <div className="row page-content-mid">
              <div className="col-md-12">{/*col-md-10 offset-md-1*/}
                { projectData.webImagesThirteenth && projectData.webImagesThirteenth.map(image => (
                  <div key={ image.url } className="mb-4 mb-md-5">
                    <img src={ image.url } alt={ `${ projectData.title } Case Study's Image` } style={{ width:"100%" }}/>
                  </div>
                ))}
              </div>

              { (projectData.captionThirteenth && projectData.captionThirteenth.html !== "<p></p>") &&
                <div className="col-md-8 offset-md-2 mb-md-3">{/*col-md-6 offset-md-3*/}
                  <div className="mt-1 mt-md-4 mb-md-5less pb-5 font-light" dangerouslySetInnerHTML={{ __html: projectData.captionThirteenth.html }}/>
                  {/*font-ultra-light*/}
                </div>
              }
            </div>

            <div className="row page-content-mid">
              <div className="col-md-12">{/*col-md-10 offset-md-1*/}
                { projectData.webImagesFourteenth && projectData.webImagesFourteenth.map(image => (
                  <div key={ image.url } className="mb-4 mb-md-5">
                    <img src={ image.url } alt={ `${ projectData.title } Case Study's Image` } style={{ width:"100%" }}/>
                  </div>
                ))}
              </div>

              { (projectData.captionFourteenth && projectData.captionFourteenth.html !== "<p></p>") &&
                <div className="col-md-8 offset-md-2 mb-md-3">{/*col-md-6 offset-md-3*/}
                  <div className="mt-1 mt-md-4 mb-md-5less pb-5 font-light" dangerouslySetInnerHTML={{ __html: projectData.captionFourteenth.html }}/>
                  {/*font-ultra-light*/}
                </div>
              }
            </div>

            <div className="row page-content-mid">
              <div className="col-md-12">{/*col-md-10 offset-md-1*/}
                { projectData.webImagesFifteenth && projectData.webImagesFifteenth.map(image => (
                  <div key={ image.url } className="mb-4 mb-md-5">
                    <img src={ image.url } alt={ `${ projectData.title } Case Study's Image` } style={{ width:"100%" }}/>
                  </div>
                ))}
              </div>

              { (projectData.captionFifteenth && projectData.captionFifteenth.html !== "<p></p>") &&
                <div className="col-md-8 offset-md-2 mb-md-3">{/*col-md-6 offset-md-3*/}
                  <div className="mt-1 mt-md-4 mb-md-5less pb-5 font-light" dangerouslySetInnerHTML={{ __html: projectData.captionFifteenth.html }}/>
                  {/*font-ultra-light*/}
                </div>
              }
            </div>

            <div className="row page-content-mid">
              <div className="col-md-12">{/*col-md-10 offset-md-1*/}
                { projectData.webImagesSixteenth && projectData.webImagesSixteenth.map(image => (
                  <div key={ image.url } className="mb-4 mb-md-5">
                    <img src={ image.url } alt={ `${ projectData.title } Case Study's Image` } style={{ width:"100%" }}/>
                  </div>
                ))}
              </div>

              { (projectData.captionSixteenth && projectData.captionSixteenth.html !== "<p></p>") &&
                <div className="col-md-8 offset-md-2 mb-md-3">{/*col-md-6 offset-md-3*/}
                  <div className="mt-1 mt-md-4 mb-md-5less pb-5 font-light" dangerouslySetInnerHTML={{ __html: projectData.captionSixteenth.html }}/>
                  {/*font-ultra-light*/}
                </div>
              }
            </div>

            <div className="row page-content-mid">
              <div className="col-md-12">{/*col-md-10 offset-md-1*/}
                { projectData.webImagesSeventeenth && projectData.webImagesSeventeenth.map(image => (
                  <div key={ image.url } className="mb-4 mb-md-5">
                    <img src={ image.url } alt={ `${ projectData.title } Case Study's Image` } style={{ width:"100%" }}/>
                  </div>
                ))}
              </div>

              { (projectData.captionSeventeenth && projectData.captionSeventeenth.html !== "<p></p>") &&
                <div className="col-md-8 offset-md-2 mb-md-3">{/*col-md-6 offset-md-3*/}
                  <div className="mt-1 mt-md-4 mb-md-5less pb-5 font-light" dangerouslySetInnerHTML={{ __html: projectData.captionSeventeenth.html }}/>
                  {/*font-ultra-light*/}
                </div>
              }
            </div>

            <div className="row page-content-mid">
              <div className="col-md-12">{/*col-md-10 offset-md-1*/}
                { projectData.webImagesEighteenth && projectData.webImagesEighteenth.map(image => (
                  <div key={ image.url } className="mb-4 mb-md-5">
                    <img src={ image.url } alt={ `${ projectData.title } Case Study's Image` } style={{ width:"100%" }}/>
                  </div>
                ))}
              </div>

              { (projectData.captionEighteenth && projectData.captionEighteenth.html !== "<p></p>") &&
                <div className="col-md-8 offset-md-2 mb-md-3">{/*col-md-6 offset-md-3*/}
                  <div className="mt-1 mt-md-4 mb-md-5less pb-5 font-light" dangerouslySetInnerHTML={{ __html: projectData.captionEighteenth.html }}/>
                  {/*font-ultra-light*/}
                </div>
              }
            </div>

            <div className="row page-content-mid">
              <div className="col-md-12">{/*col-md-10 offset-md-1*/}
                { projectData.webImagesNineteenth && projectData.webImagesNineteenth.map(image => (
                  <div key={ image.url } className="mb-4 mb-md-5">
                    <img src={ image.url } alt={ `${ projectData.title } Case Study's Image` } style={{ width:"100%" }}/>
                  </div>
                ))}
              </div>

              { (projectData.captionNineteenth && projectData.captionNineteenth.html !== "<p></p>") &&
                <div className="col-md-8 offset-md-2 mb-md-3">{/*col-md-6 offset-md-3*/}
                  <div className="mt-1 mt-md-4 mb-md-5less pb-5 font-light" dangerouslySetInnerHTML={{ __html: projectData.captionNineteenth.html }}/>
                  {/*font-ultra-light*/}
                </div>
              }
            </div>

            <div className="row page-content-mid">
              <div className="col-md-12">{/*col-md-10 offset-md-1*/}
                { projectData.webImagesTwentieth && projectData.webImagesTwentieth.map(image => (
                  <div key={ image.url } className="mb-4 mb-md-5">
                    <img src={ image.url } alt={ `${ projectData.title } Case Study's Image` } style={{ width:"100%" }}/>
                  </div>
                ))}
              </div>

              { (projectData.captionTwentieth && projectData.captionTwentieth.html !== "<p></p>") &&
                <div className="col-md-8 offset-md-2 mb-md-3">{/*col-md-6 offset-md-3*/}
                  <div className="mt-1 mt-md-4 mb-md-5less pb-5 font-light" dangerouslySetInnerHTML={{ __html: projectData.captionTwentieth.html }}/>
                  {/*font-ultra-light*/}
                </div>
              }
            </div>

            { projectData.webImageFonts &&
              <div className="row mb-2 mb-md-5 pb-5">
                <div className="col-md-10 offset-md-1">
                  <img src={ projectData.webImageFonts.url } alt="A display of the fonts used in the project" style={{ width:"100%" }} loading="lazy"/>
                </div>
              </div>
            }
            {/*<Image src={ projectData.webImageFonts.url } alt="A display of the fonts used in the project" width="300" height="300"/>*/}

            <div className="row page-content-last font-light text-creme">{/*font-ultra-light*/}{/*To Check Logic In (stuff/content_two_left_right.html)*/}
              {/* Desktop Lg | Screen Readers */}
              <div className="col-md-4 offset-md-2 d-none d-lg-block">
                <div className="pe-4">
                  { projectData.contentLastLeft &&
                    <div dangerouslySetInnerHTML={{ __html: projectData.contentLastLeft.html }}/>
                  }
                </div>
              </div>
              
              <div className="col-md-4 d-none d-lg-block">
                <div className="ps-4">
                  { projectData.contentLastRight &&
                    <div dangerouslySetInnerHTML={{ __html: projectData.contentLastRight.html }}/>
                  }
                </div>
              </div>

              {/* Mobile Lg */}
              <div className="col-md-8 offset-md-2 d-block d-lg-none" aria-hidden="true">
                { projectData.contentLastLeft &&
                  <div dangerouslySetInnerHTML={{ __html: projectData.contentLastLeft.html }}/>
                }

                { projectData.contentLastRight &&
                  <div className="mt-4" dangerouslySetInnerHTML={{ __html: projectData.contentLastRight.html }}/>
                }
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer/>

    </>
  )
};