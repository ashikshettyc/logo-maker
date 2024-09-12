import React, { useState } from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { icons, Smile } from 'lucide-react'
import { iconList } from '@/constants/icons'
  
function IconList() {
    const [openDialog, setOpenDialog] = useState(false)
    const Icon = ({ name, color, size,rotate }) => {
        const LucidIcon = icons[name];
        if (!LucidIcon) {
          return;
        }
        return <LucidIcon color={color} size={size} style={{transform:`rotate(${rotate}deg)`
      }} />;
      };
  return (
    <div>
        <div>
        <label>Icon</label>
        <div
        onClick={()=> setOpenDialog(true)}
         className="p-3 cursor-pointer my-2 bg-gray-200 rounded-md w-[50px] h-[50px] flex items-center justify-center">
          <Smile />
        </div>
        </div>
        <Dialog open={openDialog}>
  <DialogTrigger>Open</DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Pic your fav Icon</DialogTitle>
      <DialogDescription>
       <div>
        {iconList.map((icon,index)=>
    {
        <div>
            <Icon name={icon} color={'#000'} size={20}/>
        </div>
    })

        }
       </div>
      </DialogDescription>
    </DialogHeader>
  </DialogContent>
</Dialog>

    </div>
  )
}

export default IconList