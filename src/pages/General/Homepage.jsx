import GeneralNavbar from '../../components/General/GeneralNavbar';
import Banner from '../../components/General/Banner';
import AboutUs from '../../components/General/AboutUs';
import PackageSection from '../../components/General/PackageSection';

const Homepage = () => {
  return (
    <div>
        <GeneralNavbar/>
        <Banner/>
        <AboutUs/>
        <PackageSection/>
    </div>
  );
};

export default Homepage;