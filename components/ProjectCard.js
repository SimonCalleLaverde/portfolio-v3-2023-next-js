// MISSING "MOBILE" VERSION (WHERE COMMENTS ARE)

// Imports
import Link from "next/link";
import Image from "next/image";
//import moment from "moment";

// Project (Card) Component
export default function ProjectCard({ slug, order, thumbnailImage, title, nameForThumbnail, type, roles2, year2, category, platforms2 }) {
  return (

    <article className="project-card">
      <Link className="link-page-load" href={ `/projects/${ slug }` }>
        <figure>
          {/* Option 1 (Image Component): Must Use "width" & "height" Properties, Or "layout='fill'" Property */}
          {/*<Image src={ thumbnailImage.url } alt={ `${ title } Case Study's Thumbnail Image` } layout="fill"/>*/}
          {/*<Image src={ thumbnailImage.url } alt={ `${ title } Case Study's Thumbnail Image` } width="200" height="120"/>*/}

          {/* Option 2 (Img) */}
          {/*<img src={ thumbnailImage.url } alt={ `${ title } Case Study's Thumbnail Image` } style={{ width:"100%" }}/>*/}

          {/* Option 3 (Background-Image) */}
          <div className="project-thumbnail background-image-default bg-image" id={ `project_thumbnail_0${ order }` } style={{ backgroundImage:`url(${ thumbnailImage.url })` }} type="image" title={ `${ title } Case Study's Thumbnail Image` }>{/*loading="lazy"*/}
          </div>

          <figcaption className="font-light text-uppercase">{/*font-ultra-light*/}




            {/* Desktop | Screen Readers */}
            <div className="project-title d-none d-md-block">
              <div className="project-details">
                <div className="project-type">
                  { type }
                </div>

                {/*<div className="project-roles">
                  { roles2 }
                </div>*/}
              </div>

              <h4 className="text-medium text-turquoise mb-0" dangerouslySetInnerHTML={{ __html: nameForThumbnail }}>
              </h4>
            </div>




            <div className="project-info">
              {/* Desktop | Screen Readers */}
              <div className="project-data d-none d-md-block">
                { category }
              </div>

              {/* Mobile */}
              <div className="project-data text-left d-block d-md-none" aria-hidden="true">
              </div>

              {/* Desktop | Screen Readers */}
              {/*<div className="project-platforms d-none d-md-block">
                { platforms2 }
              </div>*/}
            </div>




          </figcaption>
        </figure>




        {/* Mobile */}
        <div className="project-title-mobile d-block d-md-none font-light text-turquoise" aria-hidden="true">{/*font-ultra-light*/}
          {/* TO CHECK. WAS SPAN INSIDE SET TO dangerouslySetInnerHTML. */}
          {/*<h4 className="text-medium text-turquoise text-uppercase mb-0" dangerouslySetInnerHTML={{ __html: nameForThumbnail }}>
          </h4>*/}
          
          <div className="project-details">
            {/*<div className="project-roles">
              { roles2 }
            </div>*/}
          </div>
        </div>




      </Link>
    </article>

  )
};