import "./../../app.css";
import Button from "@mui/material/Button";
import { NavLink } from "react-router-dom";
const Hero = () => {
  return (
    <section className="hero md:min-h-screen relative">
      <div className="hero-bg md:absolute top-10 xl:top-20 left-20  w-full md:block  md:w-[50%] lg:w-[40%] rounded p-5 space-y-3">
        <h1 className="md:text-3xl font-bold">AssetIT</h1>
        <h2 className="text-xl md:text-xl font-medium">
          Powerful and Intuitive IT Asset Management Software
        </h2>
        <p className="para md:text-lg">
          Maintain, track, and manage a single source of truth for your IT asset
          landscape. Always be audit-ready with easy-to-use IT asset management
          software.
        </p>
        <NavLink to="/joinAdmin">
          <Button variant="contained">Dive In</Button>
        </NavLink>
      </div>
    </section>
  );
};

export default Hero;
