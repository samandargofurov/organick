import arrow from "../../assets/icon/Vector.svg";
import star from "../../assets/icon/Star.svg";
import { useNavigate } from "react-router-dom";
import data from '../../assets/data.json'
import { useState } from "react";

const CategoriesSection = () => {
  const [visibleProducts, setVisibleProducts] = useState(data.products.slice(0, 8));
  const [isLoadMore, setIsLoadMore] = useState(true);

  const navigate = useNavigate();

  const handleRedirect = (id: number) => {
    navigate(`/shopSingle/${id}`);
  };

  const toggleLoadMore = () => {
    if (isLoadMore) {
      // Barcha mahsulotlarni ko'rsatish
      setVisibleProducts(data.products);
    } else {
      // Faqat 8 ta mahsulotni ko'rsatish
      setVisibleProducts(data.products.slice(0, 8));
    }
    setIsLoadMore(!isLoadMore);
  };

  return (
    <div className="container mx-auto max-w-[1050px] mb-28">
      <div className="text-center flex flex-col gap-2 mb-10">
        <h5 className="font-[YellowTail] text-2xl text-[#7EB693]">
          Categories
        </h5>
        <p className="text-[40px] text-[#274c5b] font-bold">Our Products</p>
      </div>

      {/* cards */}
      <div className="flex flex-wrap items-center justify-center gap-5">
        {visibleProducts.map((el) => (
          <div key={el.id} className="bg-[#F9F8F8] w-[247px] p-5 rounded-3xl">
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
              <h6 className="text-[#274C5B] font-bold text-md">{el.title}</h6>
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
                    <img key={i} src={star} alt="" className="cursor-pointer" width={13} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button onClick={toggleLoadMore} className="flex items-center mx-auto gap-2 text-sm font-bold text-[#fff] bg-[#274C5B] transition-all duration-500 hover:bg-[#EFD372] hover:text-[#274c5b] rounded-2xl mt-12 pt-[20px] pl-[28px] pr-[28px] pb-[20px]">
        {isLoadMore ? 'Load More' : 'Load Less'}
        <div className="bg-[#335B6B] inline-block rounded-full p-1">
          <img src={arrow} alt="" />
        </div>
      </button>
    </div>
  );
};

export default CategoriesSection;
