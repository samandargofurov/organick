import banner from "../assets/qualityStandardImages/Banner.png";
import plant from "../assets/qualityStandardImages/plant.png";
import plants from "../assets/qualityStandardImages/plants.png";
import farmer from "../assets/qualityStandardImages/farmer.png";

const QualityStandard = () => {
  return (
    <>
      <div className="container mx-auto max-w-[1440px]">
        <div className="relative mb-32">
          <img src={banner} alt="" />
          <div className="absolute top-[40%] left-[36%]">
            <h3 className="text-[50px] text-[#274c5b] font-extrabold">
              Quality Standard
            </h3>
          </div>
        </div>
        <div className="container mx-auto max-w-[1000px]">
          <img src={farmer} alt="" />
          <div className="container mx-auto max-w-[800px] mt-20">
            <h3 className="text-[#274c5b] text-4xl font-bold mb-4">
              Organic Store Services
            </h3>
            <div className="flex flex-col gap-5 mb-16">
              <p className="text-[#525c60] text-sm">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking a layout. The
                point of using Lorem Ipsum is that it has a more-or-less normal
                distribution of letters, as opposed to using 'Content here,
                content here', making it look like readable English.{" "}
              </p>
              <p className="text-[#525c60] text-sm">
                Many desktop publishing packages and web page editors now use
                Lorem Ipsum as their default model text, and auncover many web
                sites still in their infancy. Various versions have evolved over
                the years
              </p>
            </div>
            <div className="flex flex-col gap-8">
              <div className="flex gap-6">
                <img src={plant} alt="" width={300} className="rounded-2xl" />
                <div className="bg-[#F9F8F8] py-10 px-10 rounded-2xl">
                  <h2 className="text-lg text-[#274c5b] font-medium mb-2">
                    Why Organic
                  </h2>
                  <p className="text-sm text-[#525c60] w-[330px]">
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptat. page editors now use Lorem Ipsum as their default
                    model text, and auncover.
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="bg-[#F9F8F8] py-10 px-10 rounded-2xl">
                  <h2 className="text-lg text-[#274c5b] font-medium mb-2">
                    Speciality Produce
                  </h2>
                  <p className="text-sm text-[#525c60] w-[330px]">
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptat. page editors now use Lorem Ipsum as their default
                    model text, and auncover.
                  </p>
                </div>
                <img src={plants} alt="" width={300} className="rounded-2xl" />
              </div>
            </div>
            <div className="mt-20">
              <h3 className="font-bold text-3xl text-[#274c5b] mb-3">We farm your land</h3>
              <p className="text-sm text-[#525c60] leading-6">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking a layout. The
                point of using Lorem Ipsum is that it has a more-or-less normal
                distribution of letters, as opposed to using 'Content here,
                content here', making it look like readable English.
              </p>
            </div>
            <div className="flex items-center gap-8 mt-20 mb-32">
              <div className="bg-[#F9F8F8] w-80 rounded-[70px] flex items-center gap-4 py-4 px-2.5">
                <span className="bg-[#7eb693] py-3 px-4 rounded-full font-bold text-white">01</span>
                <h4 className="font-bold text-lg text-[#274c5b]">Best quality support</h4>
              </div>
              <div className="bg-[#F9F8F8] w-80 rounded-[70px] flex items-center gap-4 py-4 px-2.5">
                <span className="bg-[#7eb693] py-3 px-4 rounded-full font-bold text-white">02</span>
                <h4 className="font-bold text-lg text-[#274c5b]">Money back guarantee</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default QualityStandard;
