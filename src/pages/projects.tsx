import { useNavigate } from "react-router-dom";
import banner from "../assets/projectsImages/Banner.png";
import { useEffect, useState } from "react";

const Projects = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await fetch("/src/assets/data.json", { method: "get" });
        const data = await res.json();
        setProducts(data.projects);
      } catch (error) {
        console.log(error);
      }
    };
    getProducts();
  }, []);

  const navigate = useNavigate();

  const handleRedirect = (id?: any) => {
    navigate(`/projectDetails/${id}`);
  };

  return (
    <>
      <div className="container mx-auto max-w-[1440px]">
        <div className="relative mb-32">
          <img src={banner} alt="" />
          <div className="absolute top-[40%] left-[35%]">
            <h3 className="text-[50px] text-[#274c5b] font-extrabold">
              Portfolio Standard
            </h3>
          </div>
        </div>
      </div>

      <div className="container mx-auto max-w-[1050px] mb-32">
        <div className="flex flex-wrap gap-5">
          {products.map((el: any, index: number) => {
            return (
              <div key={index} className="flex flex-col gap-3">
                <div>
                  <div className="relative">
                    <div className="overflow-hidden">
                      <img
                        className="rounded-3xl"
                        src={el.image}
                        alt=""
                        width={336}
                      />
                    </div>
                    <div className="absolute inset-5 group hover:bg-white hover:bg-opacity-80 rounded-3xl flex justify-center items-center">
                      <div
                        onClick={() => handleRedirect(el.id)}
                        className="hidden w-12 h-12 cursor-pointer rounded-full bg-[#7EB693] group-hover:inline-block transition-all duration-300"
                      >
                        <span className="absolute top-[130px] left-[139px] w-3 h-3 border-t-2 border-r-2 border-white rotate-45"></span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <h2 className="text-xl font-bold text-[#274c5b]">
                    {el.title}
                  </h2>
                  <p className="font-[YellowTail] text-xl text-[#7EB693]">
                    {el.type}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Projects;
