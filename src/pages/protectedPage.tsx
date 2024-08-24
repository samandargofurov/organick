import banner from "../assets/protectedImages/BackgroundPatterns.png";
import img from "../assets/protectedImages/Photo.png";
import arrow from "../assets/icon/Vector.svg";

const ProtectedPage = () => {
  return (
    <>
      <div className="container mx-auto max-w-[1440px] mb-32">
        <div className="bg-[#FAFAFA] relative">
          <img src={banner} alt="" />
          <h3 className="absolute top-16 left-[605px] text-2xl text-[#274c5b] font-extrabold">
            Protected Page
          </h3>
        </div>

        <div className="p-6 mx-auto bg-white rounded-3xl w-[700px] shadow-xl mt-20">
          <div className="flex gap-5">
            <img src={img} alt="" width={150} className="rounded-2xl" />
            <div className="flex flex-col gap-6 py-3">
              <h4 className="text-sm text-[#274c5b] font-extrabold">
                Password
              </h4>
              <div className="border-[#7EB693] border-[1px] py-5 px-5 rounded-2xl w-[450px]">
                <input
                  type="text"
                  className="w-80 outline-none group"
                  placeholder="Enter Your Password"
                />
              </div>
              <button className="flex items-center w-40 gap-2 hover:gap-5 text-sm font-bold text-[#fff] bg-[#274C5B] transition-all duration-500 hover:bg-[#EFD372] hover:text-[#274c5b] rounded-2xl py-5 px-7">
                Send Now
                <div className="bg-[#335B6B] inline-block rounded-full p-1">
                  <img src={arrow} alt="" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProtectedPage;
