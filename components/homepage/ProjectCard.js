// Imports
import Link from "next/link";
import Image from "next/image";
//import moment from "moment";

// Project (Card) Component
export default function ProjectCard({ slug, order, thumbnailImage, title, nameForThumbnail, type, roles, year, category, platforms }) {
	return (

		<article className="project-card home">
			<Link className="link-page-load" href={ `/projects/${ slug }` }>
				<figure>
					{/* Option 1 (Image Component): Must Use "width" & "height" Properties, Or "layout='fill'" Property */}
					{/*<Image src={ thumbnailImage.url } alt={ `${ title } Case Study's Thumbnail Image` } layout="fill"/>*/}
					{/*<Image src={ thumbnailImage.url } alt={ `${ title } Case Study's Thumbnail Image` } width="200" height="120"/>*/}

					{/* Option 2 (Img) */}
					{/*<img src={ thumbnailImage.url } alt={ `${ title } Case Study's Thumbnail Image` } style={{ width:"100%" }}/>*/}

					{/* Option 3 (Background-Image) */}
					<div className={ `project-thumbnail background-image-default bg-image` } id={ `project_thumbnail_0${ order }` } style={{ backgroundImage:`url(${ thumbnailImage.url })` }} type="image" title={ `${ title } Case Study's Thumbnail Image` }>{/*loading="lazy"*/}
					</div>

					<figcaption className="font-ultra-light text-rosybrown">
						{/* Desktop | Screen Readers */}
						<div class="project-title d-none d-md-block">
							<h3 className="text-huge text-uppercase text-rosybrown mb-0" dangerouslySetInnerHTML={{ __html: nameForThumbnail }}>
							</h3>

							<div class="project-details">
								<div className="project-type">
									{ type }
								</div>

								<div class="project-roles">
									{ roles.map(role => (
										<span key={ role }>{/* It didn't had this "<span/>" in old Portfolio. Here for the key. Had to create "page-subtitles" class */}
											{ role }{" "}·{" "}{/*&middot;*/}
										</span>
									)) }
									{/*{% unless forloop.last %} &middot;{% endunless %}*/}
								</div>
							</div>
						</div>

						<div class="project-info">




							{/* TO FOLLOW "stuff/project-card-[TO-DELETE].html" */}
							<h5 className="mt-4more">
								[Year] { year }
							</h5>

							<h5 className="mt-4more">
								[Category] { category }
							</h5>

							<h5 className="mt-4more">
								[Platforms <span style={{ color: "green" }}>{" "} (Map)</span>]
							</h5>
							{ platforms.map(platform => (
								<h5 key={ platform }>
									{ platform }
								</h5>
							)) }




        		</div>
					</figcaption>
				</figure>

				{/* MISSING MOBILE FROM OLD PORTFOLIO */}
				{/* TO FOLLOW "stuff/project-card-[TO-DELETE].html" */}

				{/* TEMPORARY // TO REVISE "moment.js" FOR DATES // USED IN MY "next-js-blog-graphcms" */}
				<time className="project-date">
					{/*<h3>{datePublished}</h3>*/}
					{/*<h3>{moment(datePublished).format("MMMM d, YYYY")}</h3>*/}
					{/*<h3>{moment(datePublished).format("MMMM Do, YYYY")}</h3>*/}
					{/*<h3>{moment(datePublished).format("MMMM D, YYYY")}</h3>*/}
				</time>
			</Link>
		</article>

	)
};