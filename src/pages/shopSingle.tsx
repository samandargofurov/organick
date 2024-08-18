import Banner from "../assets/shopImages/shopSingleImages/Banner.png";
import arrow from "../assets/icon/Vector.svg";
import star from "../assets/icon/Star.svg";
import { useNavigate, useParams } from "react-router-dom";
import data from "../assets/data.json";

const ShopSingle = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  const parsedId = Number(id);
  const products = data.products.filter((product) => product.id !== parsedId);
  const product = data.products.find((product) => product.id === parsedId);

  if (!product) {
    return <p>Product not found</p>;
  }

  const handleRedirect = (id: number) => {
    navigate(`/shopSingle/${id}`);
  };

  return (
    <>
      <div className="container mx-auto max-w-[1440px] mb-28">
        <div className="relative mb-32">
          <img src={Banner} alt="" />
          <div className="absolute top-[36%] left-[42%]">
            <h3 className="text-[48px] text-[#274c5b] font-extrabold">
              Shop Single
            </h3>
          </div>
        </div>
      </div>

      <div className="container mx-auto max-w-[1050px]">
        {/* about product infos */}
        <div className="mb-32">
          <div className="flex items-center gap-20 mb-24">
            <div className="bg-[#F9F8F8] p-8 w-[400px] h-[400px] rounded-2xl">
              <span className="bg-[#274c5b] text-white px-4 py-2 text-xs rounded-lg">
                {product.category}
              </span>
              <img
                src={product.image}
                alt="Product Image"
                className="drop-shadow-4xl mx-auto w-[350px] h-[350px]"
              />
            </div>
            <div>
              <h3 className="text-3xl font-bold text-[#274c5b] pb-2">
                {product.title}
              </h3>
              <div className="flex gap-1 pb-2">
                {Array.from({ length: 5 }, (_, i) => (
                  <img
                    key={i}
                    src={star}
                    alt="star"
                    className="inline-block"
                    width={13}
                  />
                ))}
              </div>
              <div className="flex items-center gap-5 pb-7">
                <p className="text-gray-500 line-through">{product.oldPrice}</p>
                <p className="text-xl font-bold text-[#274c5b]">
                  {product.newPrice}
                </p>
              </div>
              <p className="text-sm text-[#525C60] w-[470px] pb-9">
                {product.description}
              </p>
              <div className="flex items-center gap-5">
                <h2 className="font-bold text-[#274c5b] text-md">Quantity :</h2>
                <div className="border-2 border-[#274c5b] rounded-2xl py-5 px-10 text-[#274c5b] font-bold">
                  1
                </div>
                <button className="bg-[#274c5b] text-md w-52 font-bold text-white py-5 px-10 rounded-2xl">
                  <div className="flex items-center gap-3 transition-all duration-300 hover:gap-4">
                  Add To Cart
                  <div className="bg-[#335B6B] rounded-full p-2">
                    <img src={arrow} alt="arrow" width={10} />
                  </div>
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div>
            <div className="flex items-center justify-center gap-8 mb-7">
              <div className="cursor-pointer font-bold text-lg text-[#fff] py-4 px-12 bg-[#274c5b] rounded-2xl">
                Product Description
              </div>
              <div className="cursor-pointer text-lg font-bold text-[#274c5b] py-4 px-11 bg-[#EFF6F1] rounded-2xl">
                Additional Info
              </div>
            </div>
            <div className="text-center text-[#525C60] text-sm">
              Welcome to the world of natural and organic. Here you can discover
              the bounty of nature. We have grown on the principles of health, <br />
              ecology, and care. We aim to give our customers a healthy
              chemical-free meal for perfect nutrition. It offers about 8–10%
              carbs. Simple <br /> sugars — such as glucose and fructose — make up 70%
              and 80% of the carbs in raw.
            </div>
          </div>
        </div>

        {/* all products */}
        <div className="mb-32">
          <h3 className="text-center mb-10 text-[#274c5b] font-extrabold text-4xl">Related Products</h3>
          <div className="flex flex-wrap items-center justify-center gap-5">
            {products.map((el) => (
              <div
                key={el.id}
                className="bg-[#F9F8F8] w-[247px] p-5 rounded-3xl"
              >
                <span className="bg-[#274c5b] text-white px-4 py-2 text-xs rounded-lg">
                  {el.category}
                </span>
                <div onClick={() => handleRedirect(el.id)}>
                  <img
                    className="drop-shadow-4xl cursor-pointer w-[207px] h-56"
                    src={el.image}
                    alt={el.title}
                  />
                </div>
                <div className="flex flex-col gap-4">
                  <h6 className="text-[#274C5B] font-bold text-md">
                    {el.title}
                  </h6>
                  <div className="flex items-center justify-between border-t-2 border-[#DEDDDD] pt-2">
                    <div className="flex items-center gap-2">
                      <p className="text-xs text-[#B8B8B8] line-through">
                        {el.oldPrice}
                      </p>
                      <p className="text-sm font-semibold text-[#274C5B]">
                        {el.newPrice}
                      </p>
                    </div>
                    <div className="flex items-center gap-1">
                      {Array.from({ length: el.rating }, (_, i) => (
                        <img
                          key={i}
                          src={star}
                          alt=""
                          className="cursor-pointer"
                          width={13}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopSingle;
