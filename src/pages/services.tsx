import img from "../assets/servisesImages/Banner.png";
import nuts from "../assets/servisesImages/nuts.png";
import buttol from "../assets/icon/buttol.svg";
import arrow from "../assets/icon/Vector.svg";
import background from "../assets/servisesImages/Background.png";
import { NavLink } from "react-router-dom";

const Services = () => {
  return (
    <>
      <div className="container mx-auto max-w-[1440px] mb-32">
        <div className="relative mb-32">
          <img src={img} alt="" />
          <div className="absolute top-[38%] left-[42%]">
            <h3 className="text-[50px] text-[#274c5b] font-extrabold">
              Services
            </h3>
          </div>
        </div>
        <div className="container mx-auto max-w-[1050px]">
          <div className="flex flex-col items-center">
            <div className="flex flex-col text-center gap-3">
              <h3 className="font-[YellowTail] text-2xl text-[#7EB693]">
                What we Grow
              </h3>
              <p className="font-bold text-4xl w-[402px] text-[#274C5B]">
                Better Agriculture for Better Future
              </p>
            </div>

            <div className="flex items-center">
              <div className="flex flex-col gap-2">
                <div className="flex flex-col items-end">
                  <img src={buttol} alt="" />
                  <h3 className="text-[#274c5b] text-lg font-medium">
                    Dairy Products
                  </h3>
                  <p className="text-[#525c60] text-sm w-[300px]">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptat
                    accusantium doloremqlaudantium. Sed ut perspiciatis
                  </p>
                </div>
                <div className="flex flex-col items-end">
                  <img src={buttol} alt="" />
                  <h3 className="text-[#274c5b] text-lg font-medium">
                    Dairy Products
                  </h3>
                  <p className="text-[#525c60] text-sm w-[300px]">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptat
                    accusantium doloremqlaudantium. Sed ut perspiciatis
                  </p>
                </div>
                <div className="flex flex-col items-end">
                  <img src={buttol} alt="" />
                  <h3 className="text-[#274c5b] text-lg font-medium">
                    Dairy Products
                  </h3>
                  <p className="text-[#525c60] text-sm w-[300px]">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptat
                    accusantium doloremqlaudantium. Sed ut perspiciatis
                  </p>
                </div>
              </div>
              <div className="w-[480px]">
                <img
                  className="drop-shadow-4xl"
                  src={nuts}
                  alt=""
                  width={600}
                />
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex flex-col items-end">
                  <img src={buttol} alt="" />
                  <h3 className="text-[#274c5b] text-lg font-medium">
                    Dairy Products
                  </h3>
                  <p className="text-[#525c60] text-sm w-[300px]">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptat
                    accusantium doloremqlaudantium. Sed ut perspiciatis
                  </p>
                </div>
                <div className="flex flex-col items-end">
                  <img src={buttol} alt="" />
                  <h3 className="text-[#274c5b] text-lg font-medium">
                    Dairy Products
                  </h3>
                  <p className="text-[#525c60] text-sm w-[300px]">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptat
                    accusantium doloremqlaudantium. Sed ut perspiciatis
                  </p>
                </div>
                <div className="flex flex-col items-end">
                  <img src={buttol} alt="" />
                  <h3 className="text-[#274c5b] text-lg font-medium">
                    Dairy Products
                  </h3>
                  <p className="text-[#525c60] text-sm w-[300px]">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptat
                    accusantium doloremqlaudantium. Sed ut perspiciatis
                  </p>
                </div>
              </div>
            </div>
            <NavLink to="/explore">
              <button className="flex items-center gap-2 text-sm font-bold text-[#274c5b] duration-200 hover:bg-[#EFD372] hover:border-2 hover:border-transparent border-2 border-[#274c5b] rounded-2xl px-[28px] py-[18px]">
                Explore More
                <div className="bg-[#335B6B] inline-block rounded-full p-1">
                  <img src={arrow} alt="" />
                </div>
              </button>
            </NavLink>
          </div>
        </div>
        <div className="mt-32">
          <div className="relative">
            <img src={background} alt="" />
            <div className="absolute top-32 left-[440px] flex flex-col items-center gap-3 text-center">
              <h4 className="font-[YellowTail] text-2xl text-[#7EB693]">
                Organic Only
              </h4>
              <h6 className="text-3xl text-[#274c5b] font-extrabold">
                Everyday Fresh & Clean
              </h6>
              <p className="text-[#525c60] text-sm text-center w-[485px]">
                Simply dummy text of the printing and typesetting industry.
                Lorem had ceased to been the industry's standard dummy text ever
                since the{" "}
              </p>
              <div className="w-16 h-16 rounded-full bg-[#7EB693] flex items-center justify-center drop-shadow-2xl">
                <span
                  className="w-0 h-0 
  border-t-[10px] border-t-transparent
  border-l-[16px] border-l-white
  border-b-[10px] border-b-transparent"
                ></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
