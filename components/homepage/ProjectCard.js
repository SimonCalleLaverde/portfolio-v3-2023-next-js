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
						<div className="project-title d-none d-md-block">
							<h3 className="text-huge text-uppercase text-rosybrown mb-0" dangerouslySetInnerHTML={{ __html: nameForThumbnail }}>
							</h3>

							<div className="project-details">
								<div className="project-type">
									{ type }
								</div>

								<div className="project-roles">
									{ roles.map(role => (
										<span key={ role }>{/* It didn't had this "<span/>" in old Portfolio. Here for the key. Had to create "page-subtitles" class */}
											{ role }{" "}·{" "}{/*&middot;*/}
										</span>
									)) }
									{/*{% unless forloop.last %} &middot;{% endunless %}*/}
								</div>
							</div>
						</div>

						<div className="project-info">
							{/*Desktop | Screen Readers*/}
							<div className="project-data d-none d-md-block">
								<time className="font-light">
									{ year }
								</time>

								{ category }
							</div>

							{/*Mobile*/}
							<div className="project-data text-left d-block d-md-none" aria-hidden="true">{/*text-right*/}
								<time className="font-light mb-0">
									{ year }
								</time>
							</div>

							{/*Desktop | Screen Readers*/}
							<div className="project-platforms d-none d-md-block">
								<span className="font-light">
									Using
								</span>

								{ platforms.map(platform => (
									<span key={ platform }>
										{ platform } &middot;{/* unless forloop.last  &middot; endunless */}
									</span>
								)) }
							</div>
						</div>
					</figcaption>
				</figure>




				{/*
				<!--Mobile-->
		    <div class="project-title-mobile d-block d-md-none font-ultra-light text-rosybrown" aria-hidden="true">
		      <h3 class="text-huge text-uppercase mb-0">
		        <span class="text-rosybrown">
		          {{ project.name_for_thumbnail }}
		        </span>
		      </h3>
		      
		      <div class="project-details">
		        <!--{% comment %}
		        <div class="project-type">
		          {{ project.type }}
		        </div>
		        {% endcomment %}-->

		        <div class="project-roles">
		          {% for item in project.roles %}
		            {{ item }}{% unless forloop.last %} &middot;{% endunless %}
		          {% endfor %}
		        </div>
		      </div>
		    </div>
		    */}




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