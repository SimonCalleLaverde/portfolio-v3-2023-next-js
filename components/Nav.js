// Imports
import Link from "next/link";

// Nav (Sitewide) Component
export default function Nav() {
	return (
		<nav>
			<ul>
				<li>
					<Link href={"/"}>
						Home
					</Link>
				</li>

				<li>
					<Link href={"/about"}>
						About
					</Link>
				</li>

				<li>
					<Link href={"/projects"}>
						All Projects
					</Link>
				</li>
			</ul>
		</nav>
	)
}