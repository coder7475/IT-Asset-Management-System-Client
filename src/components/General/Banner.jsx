import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { NavLink } from 'react-router-dom';
import Button from "@mui/material/Button";


const Banner = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay ,Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="flex h-[600px] justify-center items-center flex-col">
            <div className="w-full h-full bg-[url('https://i.ibb.co/nPxZCKS/join-Employee.jpg')] bg-cover bg-center">
              <div className="w-full h-full flex  justify-center items-center backdrop-brightness-50 flex-col gap-4 text-white text-xl">
                <h1 className="font-bold"> Unlock Your Potential</h1>
                <p className="w-1/2 font-light text-lg">
                Join Your Comapany Team. Embrace Innovation, Drive Efficiency, and Thrive in a Dynamic Work Environment. 
                </p>
                <NavLink to="/joinEmployee">
                  <Button variant="contained">Join As an Employee</Button>
                </NavLink>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="flex h-[600px] justify-center items-center flex-col">
            <div className="w-full h-full bg-[url('https://i.ibb.co/B61LKzM/join-As-Admin.jpg')] bg-cover bg-center">
              <div className="w-full h-full flex  justify-center items-center backdrop-brightness-50 flex-col gap-4 text-white text-xl">
                <h1 className="font-bold"> Elevate Your Administration Skills</h1>
                <p className="w-2/3 font-light text-lg">
                Elevate Your Administration Skills: Join Us to Spearhead Company Creation and Management with Our Cutting-Edge Service! Empower Businesses to Thrive Your Expertise, Our Platform. Be the Architect of Success! Join Our Team and Shape the Future of Company Creation and Management Services. 
                </p>
                <NavLink to="/joinAdmin">
                  <Button variant="contained">Join As an HR/Admin</Button>
                </NavLink>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Banner;
