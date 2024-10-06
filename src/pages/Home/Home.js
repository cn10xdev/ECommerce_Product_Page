/* Styles */
import Footer from "../../components/Footer/Footer";
import Hero from "../../components/Hero/Hero";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className="pt-[4.75rem] lg:pt-[5.25rem] h-screen overflow-y-auto overflow-x-hidden no-scrollbar bg-n-8">
      <Hero />
      <Footer />
    </div>
  );
};

export default Home;
