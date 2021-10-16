import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import Home from "../components/Home";
import Sidebar from "../components/Sidebar";
import Main from "../components/Main";
import Footer from "../components/Footer";

const App = (props) => {
  return (
    <>
      <Navbar />
      <Layout>
        <Home>
          <Sidebar />
          <Main news={props.news} />
        </Home>
        <Footer />
      </Layout>
    </>
  );
};

export default App;

export async function getServerSideProps(context) {
  const response = await fetch(
    `https://www.googleapis.com/blogger/v3/blogs/${process.env.BLOGGER_ID}/posts?key=${process.env.BLOGGER_API_KEY}`
  );

  const data = await response.json();

  return {
    props: {
      name: "John Doe",
      news: [...data?.items] || [],
    },
  };
}
