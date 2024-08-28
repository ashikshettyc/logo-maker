import { useState } from "react";
import "./App.css";

import Header from "./components/header";
import SideNav from "./components/SideNav";
import BackgroundController from "./components/ui/BackgroundController";
import IconController from "./components/ui/IconController";
import LogoPreview from "./components/LogoPreview";
import { updateStorageContext } from "./context/UpdateStorageContext";
function App() {
  const [selectedIndex, setSelectedIndex] = useState(1)
  const [updateStorage, setUpdateStorage] = useState({})
  return (
    <updateStorageContext.Provider value={{updateStorage, setUpdateStorage}}>
      <Header />
      <div className="w-64 fixed">
        <SideNav selectedIndex={(value) => setSelectedIndex(value)} />
      </div>
      <div className="ml-64 grid grid-cols-1 md:grid-cols-6 fixed">
        <div className="md:col-span-2 border h-screen shadow-sm p-5 overflow-auto">
          {selectedIndex === 1 ? <IconController/> : <BackgroundController/>}          
        </div>
        <div className="md:col-span-3">
         <LogoPreview/>
        </div>
        <div className="">
          Ads banner
        </div>
      </div>
      </updateStorageContext.Provider>
  );
}

export default App;
