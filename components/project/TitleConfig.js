// Bringing "Per-Page" Title

// Imports
import Head from "next/head";

// Head Config (Sitewide) Component
export default function HeadConfig({ title, type, category, client, roles2 }) {
  return (

    <Head>
      {/* To Later Revise <Head/> As I Was Doing In My "portfolio-V3-2022-next-js" In GitHub */}
      {/* To add meta-tags, etc. <Head/> builds lots of stuff already like "<meta charset='utf-8'>", "<meta name='viewport' content='width=device-width'>", some "<script></script>", "<noscript></noscript>", "<style></style>", and so. So to be careful for not repeated stuff */}

      {/*<title>Simón Calle Laverde - Portfolio V3 2023 NextJS</title>*/}{/*{ title }*/}
      <title>{ title } | Project Page (Per-Project) | Simón Calle Laverde | Portfolio 2025 | Web Design and Web Development | Digital Product Design | UX Design and UI Design | Chía, Cundinamarca, Colombia</title>
      <meta name="description" content={ `Simón Calle Laverde | ${ title } Project | Case Study | Type: ${ type } | Category: ${ category } | Roles: ${ roles2 } | Client: ${ client }` }/>{/*NEW 2025*/}



      <meta name="keywords" content="web design, web development, website design, website development, modern web design, custom web design, web design colombia, web design bogota, web design latam, web design latin america, web design figma, web development nextjs, nextjs bogota, nextjs colombia, product design, product design bogota, product design colombia, product design latam, product design latin america, ux design, ux design bogota, ux design colombia, ui design, ui design bogota, ui design colombia"/>{/*NEW 2025*/}



      {/* TERMINAL's WARNING/STEPS-FOLLOWED */}
      {/* No Stylesheets/Fonts Should Go Here. Use Document Instead. */}
    </Head>

  )
};