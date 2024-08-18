import arrow from "../../assets/icon/Vector.svg";
import { NavLink } from "react-router-dom";
import humanData from "../../assets/data.json";

const filterData = humanData.team.slice(0, 3);

const AboutTeam = () => {
  return (
    <>
      <div className="container mx-auto max-w-[1050px] mb-32">
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-[#7EB693] text-3xl font-[YellowTail]">Team</h2>
          <p className="font-extrabold text-4xl text-[#274c5b] pb-2">
            Our Organic Experts
          </p>
          <p className="text-sm text-[#525C60] text-center w-[620px]">
            Simply dummy text of the printing and typesetting industry. Lorem
            had ceased to been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-wrap gap-5 justify-center mt-11">
            {filterData.map((el) => {
              return (
                <div key={el.id}>
                  <div className="bg-[#F9F8F8] transition-all duration-500 hover:bg-white hover:shadow-2xl rounded-2xl w-[335px]">
                    <img
                      src={el.image}
                      alt=""
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
          <div>
            <NavLink to="/ourTeam">
              <button className="flex items-center gap-2 text-sm font-bold text-[#fff] bg-[#274C5B] transition-all duration-500 hover:bg-[#EFD372] hover:text-[#274c5b] rounded-2xl mt-11 pt-[20px] pl-[28px] pr-[28px] pb-[20px]">
                Our Team
                <div className="bg-[#335B6B] inline-block rounded-full p-1">
                  <img src={arrow} alt="" />
                </div>
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutTeam;
