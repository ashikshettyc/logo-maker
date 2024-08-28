import { Image, PencilRuler, Shield } from "lucide-react";
import { useState } from "react";

// eslint-disable-next-line react/prop-types
function SideNav({ selectedIndex}) {
  const menuList = [
    {
      id: 1,
      name: "Icon",
      icon: PencilRuler,
    },
    {
      id: 2,
      name: "Background",
      icon: Image,
    },
    {
      id: 3,
      name: "Upgrade",
      icon: Shield,
    },
  ];
  const [activeIndex, setActiveIndex] = useState(1);
  return (
    <div className="border shadow-sm h-screen">
      <div>
        {menuList.map((menu) => {
          return (
            <h2
            onClick={() => {setActiveIndex(menu.id)
                selectedIndex(menu.id)} 
            } 
           
              className={`p-2 text-lg px-7 text-gray-500 my-2 
              cursor-pointer hover:bg-primary hover:text-white
              ${activeIndex == menu.id && "bg-primary text-white"}`}
              key={menu.id}
            >
              <menu.icon />
              {menu.name}
            </h2>
          );
        })}
      </div>
    </div>
  );
}

export default SideNav;
