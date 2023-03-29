// - - - - - - - B A S E D   I N   G R A P H   C M S   D E V   E D ' S   E X A M P L E   "stuff/[[SLUG]].js" - - - - - - - //
// - - - - - - - &   N O W   I N   "pages/index.js", "pages/projects.js", "pages/blog.js"   A S   W E L L - - - - - - - //

// Imports
import Link from "next/link";
import Image from "next/image";
import HeadComponent from "../../components/HeadComponent.js";
import Header from "../../components/project/Header.js";
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
      roles
      year
      webLaunchUrl
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
                          {" "}/03{/*{{ projects_total_count }}*/}
                        </small>
                      </span>
                    </div>

                    <h1 className="page-title text-huge text-rosybrown text-uppercase">
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
                      { projectData.roles.map(role => (
                        <span key={ role }>{/* It didn't had this "<span/>" in older site. Here for the key. Had to create ".page-subtitles" Class */}
                          { role }{" "}·{" "}{/*&middot;*/}
                        </span>
                      )) }
                    </div>
                  </div>

                  <div className="col-4 offset-1">
                    <div className="page-year font-ultra-light">
                      <span className="page-subtitles font-light">
                        Year
                      </span>
                      { projectData.year }
                    </div>
                  </div>
                </div>

                <div className="row mt-5less">
                  <div className="col-md-8 offset-md-2">
                    <div className="font-light">
                      <Link className="btn btn-xs btn-rosybrown" href={ projectData.webLaunchUrl } target="_blank">
                        View the site
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Desktop Lg | Screen Readers */}
                <div className="row mt-5 d-none d-lg-block">
                  <div className="col-lg-10 offset-lg-1 mt-2">
                    <div className="page-content font-ultra-light">
                      {/*{ projectData.content.text }*/}

                      <div dangerouslySetInnerHTML={{ __html: projectData.content.html }}>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>

          {/* Desktop Md | Screen Readers */}
          <div className="page-image-wrapper d-none d-md-block">
            <div className="container">

              <div className="row">
                <div className="col-md-6 offset-md-6 d-flex flex-column justify-content-end">{/*flex-row*/}{/*align-items-end*/}
                  <div className="page-project-image background-image-default" type="image" style={{ backgroundImage:`url(${ projectData.thumbnailImage.url })` }} title={`Main Image Case Study: ${ projectData.title }`}>
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

                  <div dangerouslySetInnerHTML={{ __html: projectData.content.html }}>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        <section className="project-page text-rosybrown clearfix" id="project_page" data-scene>
          <div className="container">
            {/*{ projectData.webImages.map(image => (
              <div key={ image.url }>
                <Image src={ image.url } alt={`${ projectData.title } Case Study's Image`} width="400" height="220"/>
              </div>
            )) }*/}

            {/*{ projectData.contentMultiple.map(content => (
              <div key={ content.text }>
                <p>{ content.text }</p>
              </div>
            )) }*/}

            {/* With "Image": Must use 'width=""' & 'height=""' properties, or 'layout="fill"' property */}
            {/*<Image src={ projectData.thumbnailImage.url } alt={`${ projectData.title } Case Study's Image`} width="600" height="380"/>*/}
            {/*<img src={ projectData.thumbnailImage.url } alt={`${ projectData.title } Case Study's Image`} style={{ width:"100%" }}/>*/}

            <div className="row page-content-mid mb-3">
              <div className="col-md-12">{/*col-md-10 offset-md-1*/}
                {/*<Image src={ projectData.webImagesFirst[0].url } alt={`${ projectData.title } Case Study's Image`} width="400" height="220"/>*/}
                { projectData.webImagesFirst && projectData.webImagesFirst.map(image => (
                  <div key={ image.url } className="mb-5">
                    {/* {% if forloop.last %}mb-1 mb-md-1 mb-lg-4{% else %}mb-2 mb-md-3 mb-lg-5less{% endif %} */}
                    <img src={ image.url } alt={`${ projectData.title } Case Study's Image`} style={{ width:"100%" }} loading="lazy"/>
                  </div>
                ))}
              </div>

              <div className="col-md-8 offset-md-2">{/*col-md-6 offset-md-3*/}
                { projectData.captionFirst &&
                  <div className="mt-4more mb-5 pb-5 font-ultra-light" dangerouslySetInnerHTML={{ __html: projectData.captionFirst.html }}>
                  </div>
                }
              </div>
            </div>

            <div className="row page-content-mid mb-3">
              <div className="col-md-12">{/*col-md-10 offset-md-1*/}
                { projectData.webImagesSecond && projectData.webImagesSecond.map(image => (
                  <div key={ image.url } className="mb-5">
                    <img src={ image.url } alt={`${ projectData.title } Case Study's Image`} style={{ width:"100%" }}/>
                  </div>
                ))}
              </div>

              <div className="col-md-8 offset-md-2">{/*col-md-6 offset-md-3*/}
                { projectData.captionSecond &&
                  <div className="mt-4more mb-5 pb-5 font-ultra-light" dangerouslySetInnerHTML={{ __html: projectData.captionSecond.html }}>
                  </div>
                }
              </div>
            </div>

            <div className="row page-content-mid mb-3">
              <div className="col-md-12">{/*col-md-10 offset-md-1*/}
                { projectData.webImagesThird && projectData.webImagesThird.map(image => (
                  <div key={ image.url } className="mb-5">
                    <img src={ image.url } alt={`${ projectData.title } Case Study's Image`} style={{ width:"100%" }}/>
                  </div>
                ))}
              </div>

              <div className="col-md-8 offset-md-2">{/*col-md-6 offset-md-3*/}
                { projectData.captionThird &&
                  <div className="mt-4more mb-5 pb-5 font-ultra-light" dangerouslySetInnerHTML={{ __html: projectData.captionThird.html }}>
                  </div>
                }
              </div>
            </div>

            <div className="row page-content-mid mb-3">
              <div className="col-md-12">{/*col-md-10 offset-md-1*/}
                { projectData.webImagesFourth && projectData.webImagesFourth.map(image => (
                  <div key={ image.url } className="mb-5">
                    <img src={ image.url } alt={`${ projectData.title } Case Study's Image`} style={{ width:"100%" }}/>
                  </div>
                ))}
              </div>

              <div className="col-md-8 offset-md-2">{/*col-md-6 offset-md-3*/}
                { projectData.captionFourth &&
                  <div className="mt-4more mb-5 pb-5 font-ultra-light" dangerouslySetInnerHTML={{ __html: projectData.captionFourth.html }}>
                  </div>
                }
              </div>
            </div>

            <div className="row page-content-mid mb-3">
              <div className="col-md-12">{/*col-md-10 offset-md-1*/}
                { projectData.webImagesFifth && projectData.webImagesFifth.map(image => (
                  <div key={ image.url } className="mb-5">
                    <img src={ image.url } alt={`${ projectData.title } Case Study's Image`} style={{ width:"100%" }}/>
                  </div>
                ))}
              </div>

              <div className="col-md-8 offset-md-2">{/*col-md-6 offset-md-3*/}
                { projectData.captionFifth &&
                  <div className="mt-4more mb-5 pb-5 font-ultra-light" dangerouslySetInnerHTML={{ __html: projectData.captionFifth.html }}>
                  </div>
                }
              </div>
            </div>

            <div className="row page-content-mid mb-3">
              <div className="col-md-12">{/*col-md-10 offset-md-1*/}
                { projectData.webImagesSixth && projectData.webImagesSixth.map(image => (
                  <div key={ image.url } className="mb-5">
                    <img src={ image.url } alt={`${ projectData.title } Case Study's Image`} style={{ width:"100%" }}/>
                  </div>
                ))}
              </div>

              <div className="col-md-8 offset-md-2">{/*col-md-6 offset-md-3*/}
                { projectData.captionSixth &&
                  <div className="mt-4more mb-5 pb-5 font-ultra-light" dangerouslySetInnerHTML={{ __html: projectData.captionSixth.html }}>
                  </div>
                }
              </div>
            </div>

            <div className="row page-content-mid mb-3">
              <div className="col-md-12">{/*col-md-10 offset-md-1*/}
                { projectData.webImagesSeventh && projectData.webImagesSeventh.map(image => (
                  <div key={ image.url } className="mb-5">
                    <img src={ image.url } alt={`${ projectData.title } Case Study's Image`} style={{ width:"100%" }}/>
                  </div>
                ))}
              </div>

              <div className="col-md-8 offset-md-2">{/*col-md-6 offset-md-3*/}
                { projectData.captionSeventh &&
                  <div className="mt-4more mb-5 pb-5 font-ultra-light" dangerouslySetInnerHTML={{ __html: projectData.captionSeventh.html }}>
                  </div>
                }
              </div>
            </div>

            { projectData.webImageFonts &&
              <div className="row mb-5 pb-5">
                <div className="col-md-10 offset-md-1">
                  <img src={ projectData.webImageFonts.url } alt="A display of the fonts used in the project" style={{ width:"100%" }} loading="lazy"/>
                </div>
              </div>
            }
            {/*<Image src={ projectData.webImageFonts.url } alt="A display of the fonts used in the project" width="300" height="300"/>*/}

            <div className="row page-content-last font-ultra-light text-rosybrown">{/*To Check Logic In (stuff/content_two_left_right.html)*/}
              {/* Desktop Lg | Screen Readers */}
              <div className="col-md-4 offset-md-2 d-none d-lg-block">
                <div className="pe-4">
                  { projectData.contentLastLeft &&
                    <p>{ projectData.contentLastLeft.text }</p>
                  }
                </div>
              </div>
              
              <div className="col-md-4 d-none d-lg-block">
                <div className="ps-4">
                  { projectData.contentLastRight &&
                    <p>{ projectData.contentLastRight.text }</p>
                  }
                </div>
              </div>

              {/* Mobile Lg */}
              <div className="col-md-8 offset-md-2 d-block d-lg-none" aria-hidden="true">
                { projectData.contentLastLeft &&
                  <p>{ projectData.contentLastLeft.text }</p>
                }
                
                { projectData.contentLastRight &&
                  <p className="mt-4">{ projectData.contentLastRight.text }</p>
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