import banner from "../assets/contactUsImages/Banner.png";
import heroBanner from "../assets/contactUsImages/banana.png";
import leaf from "../assets/contactUsImages/leaf.png";
import arrow from "../assets/icon/Vector.svg";
import location from "../assets/icon/Location.svg";
import massege from "../assets/icon/massege.svg";
import phone from "../assets/icon/phone.svg";
import insta from "../assets/icon/Insta.svg";
import fb from "../assets/icon/Fb.svg";
import x from "../assets/icon/Twiter.svg";
import pt from "../assets/icon/Pintrest.svg";

const ContactUs = () => {
  return (
    <>
      <div className="container mx-auto max-w-[1440px]">
        <div className="relative mb-32">
          <img src={banner} alt="" />
          <div className="absolute top-[40%] left-[42%]">
            <h3 className="text-[50px] text-[#274c5b] font-extrabold">
              Contact Us
            </h3>
          </div>
        </div>
        <div className="container mx-auto max-w-[1050px] mb-24">
          <div className="flex items-center gap-12">
            <div>
              <img
                src={heroBanner}
                alt=""
                className="rounded-2xl"
                width={800}
              />
            </div>
            <div>
              <h3 className="font-bold text-4xl text-[#274c5b] w-[560px] leading-none pb-4">
                We'd love to talk about how we can work together.
              </h3>
              <p className="text-sm text-[#525c60] w-[520px]">
                Simply dummy text of the printing and typesetting industry.
                Lorem had ceased to been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley.
              </p>
              <div className="mt-4 mb-8 flex flex-col gap-5">
                <div className="flex items-center gap-3 border-2 p-3 w-72 cursor-pointer rounded-2xl">
                  <div className="bg-[#F4F4F4] py-4 px-3 rounded-2xl">
                    <img src={massege} alt="" width={40} />
                  </div>
                  <div className="flex flex-col">
                    <h4 className="font-bold text-xl text-[#274c5b]">
                      Massege
                    </h4>
                    <p className="text-[#525c60] text-sm">
                      support@organic.com
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 border-2 p-3 w-72 rounded-2xl cursor-pointer">
                  <div className="bg-[#F4F4F4] py-3 px-3.5 rounded-2xl">
                    <img src={phone} alt="" width={36} />
                  </div>
                  <div className="flex flex-col">
                    <h4 className="font-bold text-xl text-[#274c5b]">
                      Contact Us
                    </h4>
                    <p className="text-[#525c60] text-sm">+01 123 456 789</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-[#EFF6F1] p-4 rounded-full transition-all duration-300 hover:bg-[#d8deda] cursor-pointer">
                  <img width={16} src={insta} alt="social-media icon" />
                </div>
                <div className="bg-[#EFF6F1] p-4 rounded-full transition-all duration-300 hover:bg-[#d8deda] cursor-pointer">
                  <img width={16} src={fb} alt="social-media icon" />
                </div>
                <div className="bg-[#EFF6F1] p-4 rounded-full transition-all duration-300 hover:bg-[#d8deda] cursor-pointer">
                  <img width={16} src={x} alt="social-media icon" />
                </div>
                <div className="bg-[#EFF6F1] p-4 rounded-full transition-all duration-300 hover:bg-[#d8deda] cursor-pointer">
                  <img width={16} src={pt} alt="social-media icon" />
                </div>
              </div>
            </div>
          </div>

          <div className="relative mt-28">
            <img src={leaf} alt="" />
            <div className="absolute top-28  left-[600px] w-[360px]">
              <div className="bg-white p-8 rounded-3xl">
                <h4 className="font-[YellowTail] text-xl text-[#7eb693]">
                  Location
                </h4>
                <h6 className="text-3xl font-extrabold text-[#274c5b] pb-3">
                  Our Farms
                </h6>
                <p className="text-[#525c60] text-sm">
                  Established fact that a reader will be distracted by the
                  readable content of a page when looking a layout. The point of
                  using.
                </p>
                <div className="flex flex-col gap-3 mt-4">
                  <div className="flex items-start gap-2">
                    <img src={location} alt="" />
                    <div>
                      <h2 className="text-md text-[#525c60] font-medium">
                        New York, USA:
                      </h2>
                      <p className="w-48 text-sm text-[#525c60]">
                        299 Park Avenue New York, New York 10171
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <img src={location} alt="" />
                    <div>
                      <h2 className="text-md text-[#525c60] font-medium">
                        London, UK:
                      </h2>
                      <p className="w-40 text-sm text-[#525c60]">
                        30 Stamford Street, London SE1 9LQ
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto max-w-[900px] mb-32">
          <div className="flex flex-col gap-14">
            <div className="flex flex-col gap-12">
              <div className="flex items-center gap-6">
                <div className="flex flex-col gap-6">
                  <span className="text-lg text-[#274c5b] font-bold">
                    Full Name*
                  </span>
                  <div className="border border-[#7EB693] rounded-2xl py-5 px-5 w-[438px]">
                    <input
                      type="text"
                      placeholder="Your Email Address"
                      className="outline-none bg-transparent"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-6">
                  <span className="text-lg text-[#274c5b] font-bold">
                    Your Email*
                  </span>
                  <div className="border border-[#7EB693] rounded-2xl py-5 px-5 w-[438px]">
                    <input
                      type="email"
                      placeholder="example@yourmail.com"
                      className="outline-none bg-transparent"
                    />
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <div className="flex flex-col gap-6">
                  <span className="text-lg text-[#274c5b] font-bold">
                    Company*
                  </span>
                  <div className="border border-[#7EB693] rounded-2xl py-5 px-5 w-[438px]">
                    <input
                      type="text"
                      placeholder="your company name here"
                      className="outline-none bg-transparent"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-6">
                  <span className="text-lg text-[#274c5b] font-bold">
                    Subject*
                  </span>
                  <div className="border border-[#7EB693] rounded-2xl py-5 px-5 w-[438px]">
                    <input
                      type="text"
                      placeholder="how can we help"
                      className="outline-none bg-transparent"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <span className="text-lg text-[#274c5b] font-bold">Message*</span>
              <textarea
                cols={10}
                rows={6}
                className="w-full outline-none border border-[#7eb693] rounded-2xl py-4 px-7 resize-none"
                placeholder="hello there,i would like to talk about how to..."
              ></textarea>
            </div>

            <button className="flex items-center w-44 gap-2 text-sm font-bold text-[#fff] bg-[#274C5B] transition-all duration-500 hover:bg-[#EFD372] hover:text-[#274c5b] rounded-2xl pt-[20px] pl-[28px] pr-[28px] pb-[20px]">
              Send Message
              <div className="bg-[#335B6B] inline-block rounded-full p-1">
                <img src={arrow} alt="" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
