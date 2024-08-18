import aboutBanner from "../assets/aboutImages/aboutBanner.png";
import WhyChooseUs from "../components/about/WhyChooseUs";
import AboutTeam from "../components/about/AboutTeam";
import spicy from "../assets/aboutImages/spicy.png";
import nutsFeeds from "../assets/aboutImages/NutsFeesd.png";
import fruits from "../assets/aboutImages/fruits.png";
import vegetable from "../assets/aboutImages/vegetable.png";
import arrow from "../assets/icon/Vector.svg";
import tractor from "../assets/icon/tractor.svg";
import background1 from "../assets/aboutImages/aboutHeroImg.png";
import company from "../assets/icon/company.svg";

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
        <div className="flex mb-36">
          <div>
            <img src={background1} alt="" width={1300} />
          </div>
          <div className="container mx-auto max-w-[800px]">
            <div className="flex">
              <div className="mt-8 ml-8">
                <h3 className="font-[YellowTail] text-2xl text-[#7EB693] pb-3">
                  About Us
                </h3>
                <p className="font-extrabold text-3xl w-72 text-[#274c5b] pb-3">
                  We do Creative Things for Success
                </p>
                <p className="text-[#525C60] text-sm pb-7 leading-6">
                  Simply dummy text of the printing and typesetting industry.
                  Lorem had ceased <br /> to been the industry's standard dummy
                  text ever since the 1500s, when an <br /> unknown printer took
                  a galley. <br /> <br /> Simply dummy text of the printing and
                  typesetting industry. Lorem had ceased <br /> to been the
                  industry's standard dummy text ever since the 1500s, when an{" "}
                  <br /> unknown printer took a galley.
                </p>
                <div className="flex gap-2 items-center">
                  <div className="flex gap-3 items-center">
                    <div className="bg-white inline-block rounded-2xl">
                      <img src={tractor} alt="" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <span className="text-lg w-48 font-bold text-[#274C5B]">
                        Modern Agriculture Equipment
                      </span>
                    </div>
                  </div>

                  <div className="flex gap-2 items-center">
                    <div className="bg-white inline-block rounded-2xl">
                      <img src={company} alt="" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <span className="text-lg w-48 font-bold text-[#274C5B]">
                        Modern Agriculture Equipment
                      </span>
                    </div>
                  </div>
                </div>
                <button className="flex items-center gap-2 text-sm font-bold text-[#fff] bg-[#274C5B] transition-all duration-500 hover:bg-[#EFD372] hover:text-[#274c5b] rounded-2xl mt-11 pt-[20px] pl-[28px] pr-[28px] pb-[20px]">
                  Explore More
                  <div className="bg-[#335B6B] inline-block rounded-full p-1">
                    <img src={arrow} alt="" />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
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
