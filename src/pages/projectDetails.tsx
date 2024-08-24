import banner from "../assets/projectsImages/Image (18).png";
import carrots from "../assets/projectsImages/carrots.png";

const ProjectDetails = () => {
  return (
    <>
      <div className="container mx-auto max-w-[1440px]">
        <div className="relative">
          <div>
            <img src={banner} alt="" />
          </div>
          <div className="absolute top-[74%] left-40 flex py-12 px-14">
            <div className="bg-white rounded-s-3xl pt-14 pb-8 px-12 w-[630px] shadow-lg">
              <h2 className="font-bold text-[52px] text-[#274c5b]">
                Black Raspberry
              </h2>
              <p className="text-sm w-[515px] text-[#525C60] mt-2 leading-6">
                Established fact that a reader will be distracted by the
                readable content of a page when looking a layout. The point of
                using Lorem Ipsum is that it has a more-or-less normal
                distribution of letters, as opposed{" "}
              </p>
            </div>

            <div className="bg-[#FAFAFA] rounded-e-3xl pt-20 pb-16 px-14 shadow-sm">
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-[50px] text-sm">
                  <span className="text-lg font-bold text-[#274c5b]">Date</span>
                  <span className="text-[#525C60]"> : December 4, 2022</span>
                </div>
                <div className="flex items-center gap-10 text-sm">
                  <span className="text-[#274c5b] font-bold text-lg">
                    Client
                  </span>
                  <span className="text-[#525C60]"> : Kevin Martin</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <span className="text-[#274c5b] font-bold text-lg">
                    Category
                  </span>
                  <span className="text-[#525C60]">: Agriculture , Eco</span>
                </div>
                <div className="flex items-center gap-6 text-sm">
                  <span className="text-[#274c5b] font-bold text-lg">
                    Service
                  </span>
                  <span className="text-[#525C60]"> : Organic Products</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto max-w-[790px] mt-56 mb-24">
          <div className="flex flex-col items-baseline gap-7">
            <h1 className="text-center font-extrabold text-3xl text-[#274c5b]">
              About The Farm:
            </h1>
            <p className="text-[#525C60] leading-7">
              t is a long established fact that a reader will be distracted by
              the readable content of a page when looking a layout. The point of
              using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English.
            </p>
            <p className="text-[#525C60] leading-7">
              Many desktop publishing packages and web page editors now use
              Lorem Ipsum as their default model text, and auncover many web
              sites still in their infancy. Various versions have evolved over
              the years
            </p>
            <div>
              <img src={carrots} alt="" className="rounded-3xl" />
            </div>

            <div className="flex flex-col gap-5">
              <h2 className="font-extrabold text-3xl text-[#274c5b] mt-4">
                How To Farm:
              </h2>
              <p className="text-[#525C60] leading-7">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking a layout. The
                point of using Lorem Ipsum is that it has a more-or-less normal
                distribution of letters, as opposed to using 'Content here,
                content here', making it look like readable English.
              </p>
              <p className="text-[#525C60] leading-7">
                Many desktop publishing packages and web page editors now use
                Lorem Ipsum as their default model text, and auncover many web
                sites still in their infancy. Various versions have evolved over
                the years
              </p>
            </div>

            <div className="flex flex-col gap-5">
              <h2 className="font-extrabold text-3xl text-[#274c5b] mt-4">
                Conclusion:
              </h2>
              <p className="text-[#525C60] leading-7">
                It is a long established fact that a reader will be distracted by
                the readable content of a page when looking a layout. The point
                of using Lorem Ipsum is that it has a more-or-less normal
                distribution of letters, as opposed to using 'Content here,
                content here', making it look like readable English.
              </p>
              <p className="text-[#525C60] leading-7">
                Many desktop publishing packages and web page editors now use
                Lorem Ipsum as their default model text, and auncover many web
                sites still in their infancy. Various versions have evolved over
                the years
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectDetails;
