import Head from "next/head";

import Layout from "../../components/Layout";
import Navbar from "../../components/Navbar";
import Article from "../../components/Article";
import Footer from "../../components/Footer";

const Post = ({ article }) => {
  const image =
    article.content.match(/(https:([^"]*))/g)?.[0] ||
    "https://www.notion.so/cdn-cgi/image/w=3840,q=100/https://images.ctfassets.net/spoqsaf9291f/XAbe0SpXMxVil9n1umFGG/fbebf64741fcdb9aa96f00e575bb9eb4/japan-launch-thumb__1_.png";

  return (
    <>
      <Head>
        <title>{article.title} - Guilherme S. Sousa</title>
        <meta property="og:image" content={image}></meta>
        <meta
          name="description"
          content={article.content
            .replace(/<[^>]*>/g, "")
            .split(" ", 22)
            .join(" ")}
        ></meta>

        <meta property="og:locale" content="pt_BR"></meta>
        <meta property="og:type" content="article"></meta>
        <meta
          property="og:title"
          content={`${article.title} - Mais Esports`}
        ></meta>
        <meta
          property="og:description"
          content={article.content
            .replace(/<[^>]*>/g, "")
            .split(" ", 22)
            .join(" ")}
        ></meta>
        <meta property="og:site_name" content="Guilherme S. Sousa"></meta>
        <meta
          property="article:author"
          content={article.author.displayName}
        ></meta>
        <meta
          property="article:published_time"
          content={article.published}
        ></meta>
        <meta property="og:image" content={image}></meta>
        <meta property="og:image:secure_url" content={image}></meta>
        <meta property="og:image:type" content="image/jpeg"></meta>
        <meta name="twitter:card" content="summary_large_image"></meta>
        <meta
          name="twitter:title"
          content={`${article.title} - Guilherme S. Sousa`}
        ></meta>
        <meta name="twitter:site" content="@krteazy"></meta>
        <meta name="twitter:creator" content="@krteazy"></meta>
        <meta name="twitter:image" content={image}></meta>
      </Head>
      <Navbar />
      <Layout>
        <Article article={article} />
        <Footer />
      </Layout>
    </>
  );
};

export default Post;

export async function getServerSideProps(context) {
  const post = context.params.id;

  const response = await fetch(
    `https://www.googleapis.com/blogger/v3/blogs/${process.env.BLOGGER_ID}/posts/${post}?key=${process.env.BLOGGER_API_KEY}`
  );

  const data = await response.json();

  return {
    props: {
      article: data,
    },
  };
}
