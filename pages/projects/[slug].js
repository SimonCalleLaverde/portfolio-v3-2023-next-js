// - - - - - - - B A S E D   I N   G R A P H   C M S   D E V   E D ' S   E X A M P L E   "stuff/[[SLUG]].js" - - - - - - - //
// - - - - - - - &   N O W   I N   "pages/index.js", "pages/projects.js", "pages/blog.js"   A S   W E L L - - - - - - - //

// Imports
import Link from "next/link";
import Image from "next/image";
import HeadConfig from "../../components/HeadConfig.js";
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
      headerImage {
        url
      }

      order
      title
      client
      roles2
      year2
      duration

      webLaunchUrl
      prototypeLaunchUrl

      thumbnailImage {
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

      <HeadConfig
        title={ projectData.title }
      />

      {/*<ProjectPageHeader
        title={ projectData.title }
        client={ projectData.client }
      />*/}

      <main>
        <header className="project-page-header text-turquoise">
          <div className="container">

            <div className="row">
              <div className="col-md-6">

                <div className="row">
                  <div className="col-8 offset-2 col-md-10 col-lg-8 offset-lg-1 col-xl-12">
                    <div className="position-relative">
                      <span className="page-order font-headline" aria-hidden="true">
                        0{ projectData.order }{/*03*/}{/*{{ page.order }}*/}

                        {/*{% assign sorted_projects = site.projects %}
                        {% assign projects_total_count = 0 %}

                        {% for project in sorted_projects %}
                          {% assign projects_total_count = projects_total_count | plus:1 %}
                        {% endfor %}*/}

                        <small className="font-ultra-light">
                          {" "}/04{/*{{ projects_total_count }}*/}
                        </small>
                      </span>
                    </div>

                    <h1 className="page-title text-huge text-turquoise text-uppercase">
                      { projectData.title }
                    </h1>
                  </div>
                </div>

                <div className="row text-left mt-5less">
                  <div className="col-5 offset-2">
                    <div className="page-client font-ultra-light mb-2 pb-1">
                      <span className="page-subtitles font-light">
                        Client
                      </span>
                      { projectData.client ? projectData.client : projectData.title }
                    </div>

                    <div className="page-roles font-ultra-light mb-2 pb-1">
                      <span className="page-subtitles font-light">
                        Roles
                      </span>
                      {/* I didn't have this "<span/>" below in older site. Here for the key. Had to create ".page-subtitles" class in "<span/> above" */}
                      {/*
                      { projectData.roles.map(role => (
                        <span key={ role }>
                          { role }{" "}·{" "}
                        </span>
                      )) }
                      */}
                      {/*&middot;*/}
                      { projectData.roles2 }
                    </div>
                  </div>

                  <div className="col-4 offset-1">
                    {/* Removing "Date Formating" Links From My Tabs And Leaving Here For The Day I Do It, Using Hygraph's Date-Picker Again. */}
                    {/*https://momentjs.com/docs/*/}
                    {/*https://blog.logrocket.com/4-alternatives-to-moment-js-for-internationalizing-dates/*/}
                    {/*https://day.js.org/*/}
                    {/*https://www.reactshark.com/blog/guide-react-date-format*/}
                    {/* EXAMPLE USED IN MY "GitHub > next-js-blog-graphcms" */}
                    {/*<h3>{ datePublished }</h3>*/}
                    {/*<h3>{ moment(datePublished).format("MMMM d, YYYY") }</h3>*/}
                    {/*<h3>{ moment(datePublished).format("MMMM Do, YYYY") }</h3>*/}
                    {/*<h3>{ moment(datePublished).format("MMMM D, YYYY") }</h3>*/}
                    <div className="page-year font-ultra-light mb-2 pb-1">
                      <span className="page-subtitles font-light">
                        Year
                      </span>
                      {/*{ projectData.year }*/}
                      { projectData.year2 }
                    </div>

                    <div className="page-duration font-ultra-light mb-2 pb-1">
                      <span className="page-subtitles font-light">
                        Duration
                      </span>
                      { projectData.duration }
                    </div>
                  </div>
                </div>

                <div className="row mt-5less">
                  <div className="col-md-8 offset-md-2">
                    <div className="font-light">
                      { projectData.webLaunchUrl &&
                        <Link className="btn btn-xs btn-turquoise" href={ projectData.webLaunchUrl } target="_blank" rel="noreferrer">
                          View the live site
                        </Link>
                      }

                      { projectData.prototypeLaunchUrl &&
                        <Link className="btn btn-xs btn-turquoise" href={ projectData.prototypeLaunchUrl } target="_blank" rel="noreferrer">
                          View the prototype
                        </Link>
                      }
                    </div>
                  </div>
                </div>

                {/* Desktop Lg | Screen Readers */}
                <div className="row mt-5 d-none d-lg-block">
                  <div className="col-lg-10 offset-lg-1 mt-2">
                    <div className="page-content font-ultra-light">
                      {/*{ projectData.content.text }*/}

                      <div dangerouslySetInnerHTML={{ __html: projectData.content.html }}/>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>

          {/* Desktop Md | Screen Readers */}
          <div className="page-image-wrap d-none d-md-block">
            <div className="container">

              <div className="row">
                <div className="col-md-6 offset-md-6 d-flex flex-column justify-content-end">{/*flex-row*/}{/*align-items-end*/}
                  <div className="page-image background-image-default" type="image" style={{ backgroundImage:`url(${ projectData.thumbnailImage.url })` }} title={`Main Image Case Study: ${ projectData.title }`}>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Mobile */}
          <div className="container d-block d-md-none mt-5 pt-3">
            <div className="row">
              <div className="col-12">
                <img src={ projectData.thumbnailImage.url } alt={`Main Image Case Study: ${ projectData.title }`} style={{ width:"100%" }}/>
              </div>
            </div>
          </div>

          {/* Mobile Lg */}
          <div className="container d-block d-lg-none mt-5 pt-3" aria-hidden="true">
            <div className="row">
              <div className="col-md-8">{/*col-md-8 offset-md-2*/}
                <div className="page-content font-ultra-light">
                  {/*{ projectData.content.text }*/}

                  <div dangerouslySetInnerHTML={{ __html: projectData.content.html }}/>
                </div>
              </div>
            </div>
          </div>
        </header>

        <section className="project-page-section text-turquoise" id="project_page_section" data-scene>
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
                  <div key={ image.url } className="mb-5">
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
                <div className="col-md-8 offset-md-2 mb-3">{/*col-md-6 offset-md-3*/}
                  <div className="mt-4more mb-5 pb-5 font-ultra-light" dangerouslySetInnerHTML={{ __html: projectData.captionFirst.html }}/>
                </div>
              }
            </div>

            <div className="row page-content-mid">
              <div className="col-md-12">{/*col-md-10 offset-md-1*/}
                { projectData.webImagesSecond && projectData.webImagesSecond.map(image => (
                  <div key={ image.url } className="mb-5">
                    <img src={ image.url } alt={ `${ projectData.title } Case Study's Image` } style={{ width:"100%" }}/>
                  </div>
                ))}
              </div>

              { (projectData.captionSecond && projectData.captionSecond.html !== "<p></p>") &&
                <div className="col-md-8 offset-md-2 mb-3">{/*col-md-6 offset-md-3*/}
                  <div className="mt-4more mb-5 pb-5 font-ultra-light" dangerouslySetInnerHTML={{ __html: projectData.captionSecond.html }}/>
                </div>
              }
            </div>

            <div className="row page-content-mid">
              <div className="col-md-12">{/*col-md-10 offset-md-1*/}
                { projectData.webImagesThird && projectData.webImagesThird.map(image => (
                  <div key={ image.url } className="mb-5">
                    <img src={ image.url } alt={ `${ projectData.title } Case Study's Image` } style={{ width:"100%" }}/>
                  </div>
                ))}
              </div>

              { (projectData.captionThird && projectData.captionThird.html !== "<p></p>") &&
                <div className="col-md-8 offset-md-2 mb-3">{/*col-md-6 offset-md-3*/}
                  <div className="mt-4more mb-5 pb-5 font-ultra-light" dangerouslySetInnerHTML={{ __html: projectData.captionThird.html }}/>
                </div>
              }
            </div>

            <div className="row page-content-mid">
              <div className="col-md-12">{/*col-md-10 offset-md-1*/}
                { projectData.webImagesFourth && projectData.webImagesFourth.map(image => (
                  <div key={ image.url } className="mb-5">
                    <img src={ image.url } alt={ `${ projectData.title } Case Study's Image` } style={{ width:"100%" }}/>
                  </div>
                ))}
              </div>

              { (projectData.captionFourth && projectData.captionFourth.html !== "<p></p>") &&
                <div className="col-md-8 offset-md-2 mb-3">{/*col-md-6 offset-md-3*/}
                  <div className="mt-4more mb-5 pb-5 font-ultra-light" dangerouslySetInnerHTML={{ __html: projectData.captionFourth.html }}/>
                </div>
              }
            </div>

            <div className="row page-content-mid">
              <div className="col-md-12">{/*col-md-10 offset-md-1*/}
                { projectData.webImagesFifth && projectData.webImagesFifth.map(image => (
                  <div key={ image.url } className="mb-5">
                    <img src={ image.url } alt={ `${ projectData.title } Case Study's Image` } style={{ width:"100%" }}/>
                  </div>
                ))}
              </div>

              { (projectData.captionFifth && projectData.captionFifth.html !== "<p></p>") &&
                <div className="col-md-8 offset-md-2 mb-3">{/*col-md-6 offset-md-3*/}
                  <div className="mt-4more mb-5 pb-5 font-ultra-light" dangerouslySetInnerHTML={{ __html: projectData.captionFifth.html }}/>
                </div>
              }
            </div>

            <div className="row page-content-mid">
              <div className="col-md-12">{/*col-md-10 offset-md-1*/}
                { projectData.webImagesSixth && projectData.webImagesSixth.map(image => (
                  <div key={ image.url } className="mb-5">
                    <img src={ image.url } alt={ `${ projectData.title } Case Study's Image` } style={{ width:"100%" }}/>
                  </div>
                ))}
              </div>

              { (projectData.captionSixth && projectData.captionSixth.html !== "<p></p>") &&
                <div className="col-md-8 offset-md-2 mb-3">{/*col-md-6 offset-md-3*/}
                  <div className="mt-4more mb-5 pb-5 font-ultra-light" dangerouslySetInnerHTML={{ __html: projectData.captionSixth.html }}/>
                </div>
              }
            </div>

            <div className="row page-content-mid">
              <div className="col-md-12">{/*col-md-10 offset-md-1*/}
                { projectData.webImagesSeventh && projectData.webImagesSeventh.map(image => (
                  <div key={ image.url } className="mb-5">
                    <img src={ image.url } alt={ `${ projectData.title } Case Study's Image` } style={{ width:"100%" }}/>
                  </div>
                ))}
              </div>

              { (projectData.captionSeventh && projectData.captionSeventh.html !== "<p></p>") &&
                <div className="col-md-8 offset-md-2 mb-3">{/*col-md-6 offset-md-3*/}
                  <div className="mt-4more mb-5 pb-5 font-ultra-light" dangerouslySetInnerHTML={{ __html: projectData.captionSeventh.html }}/>
                </div>
              }
            </div>

            { projectData.webImageFonts &&
              <div className="row mb-5 pb-5">
                <div className="col-md-10 offset-md-1">
                  <img src={ projectData.webImageFonts.url } alt="A display of the fonts used in the project" style={{ width:"100%" }} loading="lazy"/>
                </div>
              </div>
            }
            {/*<Image src={ projectData.webImageFonts.url } alt="A display of the fonts used in the project" width="300" height="300"/>*/}

            <div className="row page-content-last font-ultra-light text-turquoise">{/*To Check Logic In (stuff/content_two_left_right.html)*/}
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