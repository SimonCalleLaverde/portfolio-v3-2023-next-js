// Imports
import Head from "next/head";

// Head Config (Sitewide) Component
export default function HeadConfig({ title }) {
  return (

    <Head>
      {/* To Later Revise <Head/> As I Was Doing In My "portfolio-V3-2022-next-js" In GitHub */}
      {/* To Revise Styles And Add To Document Instead, As Per Warning/Docs */}
      {/* To add meta-tags, etc. <Head/> builds lots of stuff already like "<meta charset='utf-8'>", "<meta name='viewport' content='width=device-width'>", some "<script></script>", "<noscript></noscript>", "<style></style>", and so. So to be careful for not repeated stuff */}

      <title>Simón Calle Laverde - Portfolio V3 2023 NextJS</title>{/*{ title }*/}
      <meta name="description" content="For modern web design and web development check out my custom hand-crafted Portfolio 2023 made in NextJS + HygraphCMS"/>
      <meta name="keywords" content="web design, web development, modern web design, custom web development, fine web design, web design colombia, web design bogota, modern web design colombia, modern web design bogota, modern web design latam, modern web design latin america, web design nextjs, web development nextjs, nextjs bogota, nextjs colombia, ux ui bogota, ux ui colombia, product design bogota, product design colombia, product design latin america"/>{/*NEW 2024*/}
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