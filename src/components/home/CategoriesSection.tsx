import arrow from "../../assets/icon/Vector.svg";
import star from "../../assets/icon/Star.svg";
import { NavLink, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

interface Product {
  id: number;
  category: string;
  image: string;
  title: string;
  oldPrice: string;
  newPrice: string;
  rating: number;
}

const CategoriesSection = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('/src/data.json')
      .then(res => res.json())
      .then((data) => setProducts(data.products.slice(0, 8)))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const handleRedirect = (id: number) => {
    navigate(`/shopSingle/${id}`);
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
        {products.map((el) => (
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

      <NavLink to="/shop">
        <button className="flex items-center mx-auto gap-2 text-sm font-bold text-[#fff] bg-[#274C5B] transition-all duration-500 hover:bg-[#EFD372] hover:text-[#274c5b] rounded-2xl mt-12 pt-[20px] pl-[28px] pr-[28px] pb-[20px]">
          Shop Now
          <div className="bg-[#335B6B] inline-block rounded-full p-1">
            <img src={arrow} alt="" />
          </div>
        </button>
      </NavLink>
    </div>
  );
};

export default CategoriesSection;
