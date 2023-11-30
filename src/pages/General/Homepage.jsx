import GeneralNavbar from "../../components/General/GeneralNavbar";
import Banner from "../../components/General/Banner";
import AboutUs from "../../components/General/AboutUs";
import PackageSection from "../../components/General/PackageSection";
import Footer from "../../components/General/Footer";
import { Helmet } from "react-helmet-async";

const Homepage = () => {
  return (
    <div>
      <Helmet>
        <title>AssetIT | Home</title>
      </Helmet>
      <GeneralNavbar />
      <Banner />
      <AboutUs />
      <PackageSection />
      <Footer />
    </div>
  );
};

export default Homepage;
