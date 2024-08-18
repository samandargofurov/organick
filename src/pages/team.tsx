import banner from "../assets/teamImages/banner.png";
import { NavLink } from "react-router-dom";
import teamData from "../assets/data.json";

const filterData = teamData.team;

const Team = () => {

  return (
    <>
      <div className="container mx-auto max-w-[1440px]">
        {/* banner */}
        <div className="relative mb-32">
          <img src={banner} alt="" />
          <div className="absolute top-[40%] left-[42%]">
            <h3 className="text-[50px] text-[#274c5b] font-extrabold">
              Our Team
            </h3>
          </div>
        </div>

        {/* team */}
        <div className="container mx-auto max-w-[1050px] mb-32">
          <div className="flex flex-col items-center justify-center">
            <h2 className="text-[#7EB693] text-3xl font-[YellowTail]">Team</h2>
            <p className="font-extrabold text-4xl text-[#274c5b] pb-2">
              Our Organic Experts
            </p>
            <p className="text-sm text-[#525C60] text-center w-[620px]">
              Simply dummy text of the printing and typesetting industry. Lorem
              had ceased to been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley.
            </p>
          </div>
          <div className="flex flex-wrap gap-5 justify-center mt-10">
            {filterData.map((el) => {
              return (
                <div key={el.id}>
                  <div
                    className="bg-[#F9F8F8] transition-all duration-500 hover:bg-white hover:shadow-2xl rounded-2xl w-[335px]"
                  >
                    <img
                      src={el.image}
                      alt="man"
                      className="rounded-t-3xl"
                      width={335}
                    />
                    <div className="flex items-end justify-between p-8">
                      <div className="flex flex-col gap-1">
                        <h1 className="font-bold text-[#274c5b] text-xl">
                          {el.name}
                        </h1>
                        <span className="text-[#7EB693] text-xl font-[YellowTail]">
                          {el.job}
                        </span>
                      </div>
                      <div className="flex gap-3">
                        {Object.entries(el.icons).map(([key, icon]) => (
                          <NavLink to="/">
                            <img
                              key={key}
                              src={icon}
                              alt={key}
                              width={18}
                              className="cursor-pointer"
                            />
                          </NavLink>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;
