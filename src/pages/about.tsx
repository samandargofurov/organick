import aboutBanner from "../assets/aboutImages/aboutBanner.png";
import WhyChooseUs from "../components/about/WhyChooseUs";
import AboutTeam from "../components/about/AboutTeam";
import spicy from "../assets/aboutImages/spicy.png";
import nutsFeeds from "../assets/aboutImages/NutsFeesd.png";
import fruits from "../assets/aboutImages/fruits.png";
import vegetable from "../assets/aboutImages/vegetable.png";
import AboutUs from "../components/about/aboutUs";

const About = () => {
  return (
    <>
      <div className="container mx-auto max-w-[1440px]">
        {/* banner */}
        <div className="relative mb-32">
          <img src={aboutBanner} alt="" />
          <div className="absolute top-[40%] left-[42%]">
            <h3 className="text-[50px] text-[#274c5b] font-extrabold">
              About Us
            </h3>
          </div>
        </div>

        {/* about us */}
        <AboutUs />
      </div>

      {/* why choose us? */}
      <WhyChooseUs />

      {/* team */}
      <AboutTeam />

      {/* about Us */}
      <div className="bg-[#274C5B]">
        <div className="container mx-auto max-w-[1050px]">
          <div className="py-32 mb-32">
            <div className="flex flex-col items-center gap-1">
              <h3 className="font-[YellowTail] text-[#7EB693] text-2xl">
                About Us
              </h3>
              <p className="font-bold text-4xl text-white">
                What We Offer For You
              </p>
            </div>
            <div className="flex items-center gap-5 mt-8">
              <div className="flex flex-col items-center gap-1">
                <img src={spicy} alt="" className="w-[300px] bg-white rounded-3xl" />
                <span className="font-bold text-lg mt-2 text-white">Spicy</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <img src={nutsFeeds} alt="" className="w-[300px] bg-white rounded-3xl" />
                <span className="font-bold text-lg mt-2 text-white">Nuts & Feeds</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <img src={fruits} alt="" className="w-[300px] bg-white rounded-3xl" />
                <span className="font-bold text-lg mt-2 text-white">Fruits</span>
              </div>
              <div className="flex flex-col items-center gap-1">
                <img src={vegetable} alt="" className="w-[300px] bg-white rounded-3xl" />
                <span className="font-bold text-lg mt-2 text-white">Vegetable</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
