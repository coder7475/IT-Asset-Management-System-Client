const AboutUs = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-semibold text-gray-900">
            About Us
          </h1>
          <p className="mb-8 leading-relaxed">
          Welcome to AssetIT, the pioneering force in delivering comprehensive IT Asset Management solutions tailored for the modern digital landscape. As a company founded on the principles of innovation, efficiency, and reliability, we are committed to transforming the way organizations manage their IT assets.
          </p>
         <p>
        
         </p>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            // className="object-cover object-center rounded"
            alt="hero"
            src="https://i.ibb.co/Jm8L71B/aboutUS.jpg"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
