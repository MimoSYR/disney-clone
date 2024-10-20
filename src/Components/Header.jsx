import logo from "../assets/images/logo.png";
import {
  HiHome,
  HiMagnifyingGlass,
  HiStar,
  HiPlayCircle,
  HiTv,
} from "react-icons/hi2";
import { HiPlus, HiDotsVertical } from "react-icons/hi";
import HeaderItem from "./HeaderItem";
import { useState } from "react";

const Header = () => {
  const [navToggle, setNavToggle] = useState(false);

  const menu = [
    {
      name: "HOME",
      icon: HiHome,
    },
    {
      name: "SEARCH",
      icon: HiMagnifyingGlass,
    },
    {
      name: "WATCH LIST",
      icon: HiPlus,
    },
    {
      name: "ORIGINALS",
      icon: HiStar,
    },
    {
      name: "MOVIES",
      icon: HiPlayCircle,
    },
    {
      name: "SERIES",
      icon: HiTv,
    },
  ];

  return (
    <div className="flex items-center justify-between px-4 pb-4 md:pt-2 ">
      <div className="flex items-center gap-8">
        <img src={logo} alt="" className="w-[80px] md:w-[115px] object-cover" />
        <div className="hidden md:flex gap-8 mt-6">
          {menu.map((item, index) => (
            <HeaderItem key={index} name={item.name} Icon={item.icon} />
          ))}
        </div>
        <div className="flex md:hidden gap-5 mt-6">
          {menu.map(
            (item, index) =>
              index < 3 && <HeaderItem key={index} name={""} Icon={item.icon} />
          )}
          <div
            className="md:hidden"
            onClick={() => {
              setNavToggle(!navToggle);
            }}>
            <HeaderItem name={""} Icon={HiDotsVertical} />
            {navToggle ? (
              <div className="absolute mt-4 bg-gray-950 border-[1px] border-gray-700 px-5 py-4">
                {menu.map(
                  (item, index) =>
                    index >= 3 && (
                      <HeaderItem
                        key={index}
                        name={item.name}
                        Icon={item.icon}
                      />
                    )
                )}
              </div>
            ) : null}
          </div>
        </div>
      </div>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy4_AiX3WacNPxG3EAZH1c-C081edxgFtE-g&s"
        alt="avatar"
        className="w-[40px] rounded-full mt-6"
      />
    </div>
  );
};

export default Header;
