import disney from "../assets/images/disney.png";
import marvel from "../assets/images/marvel.png";
import nationalG from "../assets/images/nationalG.png";
import pixar from "../assets/images/pixar.png";
import starwar from "../assets/images/starwar.png";

import disneyV from "../assets/Videos/disney.mp4";
import marvelV from "../assets/Videos/marvel.mp4";
import nationalGeographicV from "../assets/Videos/national-geographic.mp4";
import pixarV from "../assets/Videos/pixar.mp4";
import starWarsV from "../assets/Videos/star-wars.mp4";

const ProductionHouse = () => {
  const ProductionHouseList = [
    {
      id: 1,
      image: disney,
      video: disneyV,
    },
    {
      id: 2,
      image: marvel,
      video: marvelV,
    },
    {
      id: 3,
      image: nationalG,
      video: nationalGeographicV,
    },
    {
      id: 4,
      image: pixar,
      video: pixarV,
    },
    {
      id: 5,
      image: starwar,
      video: starWarsV,
    },
  ];

  return (
    <div className="flex gap-2 md:gap-5 p-2 px-8 md:px-16">
      {ProductionHouseList.map((item) => (
        <div
          key={item.id}
          className="border-[2px] border-gray-300 rounded-lg hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer relative shadow-xl shadow-black">
          <video
            autoPlay
            loop
            playsInline
            muted
            className="absolute top-0 z-0 opacity-0 hover:opacity-50 rounded-md">
            <source src={item.video} type="video/mp4" />
          </video>
          <img src={item.image} alt="" className="w-full z-[1]" />
        </div>
      ))}
    </div>
  );
};

export default ProductionHouse;
