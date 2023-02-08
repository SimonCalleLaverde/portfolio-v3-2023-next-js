// Imports
import Link from "next/link";
import Image from "next/image";
import HeadComponent from "../components/HeadComponent.js";
import Header from "../components/contact/Header.js";
import Footer from "../components/Footer.js";

// Contact (Page) Component
export default function ContactPage() {
	return (
		<>
			<HeadComponent/>

      <Header/>

      <main>
        <div className="container">
					<h1>Contact (Page) Component</h1>
        </div>
      </main>

      <Footer/>
		</>
	)
};