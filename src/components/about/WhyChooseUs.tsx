import chooseUs from "../../assets/aboutImages/whyChooseUsImg.png";

const data = [
    {
      id: 1,
      image: "/src/assets/icon/returnPolicy.svg",
      title: "Return Policy",
      desc: "Simply dummy text of the printintypesetting industry.",
    },
    {
      id: 2,
      image: "/src/assets/icon/fresh.svg",
      title: "100% Fresh",
      desc: "Simply dummy text of the printintypesetting industry.",
    },
    {
      id: 3,
      image: "/src/assets/icon/support.svg",
      title: "Support 24/7",
      desc: "Simply dummy text of the printintypesetting industry.",
    },
    {
      id: 4,
      image: "/src/assets/icon/payment.svg",
      title: "Secured Payment",
      desc: "Simply dummy text of the printintypesetting industry.",
    },
  ];

const WhyChooseUs = () => {

  return (
    <>
      <div className="bg-[#F9F8F8] py-32 mb-40">
        <div className="container mx-auto max-w-[1050px]">
          <div className="flex justify-between mb-24">
            <div>
              <h2 className="font-[YellowTail] text-[#7EB693] text-2xl pb-1">
                Why Choose us?
              </h2>
              <p className="text-[#274C5B] font-extrabold text-3xl leading-tight pb-3">
                We do not buy from the <br />
                open market & traders.
              </p>
              <p className="text-sm text-[#525C60] pb-6">
                Simply dummy text of the printing and typesetting industry.
                Lorem had ceased <br /> to been the industry's standard the
                1500s, when an unknown
              </p>
              <div className="flex flex-col gap-8">
                <div>
                  <div className="bg-[#ECECEC] w-60 flex items-center rounded-3xl gap-2 py-4 px-5">
                    <span className="w-4 h-4 border-4 rounded-full border-[#7EB693]"></span>
                    <h6 className="font-bold text-sm text-[#274c5b]">
                      100% Natural Product
                    </h6>
                  </div>
                  <p className="pl-11 text-sm text-[#525C60] pt-3 w-96">
                    Simply dummy text of the printing and typesetting industry
                    Lorem Ipsum
                  </p>
                </div>

                <div>
                  <div className="bg-[#ECECEC] w-60 flex items-center rounded-3xl gap-2 py-4 px-5">
                    <span className="w-4 h-4 border-4 rounded-full border-[#7EB693]"></span>
                    <h6 className="font-bold text-sm text-[#274c5b]">
                      {" "}
                      Increases resistance
                    </h6>
                  </div>
                  <p className="pl-11 text-sm text-[#525C60] pt-3 w-96">
                    Filling, and temptingly healthy, our Biona Organic Granola
                    with Wild Berries is just the thing
                  </p>
                </div>
              </div>
            </div>

            <div>
              <img src={chooseUs} alt="" width={500} />
            </div>
          </div>

          {/* cards */}
          <div className="flex items-center justify-center gap-5">
            {data.map((el) => {
              return (
                <div key={el.id}>
                  <div className="flex flex-col bg-white rounded-2xl items-center justify-center pt-10 pb-8 px-4 gap-3 w-52">
                    <div className="bg-[#F9F8F8] p-3 rounded-2xl">
                      <img src={el.image} alt="return policy" width={40} />
                    </div>
                    <h2 className="text-[#274C5B] font-bold text-lg">
                      {el.title}
                    </h2>
                    <p className="text-center text-sm w-36 text-[#525C60]">
                      {el.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyChooseUs;
