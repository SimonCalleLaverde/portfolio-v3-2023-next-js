// Imports
import Link from "next/link";
import Image from "next/image";
import HeadConfig from "../components/HeadConfig.js";
import Header from "../components/about/Header.js";
import Footer from "../components/Footer.js";

// About (Page) Component
export default function AboutPage() {
	return (
		<>
			<HeadConfig/>

      <Header/>

      <main>
        <div className="container">
					<h1>About (Page) Component</h1>
        </div>
      </main>

      <Footer/>
		</>
	)
};