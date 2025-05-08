// Imports
import Head from "next/head";

// Head Config (Sitewide) Component
export default function HeadConfig({ title, type, category, client, roles2 }) {
  return (

    <Head>
      {/* To Later Revise <Head/> As I Was Doing In My "portfolio-V3-2022-next-js" In GitHub */}
      {/* To Revise Styles And Add To Document Instead, As Per Warning/Docs */}
      {/* To add meta-tags, etc. <Head/> builds lots of stuff already like "<meta charset='utf-8'>", "<meta name='viewport' content='width=device-width'>", some "<script></script>", "<noscript></noscript>", "<style></style>", and so. So to be careful for not repeated stuff */}

      <meta name="description" content="Simón Calle Laverde - Portfolio 2025 of Web Design, Web Development, Product Design, User Experience Design (UX), User Interface Design (UI) - Made in NextJS + Hygraph Studio CMS"/>{/*NEW 2025*/}
      <meta name="keywords" content="web design, web development, website design, website development, modern web design, custom web design, web design colombia, web design bogota, web design latam, web design latin america, web design figma, web development nextjs, nextjs bogota, nextjs colombia, product design, product design bogota, product design colombia, product design latam, product design latin america, ux design, ux design bogota, ux design colombia, ui design, ui design bogota, ui design colombia"/>{/*NEW 2025*/}
      <link rel="icon" href="/favicon.png"/>{/*favicon.ico*/}

      {/* TERMINAL's WARNING/STEPS-FOLLOWED */}
      {/* Do not add stylesheets using next/head (see <link rel="stylesheet"> tag with href="https://db.onlinewebfonts.com/c/4c4c08af466e9ad071b6d69cf44093df?family=Saol+Display+Regular"). Use Document instead. 
      See more info here: https://nextjs.org/docs/messages/no-stylesheets-in-head-component */}

      {/* Fonts */}
      {/*Option 2: "Old+Standard+TT"*/}
      {/*<link href="https://db.onlinewebfonts.com/c/4c4c08af466e9ad071b6d69cf44093df?family=Saol+Display+Regular" rel="stylesheet" type="text/css"/>*/}
    </Head>

  )
};