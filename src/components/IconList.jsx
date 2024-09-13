import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { icons } from "lucide-react";
import { iconList } from "@/constants/icons";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import axios from "axios";
const BASE_URL = "https://logoexpress.tubeguruji.com/"
function IconList({ selectedIcon }) {
  const storageValue = JSON.parse(localStorage.getItem("value"));
  const [icon, setIcon] = useState(storageValue ? storageValue?.icon : "Smile");
const [pngIconList, setPngIconList] = useState([])
  const [openDialog, setOpenDialog] = useState(false);
  useEffect(()=>{
    getPngIcon()
  },[])
  const Icon = ({ name, color, size, rotate }) => {
    const LucidIcon = icons[name];
    if (!LucidIcon) {
      return;
    }
    return (
      <LucidIcon
        color={color}
        size={size}
        style={{ transform: `rotate(${rotate}deg)` }}
      />
    );
  };

  const getPngIcon = () => {
    axios.get(BASE_URL + '/getIcons.php').then(res=>{
      console.log("colr icon",res.data)
      setPngIconList(res.data)
    })
  }
  return (
    <div>
      <div>
        <label>Icon</label>
        <div
          onClick={() => {
            setOpenDialog(true);
          }}
          className="p-3 cursor-pointer my-2 bg-gray-200 rounded-md w-[50px] h-[50px] flex items-center justify-center"
        >
          {icon?.includes(".png") ? 
        <img src={BASE_URL + '/png/' + icon}/> : 
<Icon name={icon} color={"#000"} size={20} />
        }
          
        </div>
      </div>
      <Dialog open={openDialog} onOpenChange={setOpenDialog}>
        <DialogContent className="bg-white">
          <DialogHeader>
            <DialogTitle>Pic your fav Icon</DialogTitle>
            <DialogDescription>
              <Tabs defaultValue="icon" className="w-[400px]">
                <TabsList>
                  <TabsTrigger value="icon">Icons</TabsTrigger>
                  <TabsTrigger value="color-icon">Color Icons</TabsTrigger>
                </TabsList>
                <TabsContent value="icon">
                <div className="grid gird-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 overflow-auto h-[400px]">
                {iconList.map((icon, index) => (
                  <div
                    key={index}
                    className="border p-3 flex rounded-sm items-center justify-center cursor-pointer"
                    onClick={() => {
                      selectedIcon(icon);
                      setOpenDialog(false);
                      setIcon(icon);
                    }}
                  >
                    <Icon name={icon} color={"#000"} size={20} />
                  </div>
                ))}
              </div>
                </TabsContent>
                <TabsContent value="color-icon">
                <div className="grid gird-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 overflow-auto h-[400px]">
                {pngIconList.map((icon, index) => (
                  <div
                    key={index}
                    className="border p-3 flex rounded-sm items-center justify-center cursor-pointer"
                    onClick={() => {
                      selectedIcon(icon);
                      setOpenDialog(false);
                      setIcon(icon);
                    }}
                  >
                    <img src={BASE_URL + "/png/" + icon}/>
                  </div>
                ))}
              </div>
                </TabsContent>
              </Tabs>

             
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default IconList;
