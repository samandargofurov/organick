import banner from "../assets/changelogImages/BackgroundPatterns.png";
import icon from '../assets/icon/changelogIcon.svg'

const Changelog = () => {
  return (
    <>
      <div className="container mx-auto max-w-[1440px] mb-32">
        <div className="bg-[#FAFAFA] relative">
          <img src={banner} alt="" />
          <h3 className="absolute top-14 left-[610px] text-3xl text-[#274c5b] font-extrabold">
            Changelog
          </h3>
        </div>

        <div className="p-6 mx-auto bg-white rounded-3xl w-[525px] shadow-xl mt-20">
            <div className="flex items-center gap-5">
                <img src={icon} alt="" width={100} />
                <div className="flex items-center gap-2">
                    <h4 className="text-3xl text-[#274c5b] font-extrabold">V.1</h4>
                    <p className="text-md text-[#525c60]">Initial Organick Webflow Template Release</p>
                </div>
            </div>
        </div>
      </div>
    </>
  );
};

export default Changelog;
