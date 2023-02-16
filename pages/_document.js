// Overriding The Default "Document"

// Imports
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      {/*The <Head/> component used here should only be
      used for any <head> code that is common for all pages.
      For all other cases, such as <title> tags, we recommend
      using next/head in your pages or components.*/}

      {/*<Head/>*/}
      <Head>
        {/* TERMINAL's WARNING/STEPS-FOLLOWED */}
        {/* Do not add stylesheets using next/head (see <link rel="stylesheet"> tag with href="https://db.onlinewebfonts.com/c/4c4c08af466e9ad071b6d69cf44093df?family=Saol+Display+Regular"). Use Document instead. 
        See more info here: https://nextjs.org/docs/messages/no-stylesheets-in-head-component */}

        <link href="https://db.onlinewebfonts.com/c/4c4c08af466e9ad071b6d69cf44093df?family=Saol+Display+Regular" rel="stylesheet" type="text/css"/>
      </Head>

      <body className="">
        <Main/>
        <NextScript/>
      </body>
    </Html>
  )
}