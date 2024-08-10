// Imports
import Link from "next/link";
import Image from "next/image";

// Project Page (Header) (Dynamic) Component
export default function ProjectPageHeader({ headerImage, order, title, client, roles2, year2, duration, webLaunchUrl, prototypeLaunchUrl, thumbnailImage, content }) {//{ title, client }
  return (
    <>

      <header className="project-page-header text-start">
        <div className="container">

          {/*<h1 className="headline-hero">
            { title }<br/>{ client }
          </h1>*/}

          <div className="row">
            <div className="col-md-6">

              <div className="row">
                <div className="col-8 col-md-10 col-lg-8 offset-lg-1 col-xl-10">{/*col-8 offset-2*/}{/*col-xl-12*/}
                  <div className="position-relative">
                    <span className="page-order font-headline" aria-hidden="true">
                      0{ order }{/*03*/}{/*{{ page.order }}*/}

                      {/*{% assign sorted_projects = site.projects %}
                      {% assign projects_total_count = 0 %}

                      {% for project in sorted_projects %}
                        {% assign projects_total_count = projects_total_count | plus:1 %}
                      {% endfor %}*/}

                      <small className="font-ultra-light">
                        {" "}/06{/*{{ projects_total_count }}*/}
                      </small>
                    </span>
                  </div>

                  <h1 className="page-title headline-huge text-uppercase">
                    { title }
                  </h1>
                </div>
              </div>

              <div className="row mt-4 mt-md-5less">{/*text-start*/}
                <div className="col-5 offset-md-2">{/*col-5 offset-2*/}
                  <div className="page-client font-ultra-light mb-2 pb-1">
                    <span className="page-subtitles font-regular">
                      Client
                    </span>
                    { client ? client : title }
                  </div>

                  <div className="page-roles font-ultra-light mb-2 pb-1">
                    <span className="page-subtitles font-regular">
                      Roles
                    </span>
                    {/* I didn't have this "<span/>" below in older site. Here for the key. Had to create ".page-subtitles" class in "<span/> above" */}
                    {/*
                    { roles.map(role => (
                      <span key={ role }>
                        { role }{" "}·{" "}
                      </span>
                    )) }
                    */}
                    {/*&middot;*/}
                    { roles2 }
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
                    <span className="page-subtitles font-regular">
                      Year
                    </span>
                    {/*{ year }*/}
                    { year2 }
                  </div>

                  <div className="page-duration font-ultra-light mb-2 pb-1">
                    <span className="page-subtitles font-regular">
                      Duration
                    </span>
                    { duration }
                  </div>
                </div>
              </div>

              <div className="row mt-4">
                <div className="col-md-8 offset-md-2">
                  <div className="font-regular">
                    { webLaunchUrl &&
                      <Link className="btn btn-xs" href={ webLaunchUrl } target="_blank" rel="noreferrer">
                        {/*View the live site*/}
                        Launch the live site
                      </Link>
                    }

                    { prototypeLaunchUrl &&
                      <Link className="btn btn-xs" href={ prototypeLaunchUrl } target="_blank" rel="noreferrer">
                        View the prototype
                      </Link>
                    }
                  </div>
                </div>
              </div>

              {/* Desktop Lg | Screen Readers */}
              <div className="row mt-5 pt-md-2 d-none d-lg-block">
                <div className="col-lg-10 offset-lg-1 mt-2">
                  <div className="page-content font-light">{/*font-ultra-light*/}
                    {/*{ content.text }*/}

                    <div dangerouslySetInnerHTML={{ __html: content.html }}/>
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
                <div className="page-image background-image-default" type="image" style={{ backgroundImage:`url(${ headerImage.url })` }} title={`Main Image Case Study: ${ title }`}>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Mobile */}
        <div className="container d-block d-md-none mt-5 pt-3">
          <div className="row">
            <div className="col-12">
              <img src={ headerImage.url } alt={`Main Image Case Study: ${ title }`} style={{ width:"100%" }}/>
            </div>
          </div>
        </div>

        {/* Mobile Lg */}
        <div className="container d-block d-lg-none mt-5 pt-md-5" aria-hidden="true">
          <div className="row">{/*mt-md-5 pt-md-4*/}
            <div className="col-md-8">{/*col-md-8 offset-md-2*/}
              <div className="page-content font-light">{/*font-ultra-light*/}
                {/*{ content.text }*/}

                <div dangerouslySetInnerHTML={{ __html: content.html }}/>
              </div>
            </div>
          </div>
        </div>
      </header>

    </>
  )
};