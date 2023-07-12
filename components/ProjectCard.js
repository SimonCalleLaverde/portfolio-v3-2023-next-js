// MISSING "MOBILE" VERSION (WHERE COMMENT IS)

// TO IMPROVE "FIGURE-ONE", "FIGURE-TWO", & "FIGURE-THREE"

// TO USE JUST "FIGURE-ONE" FOR MOBILE

// Imports
import Link from "next/link";
import Image from "next/image";
//import moment from "moment";

// Project (Card) Component
export default function ProjectCard({ slug, order, thumbnailImage, title, nameForThumbnail, type, roles2, year2, category, platforms2 }) {
  return (

    <article className="project-card font-light">{/*font-ultra-light*/}
      <Link href={ `/projects/${ slug }` }>{/*className="link-page-load"*/}



        <figure className="FIGURE-ONE">
          {/* Option 1 (Image Component): Must Use "width" & "height" Properties, Or "layout='fill'" Property */}
          {/*<Image src={ thumbnailImage.url } alt={ `${ title } Case Study's Thumbnail Image` } layout="fill"/>*/}
          {/*<Image src={ thumbnailImage.url } alt={ `${ title } Case Study's Thumbnail Image` } width="200" height="120"/>*/}

          {/* Option 2 (Img) */}
          {/*<img src={ thumbnailImage.url } alt={ `${ title } Case Study's Thumbnail Image` } style={{ width:"100%" }}/>*/}

          {/* Option 3 (Background-Image) */}
          <div className="project-thumbnail background-image-default" id={ `project_thumbnail_0${ order }` } style={{ backgroundImage:`url(${ thumbnailImage.url })` }} type="image" title={ `Case Study: ${ title }` }>{/*bg-image*/}{/*loading="lazy"*/}
          </div>

          {/* Desktop | Screen Readers */}
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
        </figure>



        <figure className="FIGURE-TWO" aria-hidden="true">
          {/* Desktop | Screen Readers */}
          <figcaption className="d-none d-md-block">
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
                <div className="project-thumbnail background-image-default" id={ `project_thumbnail_0${ order }` } style={{ backgroundImage:`url(${ thumbnailImage.url })` }} type="image" title={ `Case Study: ${ title }` }>{/*bg-image*/}{/*loading="lazy"*/}
                </div>
              </div>
            </div>
          </figcaption>
        </figure>



        <figure className="FIGURE-THREE" aria-hidden="true">
          {/* Desktop | Screen Readers */}
          <figcaption className="d-none d-md-block">
            <div className="row">
              <div className="col-md-8">
                {/* Option 3 (Background-Image) */}
                <div className="project-thumbnail background-image-default" id={ `project_thumbnail_0${ order }` } style={{ backgroundImage:`url(${ thumbnailImage.url })` }} type="image" title={ `Case Study: ${ title }` }>{/*bg-image*/}{/*loading="lazy"*/}
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




        {/* To Revise Mobile Further. This Is Old Portfolio 2021 Example. Why Not Having "figure" & "figcaption" As Well In Mobile? */}
        {/* But First I'll Do Above, Which Will Be More Complex (With 3 Diff Layouts) And Follow On Mobile*/}
        {/* Missing Mobile */}
        <div className="project-title-mobile d-block d-md-none font-light text-turquoise" aria-hidden="true">{/*font-ultra-light*/}
          {/* TO CHECK. WAS SPAN INSIDE SET TO dangerouslySetInnerHTML. */}
          <h4 className="text-medium text-turquoise text-uppercase mb-0" dangerouslySetInnerHTML={{ __html: nameForThumbnail }}/>
          
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