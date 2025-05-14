// Bringing "Per-Page" Title

// Imports
import Head from "next/head";

// Head Config (Sitewide) Component
export default function HeadConfig({ title, client, seoDescription, seoKeywords }) {
  return (

    <Head>
      {/* To Later Revise <Head/> As I Was Doing In My "portfolio-V3-2022-next-js" In GitHub */}
      {/* To add meta-tags, etc. <Head/> builds lots of stuff already like "<meta charset='utf-8'>", "<meta name='viewport' content='width=device-width'>", some "<script></script>", "<noscript></noscript>", "<style></style>", and so. So to be careful for not repeated stuff */}

      <title>{ `${ title } | Project Page | Simón Calle Laverde | Portfolio 2025 | Web Design and Web Development | Digital Product Design | UX Design and UI Design | Chía, Cundinamarca, Colombia | For Client: | ${ client }` }</title>{/*NEW 2025*/}
      <meta name="description" content={ seoDescription }/>{/*NEW 2025*/}
      <meta name="keywords" content={ seoKeywords }/>{/*NEW 2025*/}

      {/* TERMINAL's WARNING/STEPS-FOLLOWED */}
      {/* No Stylesheets/Fonts Should Go Here. Use Document Instead. */}
    </Head>

  )
};