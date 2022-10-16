import Head from "next/head";
import Banner from "../components/Banner";
import Header from "../components/Header";

const Home = () => {
  return (
    <div className="bg-gray-100 ">
      <Head>
        <title>Amazon</title>
      </Head>
      <Header />
      <main className="max-w-screen-2xl mx-auto">
        {/* < Banner > */}
        <Banner />
        {/* ProductFeed */}
      </main>
    </div>
  );
};

export default Home;
