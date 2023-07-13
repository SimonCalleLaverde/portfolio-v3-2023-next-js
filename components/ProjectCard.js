// IMPROVING "FIGURE-ONE", "FIGURE-TWO", & "FIGURE-THREE"
// DOING "MOBILE" VERSION

// Imports
import Link from "next/link";
import Image from "next/image";
//import moment from "moment";

// Project (Card) Component
export default function ProjectCard({ slug, order, thumbnailImage, title, nameForThumbnail, type, roles2, year2, category, platforms2 }) {
  return (

    <article className="project-card font-light">{/*font-ultra-light*/}
      <Link href={ `/projects/${ slug }` }>{/*className="link-page-load"*/}
        {/* Desktop [Every :nth-child(3n + 1)] | Mobile [Always] | Screen Readers [Always] */}
        <figure className="FIGURE-ONE">
          {/* Option 1 (Image Component): Must Use "width" & "height" Properties, Or "layout='fill'" Property */}
          {/*<Image src={ thumbnailImage.url } alt={ `${ title } Case Study's Thumbnail Image` } layout="fill"/>*/}
          {/*<Image src={ thumbnailImage.url } alt={ `${ title } Case Study's Thumbnail Image` } width="200" height="120"/>*/}

          {/* Option 2 (Img) */}
          {/*<img src={ thumbnailImage.url } alt={ `${ title } Case Study's Thumbnail Image` } style={{ width:"100%" }}/>*/}

          {/* Option 3 (Background-Image) */}
          <div className="project-thumbnail background-image-default" id={ `project_thumbnail_0${ order }` } style={{ backgroundImage:`url(${ thumbnailImage.url })` }} type="image" title={ `Case Study: ${ title }` }>{/*bg-image*/}{/*loading="lazy"*/}
          </div>



          {/* Desktop [Every :nth-child(3n + 1)] | Screen Readers [Always] */}
          <figcaption className="d-none d-md-flex justify-content-between">
            <div className="project-title">
              <div className="project-type text-uppercase">
                { type }
              </div>

              <h4 className="text-medium text-turquoise mt-2 mb-0">
                { title }
              </h4>
            </div>

            <div className="project-description">
              { category }{/*{ roles2 }*/}{/*{ platforms2 }*/}
            </div>
          </figcaption>



          {/* Mobile [Always] */}
          <figcaption className="d-block d-md-none    figcaption-mobile    text-turquoise" aria-hidden="true">
            <h4 className="text-medium text-turquoise text-uppercase mb-0">
              { title }
            </h4>

            <div className="project-details">
              {/*<div className="project-roles">
                { roles2 }
              </div>*/}
            </div>
          </figcaption>



        </figure>

        {/* Desktop [Every :nth-child(3n + 2)] */}
        <figure className="FIGURE-TWO" aria-hidden="true">{/*d-none d-md-block*/}



          <figcaption>
            <div className="row">
              <div className="col-md-4 d-flex flex-column justify-content-between align-items-end">
                <div className="project-title">
                  <div className="project-type text-uppercase">
                    { type }
                  </div>

                  <h4 className="text-medium text-turquoise mt-2 mb-0">
                    { title }
                  </h4>
                </div>

                <div className="project-description">
                  { category }
                </div>
              </div>

              <div className="col-md-8">
                {/* Option 3 (Background-Image) */}
                <div className="project-thumbnail background-image-default" id={ `project_thumbnail_0${ order }` } style={{ backgroundImage:`url(${ thumbnailImage.url })` }} type="image" title={ `Case Study: ${ title }` }>
                </div>
              </div>
            </div>



          </figcaption>
        </figure>

        {/* Desktop [Every :nth-child(3n + 3)] */}
        <figure className="FIGURE-THREE" aria-hidden="true">{/*d-none d-md-block*/}



          <figcaption>
            <div className="row">
              <div className="col-md-8">
                {/* Option 3 (Background-Image) */}
                <div className="project-thumbnail background-image-default" id={ `project_thumbnail_0${ order }` } style={{ backgroundImage:`url(${ thumbnailImage.url })` }} type="image" title={ `Case Study: ${ title }` }>
                </div>
              </div>

              <div className="col-md-4 d-flex flex-column justify-content-between">
                <div className="project-title">
                  <div className="project-type text-uppercase">
                    { type }
                  </div>

                  <h4 className="text-medium text-turquoise mt-2 mb-0">
                    { title }
                  </h4>
                </div>

                <div className="project-description">
                  { category }
                </div>
              </div>
            </div>
          </figcaption>



        </figure>
      </Link>
    </article>

  )
};