// Imports
import Link from "next/link";
import Image from "next/image";
//import styles from "../../styles/ProjectCard.module.scss";
//import moment from "moment";

// Project (Card) Component
export default function ProjectCard({ title, slug, nameForThumbnail, client, thumbnailImage, headerImage, platforms, year, roles, webLaunchUrl, webImagesFirst, type, category, tags, content }) {
	return (
		<article className="project-card">{/*{ styles.article }*/}
			<Link href={`/projects/${slug}`}>
				{/*<Image src={ headerImage.url } alt={`${ title } Project's Header Image`} layout="fill"/>*/}{/* Must use "width" & "height" properties or "layout='fill'" property */}
				{/*<img src={ headerImage.url } alt={`${ title } Project's Header Image`} style={{width:"100%"}}/>*/}
				<img src={ thumbnailImage.url } alt={`${ title } Project's Thumbnail Image`} style={{width:"100%"}}/>
				{/*<Image src={ thumbnailImage.url } alt={`${ title } Project's Thumbnail Image`} width="200" height="120"/>*/}
			</Link>

			<h1>
				{/*{ title }*/}
				<div dangerouslySetInnerHTML={{ __html: nameForThumbnail }}></div>
			</h1>




			<h4>Year: {year}</h4>

			<h4>Type: {type}</h4>

			<h4>Category: {category}</h4>

			<h4 className="mb-0">Platforms: <span style={{color: "green"}}>{" "} (Multiple Values)</span></h4>
			<h5 style={{marginTop:"0px"}}>
				{platforms.map(platform => (
					<div key={platform}>
						{platform}
					</div>
				))}
			</h5>

			<h4 className="mb-0">Roles: <span style={{color: "green"}}>{" "} (Multiple Values)</span></h4>
			<h5 style={{marginTop:"0px"}}>
				{roles.map(role => (
					<div key={role}>
						{role}
					</div>
				))}
			</h5>




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