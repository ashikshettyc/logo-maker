import { updateStorageContext } from "@/context/UpdateStorageContext"
import { useContext, useEffect, useState } from "react"


function LogoPreview() {
   const [storageValue, setStorageValue] = useState()
   const {updateStorage, setUpdateStorage} = useContext(updateStorageContext)

    useEffect(()=> {
        const storageData = JSON.parse(localStorage.getItem('value'))
       console.log(storageData)
        setStorageValue(storageData)
        
    },[updateStorage])
  return (
    <div className='flex items-center justify-center h-screen'>
        <div className='h-[400px] w-[400px] bg-gray-200
        outline-dotted outline-gray-300'>
<div className="h-full w-full" 
style={{ borderRadius:storageValue?.bgRounded,
    background:storageValue?.bgColor,
}}>

</div>
        </div>
    </div>
  )
}

export default LogoPreview