import banner from "../assets/qualityStandardImages/Banner.png";

const QualityStandard = () => {
  return (
    <>
      <div className="relative mb-32">
        <img src={banner} alt="" />
        <div className="absolute top-[40%] left-[42%]">
          <h3 className="text-[50px] text-[#274c5b] font-extrabold">
            Quality Standard
          </h3>
        </div>
      </div>
    </>
  );
};

export default QualityStandard;
