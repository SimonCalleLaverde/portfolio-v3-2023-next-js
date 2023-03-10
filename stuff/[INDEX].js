// - - - - - - - N E X T   J S   B L O G   G R A P H C M S   (D E V   E D   E X A M P L E)   "pages/index.js" - - - - - - - //

// THIS IS MY "NextJS Blog GraphCMS" EXAMPLE, RENDERING THE POSTS ON THE HOMEPAGE (AT "pages/index.js")

// Imports
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { GraphQLClient, gql } from "graphql-request";
import BlogCard from "../components/BlogCard";

// THIS PART BELOW IS BEING USED TO FETCH USING GRAPHCMS

// API Access Endpoint Token (Found at: "GraphCMS > Project > Project Settings > API Access > Content API")
const accessEndpoint = "https://api-us-east-1.graphcms.com/v2/cl495aqwz0vh801w8cxos12a7/master";
const graphCMSRequestAPI = new GraphQLClient(accessEndpoint);

// Querying With GraphQL
const graphCMSQuery = gql`
  {
    posts {

      id
      coverPhoto {
        id
        url
      }
      title
      content {
        html
      }
      author {
        name
        avatar {
          url
        }
      }
      datePublished
      slug

    }
  }
`;

// GET STATIC PROPS
// Making The API Call/Request (Using "getStaticProps" Function)
export async function getStaticProps() {
  const { posts } = await graphCMSRequestAPI.request(graphCMSQuery);

  return {
    props: {
      allPosts: posts//,
    }//,
    //revalidate: 10,
  }
};

// Home (Page) Component
// Passing "allPosts" As Props // Passing Down Data In "BlogCard"
export default function HomePage({ allPosts }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>NextJS Blog GraphCMS</title>
        <meta name="description" content="NextJS Blog with GraphCMS example."/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>

      {/* Mapping through "allPosts" and displaying each "post", in a "BlogCard" component */}
      <main className={styles.main}>
        {allPosts.map(post => (
          <BlogCard
            key={post.id}
            coverPhoto={post.coverPhoto}
            title={post.title}
            content={post.content}
            author={post.author}
            datePublished={post.datePublished}
            slug={post.slug}
          />
        ))}
      </main>
    </div>
  )
};