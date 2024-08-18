import user from "../assets/icon/userIcon.svg";
import banner from "../assets/aboutNewImages/banner.png";

const AboutNew = () => {
  return (
    <>
      <div className="container mx-auto max-w-[1440px]">
        <div className="relative">
          <div>
            <img src={banner} alt="" />
          </div>
          <div className="absolute top-[81%] left-[14%] bg-white rounded-3xl py-12 px-14 w-[977px] shadow-xl">
            <div className="flex items-center gap-8">
              <div className="flex items-center gap-2">
                <span className="font-bold text-[#274C5B]">Posted On:</span>
                <span className="font-normal text-sm">January 6, 2024</span>
              </div>
              <div className="flex items-center gap-2">
                <img src={user} alt="user icon" width={16} />
                <span className="text-sm">By Rachi Card</span>
              </div>
            </div>
            <h3 className="text-[50px] font-extrabold text-[#274c5b]">
              Research More Organic Food
            </h3>
            <p className="text-sm text-[#525C60] w-[530px] leading-6">
              Established fact that a reader will be distracted by the readable
              content of a page when looking a layout. The point of using Lorem
              Ipsum is that it has a more-or-less normal distribution of
              letters, as opposed{" "}
            </p>
          </div>
        </div>
        <div className="container mx-auto max-w-[790px] mt-56 mb-28">
          <div className="flex flex-col items-baseline gap-7">
            <h3 className="text-[#525C60] leading-7">
              Uniquely matrix economically sound value through cooperative
              technology. Competently parallel task fully researched data and
              enterprise process improvements. Collaboratively expedite quality
              manufactured <br /> products via client-focused results quickly
              communicate enabled technology and turnkey leadership skills.
              Uniquely enable accurate supply chains rather than friction
              technology.
            </h3>
            <h1 className="text-center font-extrabold text-4xl text-[#274c5b]">
              Preferred Form of Vitamin D?
            </h1>
            <p className="text-[#525C60] leading-7">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking a layout. The point of
              using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English.
            </p>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <span className="w-1 h-1 rounded-full bg-[#274c5b]"></span>
                <span className="text-[#525c60]">
                  Publishing packages and web pageLorem Ipsum as their default
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-1 h-1 rounded-full bg-[#274c5b]"></span>
                <span className="text-[#525c60]">
                  Content here, content here', making it look like readable
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-1 h-1 rounded-full bg-[#274c5b]"></span>
                <span className="text-[#525c60]">
                  Packages and web pageLorem Ipsum as their default
                </span>
              </div>
            </div>
            <div className="bg-[#F1EDEA] w-[790px] mx-auto px-[110px] py-12 mt-4 rounded-3xl">
              <p className="font-bold text-[#274c5b] text-center">
                “The first rule of any organic used in a business is that nature
                applied to an efficient operation will magnify the efficiency.
                The second is that organic applied to an inefficient operation
                will magnify the health.”
              </p>
            </div>
            <h2 className="text-center font-extrabold text-3xl text-[#274c5b] mt-4">
              Make perfect organic product with us
            </h2>
            <p className="text-[#525C60] leading-7">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking a layout. The point of
              using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English.
            </p>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-1">
                <span className="text-[#525c60]">1.</span>
                <span className="text-sm text-[#525c60]">
                  Publishing packages and web pageLorem Ipsum as their default
                </span>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-[#525c60]">2.</span>
                <span className="text-sm text-[#525c60]">
                  Content here, content here', making it look like readable
                </span>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-[#525c60]">3.</span>
                <span className="text-sm text-[#525c60]">
                  Packages and web pageLorem Ipsum as their default
                </span>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-[#525c60]">4.</span>
                <span className="text-sm text-[#525c60]">
                more-or-less normal distribution of letters
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutNew;
