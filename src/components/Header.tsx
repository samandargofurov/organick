import { NavLink } from "react-router-dom";
import logo from "../assets/icon/Logo.svg";
import search from "../assets/icon/search.svg";
import cart from "../assets/icon/Icon.svg";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Page");

  const options = [
    { label: "Our Team", path: "/ourTeam" },
    { label: "Services", path: "/services" },
    { label: "Password Protected", path: "/protectedPage" },
    { label: "Licenses", path: "/licenses" },
    { label: "Changelog", path: "/changelog" },
    { label: "Contact Us", path: "/contactUs" },
    { label: "Quality Standard", path: "/qualityStandard" },
  ];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <>
      <div className="bg-white sticky top-0 left-0 right-0 z-50 shadow-sm">
        <div className="container mx-auto max-w-[1350px]">
          <div className="header ml-14 mr-14 pt-6 pb-6 flex items-center justify-between">
            <NavLink to="/">
              <div className="logo flex items-center gap-2 cursor-pointer">
                <img
                  src={logo}
                  width={33}
                  height={50}
                  alt="organic logo icon"
                />
                <span className="font-bold text-3xl text-[#274C5B]">
                  Organick
                </span>
              </div>
            </NavLink>
            <div className="nav">
              <div className="flex items-center gap-5 font-[Roboto] font-medium text-[#274C5B]">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <div className="relative inline-block text-left">
                  <button
                    onClick={toggleDropdown}
                    className="inline-flex justify-between w-full px-4 py-2 font-medium text-[#274c5b] rounded-md focus:outline-none"
                  >
                    {selectedOption}
                    <div
                      className={`ml-2 mt-[5px] w-2.5 h-2.5 transform border-t-2 border-l-2 border-[#525c60] ${
                        isOpen ? "rotate-45" : "-rotate-[135deg]"
                      }`}
                    ></div>
                  </button>
                  {isOpen && (
                    <ul className="absolute left-0 w-36 mt-3 ml-4 bg-white border border-gray-200 rounded-lg shadow-lg focus:outline-none">
                      {options.map((option) => (
                        <li
                          key={option.label}
                          className="px-4 py-2 text-sm text-gray-700 cursor-pointer hover:bg-gray-100"
                        >
                          <NavLink
                            to={option.path}
                            onClick={() => handleOptionClick(option.label)}
                            className="w-full h-full block"
                          >
                            {option.label}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
                <NavLink to="/shop">Shop</NavLink>
                <NavLink to="/projects">Projects</NavLink>
                <NavLink to="/news">News</NavLink>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-64 h-12 rounded-3xl pl-5 flex items-center gap-3 bg-[#FAFAFA]">
                <input
                  type="text"
                  placeholder="Enter type"
                  className="outline-none bg-transparent"
                />
                <div className="bg-[#7EB693] flex items-center justify-center rounded-3xl p-2">
                  <img src={search} width={21} height={21} alt="search icon" />
                </div>
              </div>
              <div className="w-32 h-12 border rounded-3xl pl-2 flex items-center gap-3">
                <div className="bg-[#274C5B] flex items-center justify-center rounded-3xl p-2">
                  <img src={cart} width={21} height={21} alt="search icon" />
                </div>
                <span className="">Cart (1)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
