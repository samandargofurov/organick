import banner from "../assets/licensesImages/BackgroundPatterns.png";

const Licenses = () => {
  return (
    <>
      <div className="container mx-auto max-w-[1440px] mb-32">
        <div className="bg-[#FAFAFA] relative">
          <img src={banner} alt="" />
          <h3 className="absolute top-14 left-[610px] text-3xl text-[#274c5b] font-extrabold">
            Licenses
          </h3>
        </div>
      </div>
      
      <div className="container mx-auto max-w-[1050px] mb-32">
        <div className="flex flex-col gap-20">
          <div className="flex gap-28">
            <h2 className="text-3xl font-extrabold text-[#274c5b]">
              Icon & Graphics
            </h2>
            <div className="flex flex-col gap-6 w-[630px]">
              <p className="text-sm text-[#525c60] leading-6">
                Icons and Graphics are manually designed by the{" "}
                <span className="text-[#7EB693]">VictorFlow </span>
                Templates team. You may download these and edit them to fit your
                website without asking for permission or providing credit.
              </p>
              <p className="text-sm text-[#525c60] leading-6">
                Upon purchasing Software UI Kit Template our team grants you a
                nonexclusive, worldwide copyright license to download, copy,
                modify, and use the icons.
              </p>
            </div>
          </div>

          <div className="flex gap-[152px]">
            <h2 className="text-3xl font-extrabold text-[#274c5b]">
              Photography
            </h2>
            <div className="flex flex-col gap-7 w-[630px]">
              <p className="text-sm text-[#525c60] leading-6">
                All images used in the Organick Webflow Template are licensed
                for free personal and commercial use. If you'd like to use any
                specific image, you can check the licenses and download the
                images for free on Unsplash, Pexels‍. And Freepik.
              </p>
              <div className="flex flex-col gap-3">
                <h4 className="text-2xl text-[#274c5b] font-extrabold">
                  Unsplash
                </h4>
                <p className="text-sm text-[#525c60]">
                  Image 1, Image 2, Image 3, Image 4, Image 5, Image 6, Image 7,
                  Image 8, Image 9, Image 10, Image 11, Image 12, Image 13,
                  Image 14, Image 15, Image 16, Image 17, Image 18, Image 19,
                  Image 20, Image 21, Image 22, Image 23, Image 24, Image 25,
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <h4 className="text-2xl text-[#274c5b] font-extrabold">
                  Pixcel
                </h4>
                <p className="text-sm text-[#525c60]">
                  Image 1, Image 2, Image 3, Image 4, Image 5, Image 6, Image 7,
                  Image 8, Image 9, Image 10, Image 11, Image 12, Image 13,
                  Image 14, Image 15, Image 16, Image 17,
                </p>
              </div>
            </div>
          </div>

          <div className="flex gap-[268px]">
            <h2 className="text-3xl font-extrabold text-[#274c5b]">
            Font
            </h2>
            <div className="flex flex-col gap-7 w-[530px]">
              <p className="text-sm text-[#525c60] leading-6">
              Organick template uses free licensed Google Fonts. Please check <span className="font-bold">Roboto, Yellowtail </span>
              and <span className="font-bold">Open Sans.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Licenses;
