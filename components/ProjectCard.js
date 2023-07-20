// Imports
import Link from "next/link";
import Image from "next/image";
//import moment from "moment";

// Project (Card) Component
export default function ProjectCard({ slug, order, thumbnailImage, title, nameForThumbnail, type, year2, category }) {
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
            <div className="project-type-and-title">
              <div className="project-type">{/*text-uppercase*/}
                { type }
              </div>

              <h4 className="project-title text-medium mt-2 mb-0">
                { title }
              </h4>
            </div>

            <div className="project-description font-ultra-light">
              { category }
            </div>
          </figcaption>

          {/* Mobile [Always] */}
          <figcaption className="d-block d-md-none text-start" aria-hidden="true">
            <div className="project-type-and-title">
              <div className="project-type">{/*text-uppercase*/}
                { type }
              </div>

              <h4 className="project-title text-medium mt-2 mb-0">
                { title }
              </h4>
            </div>

            <div className="project-description font-ultra-light mt-1">{/*mt-2*/}
              { category }
            </div>
          </figcaption>
        </figure>

        {/* Desktop [Every :nth-child(3n + 2)] */}
        <figure className="FIGURE-TWO" aria-hidden="true">{/*d-none d-md-block*/}
          <div className="row">
            <figcaption className="col-md-4 d-flex flex-column justify-content-between align-items-end">
              <div className="project-type-and-title">
                <div className="project-type">{/*text-uppercase*/}
                  { type }
                </div>

                <h4 className="project-title text-medium mt-2 mb-0">
                  { title }
                </h4>
              </div>

              <div className="project-description font-ultra-light">
                { category }
              </div>
            </figcaption>

            <div className="col-md-8">
              {/* Option 3 (Background-Image) */}
              <div className="project-thumbnail background-image-default" id={ `project_thumbnail_0${ order }` } style={{ backgroundImage:`url(${ thumbnailImage.url })` }} type="image" title={ `Case Study: ${ title }` }>
              </div>
            </div>
          </div>
        </figure>

        {/* Desktop [Every :nth-child(3n + 3)] */}
        <figure className="FIGURE-THREE" aria-hidden="true">{/*d-none d-md-block*/}
          <div className="row">
            <div className="col-md-8">
              {/* Option 3 (Background-Image) */}
              <div className="project-thumbnail background-image-default" id={ `project_thumbnail_0${ order }` } style={{ backgroundImage:`url(${ thumbnailImage.url })` }} type="image" title={ `Case Study: ${ title }` }>
              </div>
            </div>

            <figcaption className="col-md-4 d-flex flex-column justify-content-between">
              <div className="project-type-and-title">
                <div className="project-type">{/*text-uppercase*/}
                  { type }
                </div>

                <h4 className="project-title text-medium mt-2 mb-0">
                  { title }
                </h4>
              </div>

              <div className="project-description font-ultra-light">
                { category }
              </div>
            </figcaption>
          </div>
        </figure>
      </Link>
    </article>

  )
};