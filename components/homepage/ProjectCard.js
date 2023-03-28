// Imports
import Link from "next/link";
import Image from "next/image";
//import styles from "../../styles/ProjectCard.module.scss";
//import moment from "moment";

// Project (Card) Component
export default function ProjectCard({ slug, thumbnailImage, title, nameForThumbnail, type, roles, year, category, platforms }) {
	return (
		<article className="project-card">{/*{ styles.article }*/}
			{/* CARD IMAGE [START] */}
			<Link href={ `/projects/${ slug }` }>
				{/*<Image src={ headerImage.url } alt={`${ title } Project's Header Image`} layout="fill"/>*/}{/* Must use "width" & "height" properties or "layout='fill'" property */}
				{/*<img src={ headerImage.url } alt={`${ title } Project's Header Image`} style={{ width:"100%" }}/>*/}
				<img src={ thumbnailImage.url } alt={ `${ title } Project's Thumbnail Image` } style={{ width:"100%" }}/>
				{/*<Image src={ thumbnailImage.url } alt={`${ title } Project's Thumbnail Image`} width="200" height="120"/>*/}
			</Link>
			{/* CARD IMAGE [END] */}

			{/* CARD BOTTOM [START] */}
			{/*{ title }*/}
			<h1 className="mt-4more" dangerouslySetInnerHTML={{ __html: nameForThumbnail }}>
			</h1>

			<h5 className="mt-4more">
				[Type] { type }
			</h5>

			<h5 className="mt-4more">
				[Roles <span style={{ color: "green" }}>{" "} (Map)</span>]
			</h5>
			{ roles.map(role => (
				<h5 key={ role }>
					{ role }
				</h5>
			)) }
			{/* CARD BOTTOM [END] */}

			{/* CARD SIDE [START] */}
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
			{/* CARD SIDE [END] */}




			{/* TEMPORARY // TO REVISE "moment.js" FOR DATES // USED IN MY "next-js-blog-graphcms" */}
			<time className="project-date">
				{/*<h3>{datePublished}</h3>*/}
				{/*<h3>{moment(datePublished).format("MMMM d, YYYY")}</h3>*/}
				{/*<h3>{moment(datePublished).format("MMMM Do, YYYY")}</h3>*/}
				{/*<h3>{moment(datePublished).format("MMMM D, YYYY")}</h3>*/}
			</time>




		</article>
	)
};