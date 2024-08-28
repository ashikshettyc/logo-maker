import { Slider } from "@/components/ui/slider"
import { useContext, useEffect, useState } from "react"
import ColorPickerController from "./ColorPickerController"
import { updateStorageContext } from "@/context/UpdateStorageContext"


function BackgroundController() {
  const [rounded, setRounded] = useState(0)
  const [padding, setPadding] = useState(0)
  const[color, setColor] = useState("#000")
  const storageValue = JSON.parse(localStorage.getItem("value"))
  const { setUpdateStorage} = useContext(updateStorageContext)

  useEffect(()=>{
const updateValue= {
  ...storageValue,
  bgRounded:rounded,
  bgPadding:padding,
  bgColor:color
}
setUpdateStorage(updateValue)
localStorage.setItem("value", JSON.stringify(updateValue))
  },[rounded,padding,color,storageValue])
  return (
    <div>
      <div className="py-2">
            <label className="p-2 flex justify-between items-center">Rounded <span>{rounded}px</span></label>
            <Slider defaultValue={[0]} max={512} step={1} 
            onValueChange={(event) => setRounded(event[0])}
            />
        </div>
        <div className="py-2">
            <label className="p-2 flex justify-between items-center">Padding <span>{padding}px</span></label>
            <Slider defaultValue={[0]} max={512} step={1} 
            onValueChange={(event) => setPadding(event[0])}
            />
        </div>
        <div className="py-2">
            <label className="p-2 flex justify-between items-center">Icon color</label>
            <ColorPickerController hideController={false} selectedColor={(color)=> setColor(color)}/>
        </div>
    </div>
  )
}

export default BackgroundController