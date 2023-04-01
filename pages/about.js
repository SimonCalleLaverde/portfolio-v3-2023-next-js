// Imports
import Link from "next/link";
import Image from "next/image";
import HeadConfig from "../components/HeadConfig.js";
import AboutHeader from "../components/about/AboutHeader.js";

// About (Page) Component
export default function AboutPage() {
	return (
		<>

			<HeadConfig/>

      <AboutHeader/>

      <main>
        <div className="container">
					<h1>About (Page) Component</h1>
        </div>
      </main>

      {/*<Footer/>*/}

		</>
	)
};