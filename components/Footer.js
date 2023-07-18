// Imports
import Link from "next/link";
import Image from "next/image";
// Must be a better way to import all this below I guess // To look up
import IconLinkedIn from "../components/icons/IconLinkedIn.js";
import IconBehance from "../components/icons/IconBehance.js";
import IconAngel from "../components/icons/IconAngel.js";
import IconGithub from "../components/icons/IconGithub.js";
import IconDribbble from "../components/icons/IconDribbble.js";
import IconPinterest from "../components/icons/IconPinterest.js";
import IconInstagram from "../components/icons/IconInstagram.js";
import IconFacebook from "../components/icons/IconFacebook.js";

// Footer (Sitewide) Component
export default function Footer() {
  // Full Date Formatted As Per: "https://www.reactshark.com/blog/guide-react-date-format"
  //let today = new Date()
  //let date = today.getDate() + '-' + parseInt(today.getMonth() + 1) + '-' + today.getFullYear()
  //console.log(date)

  // Getting Just "Year" Of Current Date (Just Modifying The Above Example)
  let currentDate = new Date()
  //let currentFullDate = currentDate.getDate() + "." + parseInt(currentDate.getMonth() + 1) + "." + currentDate.getFullYear()

  //let currentDay = currentDate.getDate()
  //let currentMonth = parseInt(currentDate.getMonth() + 1)
  let currentYear = currentDate.getFullYear()

	return (

		<footer>
      {/* Desktop | Screen Readers */}
      <div className="container d-none d-md-flex justify-content-center align-items-md-center text-center">{/*<Link className="..." href="https://simoncallelaverde.github.io/contact_me" target="_blank" rel="noreferrer">*/}{/*link-page-load*/}{/*href="javascript:delay('/hire_a_project')"*/}{/*title="I'll kindly temporarily redirect you to my Portfolio 2021, while I finish my new 'Get In Touch' page 2023."*/}
        <div className="row">
          <div className="col-md-12">
            <h2 className="headline-huge mb-0">{/*text-uppercase*/}
              {/*Let&apos;s create
              <br/>something
              <br/>special*/}

              {/*Drop me a line*/}

              Get in touch
            </h2>

            <p className="font-ultra-light">
              {/*If you want to work
              <br/>with me, let&apos;s talk.*/}

              {/*Drop me a line*/}

              Let&apos;s work together,
              <br/>let&apos;s talk!
            </p>
          </div>
        </div>
      </div>{/*</Link>*/}

      {/* Mobile */}
      <div className="container d-flex d-md-none justify-content-center align-items-start text-center" aria-hidden="true">
        <div className="row mt-5 pt-2">
          <div className="col-12">
            <h2 className="headline-huge mb-0">{/*text-uppercase*/}
              Get in touch
            </h2>

            <p className="font-ultra-light">
              Let&apos;s work together,
              <br/>let&apos;s talk!
            </p>
          </div>
        </div>
      </div>

      <aside className="footer-aside-info-elements text-turquoise">
        {/* Desktop | Screen Readers */}
        <div className="footer-email-or-call d-none d-md-block">
          {/*Or just email me or call me*/}
          {/*Email me or call me*/}
          {/*Just email me or call me*/}
          Please call, WhatsApp, or email me at:
          <span className="font-ultra-light">
            <br/>+(57) 310 558 2638{/*{{ site.phone_number }}*/}
            <br/><Link className="link-underline" href="mailto:simoncallelaverde@gmail.com">simoncallelaverde@gmail.com</Link>{/*{{ site.email }}*/}
          </span>
        </div>

        {/* Desktop | Mobile | Screen Readers */}
        <div className="footer-availability">
          Available for
          <span className="font-ultra-light">
            <br/>Contract {/*projects*/}work {/*or*/}and/or
            <br/>Full-time work
          </span>
        </div>

        {/* Desktop | Mobile | Screen Readers */}
        <div className="footer-office">
          Office
          <span className="font-ultra-light">
            <br/>Calle 10 # 2 Este - 40,
            <br/>Tr 8 Apt 404, Chía,
            <br/>Cundinamarca,
            <br/>Colombia.

            {/*<br/>Calle 152a # 13 - 58,
            <br/>Tr 1 Apt 10-02, Las Acacias,
            <br/>Bogotá D.C,
            <br/>Colombia.*/}
          </span>
        </div>

        {/* Desktop | Mobile */}{/* Screen Readers Hidden */}
        <div className="footer-credits" aria-hidden="true">
          Relevant work
          <span className="font-ultra-light">
            {/*<br/>Visit also my older*/}
            <br/>Visit also my {/*archaic*/}previous
            <br/><Link className="link-underline" href="https://simoncallelaverde.github.io/" target="_blank" rel="noreferrer" title="As it happens with most movie sequels, my first portfolio was better">Portfolio 2021</Link>
          </span>
        </div>

        {/* WAS (FOR DELAYED PAGE TRANSITIONS, MUST LOOK AFTER TO DO SAME BUT WITH REACT (ONE PAGE APP)) */}
        {/*javascript:delay('/')*/}
        {/*javascript:delay('/about')*/}
        {/*javascript:delay('/projects')*/}
        {/*javascript:delay('/contact_me')*/}
        {/*javascript:delay('/hire_a_project')*/}
        {/* Desktop | Mobile */}{/* Screen Readers Hidden */}
        <nav className="footer-nav" aria-hidden="true">{/*navbar*/}
          Menu

          <ul className="footer-nav-ul">{/*navbar-nav*/}
            <li className="footer-nav-li">{/*nav-item*/}
              {/*{% if page.slug == 'home' %} active-link{% endif %}*/}
              <Link className="footer-nav-link link-underline" href="/">{/*nav-link*/}{/*link*/}{/*link-page-load*/}
                <span>
                  Welcome
                </span>
              </Link>
            </li>

            <li className="footer-nav-li">{/*nav-item*/}
              {/*{% if page.slug == 'projects' %} active-link{% endif %}*/}
              <Link className="footer-nav-link link-underline" href="https://simoncallelaverde.github.io/about" target="_blank" rel="noreferrer" title="Sorry to take you temporarily to my Portfolio 2021, while I finish my new My Story page 2023.">{/*href="/projects"*/}{/*nav-link*/}{/*link*/}{/*link-page-load*/}{/*Like with every movie sequel, my first Portfolio 2021 was way better! See 30 more Front-end Development projects there.*/}
                <span>
                  {/*Relevant work*/}
                  {/*Other work*/}
                  {/*More work*/}
                  {/*Development work*/}
                  About me (2021)
                </span>
              </Link>
            </li>

            <li className="footer-nav-li">{/*nav-item*/}
              {/*{% if page.slug == 'contact_me' %} active-link{% endif %} // if page.type_slug == 'feedback'*/}
              <Link className="footer-nav-link link-underline" href="#" data-bs-toggle="modal" data-bs-target="#modalCertificate">{/*href="/get_in_touch"*/}{/*nav-link*/}{/*link*/}{/*link-page-load*/}
                <span>
                  {/*Drop me a line*/}
                  {/*Get in touch*/}
                  UX & UI certificate
                </span>
              </Link>
            </li>

            <li className="footer-nav-li">{/*nav-item*/}
              {/*{% if page.slug == 'about' %} active-link{% endif %}*/}
              <Link className="footer-nav-link link-underline" href="#" data-bs-toggle="modal" data-bs-target="#modalResume">{/*nav-link*/}{/*link*/}{/*link-page-load*/}
                <span>
                  Resume
                </span>
              </Link>
            </li>
          </ul>
        </nav>

        {/* Desktop | Mobile | Screen Readers */}
        <div className="footer-social-media-business">
          <span className="">{/*font-ultra-light*/}
            Business Social Media
          </span>

          <div className="mt-1">
            <Link className="me-3" href="https://www.linkedin.com/in/simoncallelaverde" target="_blank" rel="noreferrer">{/*link*/}
              <span className="icon-linkedin">
                {/*{% include icon_linkedin.xml %}*/}
                <IconLinkedIn/>
              </span>
            </Link>
            <Link className="me-3" href="https://www.behance.net/simoncallelaverde" target="_blank" rel="noreferrer">{/*link*/}
              <span className="icon-behance">
                {/*{% include icon_behance.xml %}*/}
                <IconBehance/>
              </span>
            </Link>
            <Link className="me-3" href="https://angel.co/u/simoncallelaverde" target="_blank" rel="noreferrer">{/*link*/}
              <span className="icon-angel">
                {/*{% include icon_angel.xml %}*/}
                <IconAngel/>
              </span>
            </Link>
            <Link className="" href="https://github.com/SimonCalleLaverde" target="_blank" rel="noreferrer">{/*link*/}
              <span className="icon-github">
                {/*{% include icon_github.xml %}*/}
                <IconGithub/>
              </span>
            </Link>
          </div>
        </div>

        {/* Desktop | Mobile | Screen Readers */}
        <div className="footer-social-media-personal">
          <span className="">{/*font-ultra-light*/}
            Personal Social Media
          </span>

          <div className="mt-1">
            <Link className="" href="https://dribbble.com/simoncallelaverde" target="_blank" rel="noreferrer">{/*link*/}
              <span className="icon-dribbble">
                {/*{% include icon_dribbble.xml %}*/}
                <IconDribbble/>
              </span>
            </Link>
            <Link className="ms-3" href="https://co.pinterest.com/simoncallelaverde" target="_blank" rel="noreferrer">{/*link*/}
              <span className="icon-pinterest">
                {/*{% include icon_pinterest.xml %}*/}
                <IconPinterest/>
              </span>
            </Link>
            <Link className="ms-3" href="https://www.instagram.com/simons_pic_tures/" target="_blank" rel="noreferrer">{/*link*/}
              <span className="icon-instagram">
                {/*{% include icon_instagram.xml %}*/}
                <IconInstagram/>
              </span>
            </Link>
            <Link className="ms-3" href="https://www.facebook.com/simoncio/" target="_blank" rel="noreferrer">{/*link*/}
              <span className="icon-facebook">
                {/*{% include icon_facebook.xml %}*/}
                <IconFacebook/>
              </span>
            </Link>
          </div>
        </div>

        {/* Desktop | Screen Readers */}
        <div className="footer-copyright font-ultra-light d-none d-md-block">
          © {/*2023*/}{ currentYear } Simón Calle Laverde
          <br/>All rights reserved
        </div>

        {/* Mobile */}
        <div className="footer-copyright font-light d-block d-md-none" aria-hidden="true">
          Copyright © {/*2023*/}{ currentYear }
          <br/>Simón Calle Laverde
        </div>

        {/* Desktop | Screen Readers */}
        <div className="footer-created-by d-none d-md-block">
          Designed & developed by
          <br/><Link className="link-underline font-ultra-light" href="/">Simón Calle Laverde</Link>{/*{{ site.client_name }}*/}
          {/*href="https://simoncallelaverde.github.io/" target="_blank" rel="noreferrer"*/}
        </div>

        {/* Mobile */}
        <div className="footer-created-by d-block d-md-none" aria-hidden="true">
          Designed & developed
          <br/><Link className="link-underline font-ultra-light" href="/">by Simón Calle Laverde</Link>{/*{{ site.client_name }}*/}
        </div>
      </aside>
		</footer>

	)
};