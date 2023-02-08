// Imports
import Link from "next/link";
import Image from "next/image";
import HeadComponent from "../components/HeadComponent.js";
import Header from "../components/about/Header.js";
import Footer from "../components/Footer.js";

// About (Page) Component
export default function AboutPage() {
	return (
		<>
			<HeadComponent/>

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