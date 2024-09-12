
import { Slider } from "@/components/ui/slider"
import { useContext, useEffect, useState } from "react";
import ColorPickerController from "./ColorPickerController"
import { updateStorageContext } from "@/context/UpdateStorageContext";
import IconList from "../IconList";
function IconController() {
  const storageValue = JSON.parse(localStorage.getItem("value"))
    const [size, setSize] = useState(storageValue? storageValue?.iconSize : 280)
    const [rotate, setRotate] = useState(storageValue? storageValue?.iconRotate : 0)
    const [color, setColor] = useState("#fff")
    const { setUpdateStorage} = useContext(updateStorageContext)
    useEffect(()=>{
const updatedValue = {
    ...storageValue,
    iconSize:size,
    iconRotate:rotate,
    iconColor:color,
    icon:"Smile"
}
setUpdateStorage(updatedValue)
localStorage.setItem("value", JSON.stringify(updatedValue))
    },[size, rotate, color, storageValue])
  return (
    <div>
      <div>
       <IconList/>
        <div className="py-2">
            <label className="p-2 flex justify-between items-center">Size <span>{size}px</span></label>
            <Slider defaultValue={[size]} max={512} step={1} 
            onValueChange={(event) => setSize(event[0])}
            />
        </div>
        <div className="py-2">
            <label className="p-2 flex justify-between items-center">Rotate <span>{rotate}º</span></label>
            <Slider defaultValue={[rotate]} max={360} step={1} 
            onValueChange={(event) => setRotate(event[0])}
            />
        </div>
        <div className="py-2">
            <label className="p-2 flex justify-between items-center">Icon color</label>
            <ColorPickerController hideController={true} selectedColor={(color)=> setColor(color)}/>
        </div>
      </div>
    </div>
  );
}

export default IconController;
