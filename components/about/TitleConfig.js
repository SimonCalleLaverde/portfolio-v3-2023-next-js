// Bringing "Per-Page" Title

// Imports
import Head from "next/head";

// Head Config (Sitewide) Component
export default function HeadConfig() {
  return (

    <Head>
      {/* To Later Revise <Head/> As I Was Doing In My "portfolio-V3-2022-next-js" In GitHub */}
      {/* To add meta-tags, etc. <Head/> builds lots of stuff already like "<meta charset='utf-8'>", "<meta name='viewport' content='width=device-width'>", some "<script></script>", "<noscript></noscript>", "<style></style>", and so. So to be careful for not repeated stuff */}

      {/*<title>Simón Calle Laverde - Portfolio V3 2023 NextJS</title>*/}{/*{ title }*/}
      <title>About Page | Simón Calle Laverde | Portfolio 2025 | Web Design and Web Development | Digital Product Design | UX Design and UI Design | Chía, Cundinamarca, Colombia</title>

      {/* TERMINAL's WARNING/STEPS-FOLLOWED */}
      {/* No Stylesheets/Fonts Should Go Here. Use Document Instead. */}
    </Head>

  )
};