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



      {/* Should I Create A New "Keywords" Field-Type For 'Per-Project' Page, Just For Keywords? */}
      {/* To Avoid The "·" Divisions From "type" & "roles2" */}
      {/* I Added Some 'Hard-Coded' Keywords At The End Replacing For "type" & "roles2" (For Now) */}
      <meta name="keywords" content={ `${ title }, ${ title } Project, ${ title } Case Study, ${ category }, Web Design, Web Development, Product Design, UX Design, UI Design` }/>{/*${ type }, ${ roles2 }*/}{/*NEW 2025*/}



      {/* TERMINAL's WARNING/STEPS-FOLLOWED */}
      {/* No Stylesheets/Fonts Should Go Here. Use Document Instead. */}
    </Head>

  )
};