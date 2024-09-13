import { updateStorageContext } from "@/context/UpdateStorageContext";
import html2canvas from "html2canvas";
import { icons } from "lucide-react";
import { useContext, useEffect, useState } from "react";
const BASE_URL = "https://logoexpress.tubeguruji.com/"
function LogoPreview({downloadIcon}) {
  const [storageValue, setStorageValue] = useState();
  const { updateStorage } = useContext(updateStorageContext);

  useEffect(() => {
    const storageData = JSON.parse(localStorage.getItem("value"));
    setStorageValue(storageData);
  }, [updateStorage]);
  useEffect(()=>{
    if(downloadIcon){
      downloadPnglogo()
    }
  },[downloadIcon])

  const downloadPnglogo = () => {
const downloadLogoDiv = document.getElementById("downloadLogoDiv")
html2canvas(downloadLogoDiv,{
  backgroundColor: null,
}).then(canvas => {
  const pngImg = canvas.toDataURL('img/png')
    const downloadLink = document.createElement('a')
    downloadLink.href =pngImg;
    downloadLink.download='ashik_logo'
    downloadLink.click()
})
  }
  // eslint-disable-next-line react/prop-types
  const Icon = ({ name, color, size,rotate }) => {
    const LucidIcon = icons[name];
    if (!LucidIcon) {
      return;
    }
    return <LucidIcon color={color} size={size} style={{transform:`rotate(${rotate}deg)`
  }} />;
  };
  return (
    <div className="flex items-center justify-center h-screen">
      <div
        className="h-[400px] w-[400px] bg-gray-200
        outline-dotted outline-gray-300"
        style={{ padding: storageValue?.bgPadding }}
      >
        <div id="downloadLogoDiv"
          className="h-full w-full flex items-center justify-center"
          style={{
            borderRadius: storageValue?.bgRounded,
            background: storageValue?.bgColor,
          }}
        >
          {
            storageValue?.icon?.includes(".png") ? 
            <img src={"/png/" + storageValue?.icon} 
            style={{
              height: storageValue?.iconSize,
              width: storageValue?.iconSize
            }}
            /> :
            <Icon
            name={storageValue?.icon}
            color={storageValue?.iconColor}
            size={storageValue?.iconSize}
            rotate={storageValue?.iconRotate}
          />
          }
         
        </div>
      </div>
    </div>
  );
}

export default LogoPreview;
