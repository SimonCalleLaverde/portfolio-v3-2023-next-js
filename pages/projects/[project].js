// TO BASE IN "pages/blog/[slug].js"

// Imports
import Link from "next/link";
import Image from "next/image";
import HeadComponent from "../../components/HeadComponent.js";
import Header from "../../components/project/Header.js";
import Footer from "../../components/Footer.js";

// Project (Page) Component
export default function ProjectPage() {
	return (
		<>
			<HeadComponent/>

      <Header/>

      <main>
        <div className="container">
					<h1>Project (Page) Component</h1>
        </div>
      </main>

      <Footer/>
		</>
	)
};