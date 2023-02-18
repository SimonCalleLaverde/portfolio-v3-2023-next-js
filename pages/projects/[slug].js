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
                        03{/*{{ page.order }}*/}

                        {/*{% assign sorted_projects = site.projects %}
                        {% assign projects_total_count = 0 %}

                        {% for project in sorted_projects %}
                          {% assign projects_total_count = projects_total_count | plus:1 %}
                        {% endfor %}*/}

                        <small className="font-ultra-light">
                          {" "}/30{/*{{ projects_total_count }}*/}
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
                      <span className="font-light">
                        Client
                      </span>
                      { projectData.client ? projectData.client : projectData.title }
                    </div>

                    <div className="page-roles font-ultra-light mb-2 pb-1">
                      <span className="font-light">
                        Roles
                      </span>
                      { projectData.roles.map(role => (
                        <span key={ role }>{/* They didn't had <span/> in older site. Here for the key. Should check styles */}
                          { role }{" "}·{" "}{/*&middot;*/}
                        </span>
                      )) }
                    </div>
                  </div>

                  <div className="col-4 offset-1">
                    <div className="page-year font-ultra-light">
                      <span className="font-light">
                        Year
                      </span>
                      { projectData.year }
                    </div>
                  </div>
                </div>

                <div className="row mt-5less">
                  <div className="col-md-8 offset-md-2">
                    <div className="page-launcher font-light">
                      <a className="btn btn-xs btn-rosybrown" href={ projectData.webLaunchUrl } target="_blank">
                        View the site
                      </a>
                    </div>
                  </div>
                </div>

                {/* Desktop Lg | Screen Readers */}
                <div className="row mt-5 d-none d-lg-block">
                  <div className="col-md-12 col-lg-10 offset-lg-1 col-xl-10 mt-2">{/*col-md-8 offset-md-2*/}
                    <div className="page-content font-ultra-light">
                      { projectData.content.text }
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>

          {/* Desktop Lg | Screen Readers */}
          <div className="page-image-wrapper d-none d-md-block">
            <div className="container">

              <div className="row">
                <div className="col-md-6 offset-md-6 d-flex flex-row align-items-end">
                  <div className="page-project-image" id="page_project_thumbnail_{ projectData.slug }" style={{ backgroundImage:`url(${ projectData.thumbnailImage.url })` }} type="image" title={`Main Image Case Study: ${ projectData.title }`}>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Mobile */}
          <div className="container d-block d-md-none mt-5 pt-3">
            <div className="row">
              <div className="col-12">
                <img src="{ projectData.thumbnailImage.url }" alt={`Main Image Case Study: ${ projectData.title }`}/>
              </div>
            </div>
          </div>

          {/* Mobile Lg */}
          <div className="container d-block d-lg-none mt-5 pt-3" aria-hidden="true">
            <div className="row">
              <div className="col-md-8 col-lg-10 offset-lg-1 col-xl-10">{/*col-md-8 offset-md-2*/}
                <div className="page-content font-ultra-light">
                  { projectData.content.text }
                </div>
              </div>
            </div>
          </div>
        </header>




        <section className="projectpage-article-section">
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

            <Link className="button" href={projectData.webLaunchUrl} target="_blank">
              <h4>{projectData.webLaunchUrl}</h4>
            </Link>

            <Image src={projectData.thumbnailImage.url} alt={`${projectData.title} Project's Thumbnail Image`} width="600" height="380"/>

            <p>{projectData.content.text}</p>

            {/*{projectData.webImages.map(image => (
              <div key={image.url}>
                <Image src={image.url} alt={`${projectData.title} Case Study's Image`} width="400" height="220"/>
              </div>
            ))}*/}

            {/*{projectData.contentMultiple.map(content => (
              <div key={content.text}>
                <p>{content.text}</p>
              </div>
            ))}*/}




            {projectData.webImagesFirst && projectData.webImagesFirst.map(image => (
              <div key={image.url}>
                <Image src={image.url} alt={`${projectData.title} Case Study's Image`} width="400" height="220"/>
              </div>
            ))}
            {/*<Image src={projectData.webImagesFirst[0].url} alt={`${projectData.title} Case Study's Image`} width="400" height="220"/>*/}

            {projectData.captionFirst &&
              <p>{projectData.captionFirst.text}</p>
            }



            {projectData.webImagesSecond && projectData.webImagesSecond.map(image => (
              <div key={image.url}>
                <Image src={image.url} alt={`${projectData.title} Case Study's Image`} width="400" height="220"/>
              </div>
            ))}

            {projectData.captionSecond &&
              <p>{projectData.captionSecond.text}</p>
            }



            {projectData.webImagesThird && projectData.webImagesThird.map(image => (
              <div key={image.url}>
                <Image src={image.url} alt={`${projectData.title} Case Study's Image`} width="400" height="220"/>
              </div>
            ))}

            {projectData.captionThird &&
              <p>{projectData.captionThird.text}</p>
            }



            {projectData.webImagesFourth && projectData.webImagesFourth.map(image => (
              <div key={image.url}>
                <Image src={image.url} alt={`${projectData.title} Case Study's Image`} width="400" height="220"/>
              </div>
            ))}

            {projectData.captionFourth &&
              <p>{projectData.captionFourth.text}</p>
            }



            {projectData.webImagesFifth && projectData.webImagesFifth.map(image => (
              <div key={image.url}>
                <Image src={image.url} alt={`${projectData.title} Case Study's Image`} width="400" height="220"/>
              </div>
            ))}

            {projectData.captionFifth &&
              <p>{projectData.captionFifth.text}</p>
            }



            {projectData.webImagesSixth && projectData.webImagesSixth.map(image => (
              <div key={image.url}>
                <Image src={image.url} alt={`${projectData.title} Case Study's Image`} width="400" height="220"/>
              </div>
            ))}

            {projectData.captionSixth &&
              <p>{projectData.captionSixth.text}</p>
            }



            {projectData.webImagesSeventh && projectData.webImagesSeventh.map(image => (
              <div key={image.url}>
                <Image src={image.url} alt={`${projectData.title} Case Study's Image`} width="400" height="220"/>
              </div>
            ))}

            {projectData.captionSeventh &&
              <p>{projectData.captionSeventh.text}</p>
            }




            {projectData.webImageFonts &&
              <img src={projectData.webImageFonts.url} alt={`${projectData.title} Case Study's Fonts Image`} style={{width:"70%"}}/>
            }
            {/*<Image src={projectData.webImageFonts.url} alt={`${projectData.title} Case Study's Fonts Image`} width="300" height="300"/>*/}

            {projectData.contentLastLeft &&
              <p>{projectData.contentLastLeft.text}</p>
            }

            {projectData.contentLastRight &&
              <p>{projectData.contentLastRight.text}</p>
            }

            {/*<h4>NAME FOR THUMBNAIL: {projectData.nameForThumbnail}</h4>*/}

            {/*<h4>TYPE: {projectData.type}</h4>*/}

            {/*<h4>CATEGORY: {projectData.category}</h4>*/}

            {/*<h4>SLUG: {projectData.slug}</h4>*/}

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