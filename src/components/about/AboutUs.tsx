import arrow from "../../assets/icon/Vector.svg";
import tractor from "../../assets/icon/tractor.svg";
import background1 from "../../assets/aboutImages/aboutHeroImg.png";
import company from "../../assets/icon/company.svg";

const AboutUs = () => {
  return (
    <>
      <div className="container mx-auto max-w-[1440px]">
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
    </>
  );
};

export default AboutUs;
