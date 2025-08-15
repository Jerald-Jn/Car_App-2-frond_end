import { useContext } from "react";
import { StoreContext } from "../../../context/StoreContext";


function Menubar(){

  const {showProducts,setShowProducts,showService,setShowService}=useContext(StoreContext)
    return (
        <>
        <div className="md:hidden absolute top-0 pl-6 w-full bg-white border-black/10 border-b-2">
              <ul className="flex flex-col space-y-5 my-3  uppercase font-sans text-lg font-semibold relative">
                <li className=" h-10" onMouseEnter={()=>{setShowProducts(!showProducts)}} onMouseLeave={()=>{setShowProducts(!showService)}} >
                  <a >Products</a>
                </li>
          
                <li><a >Visual ShowRoom</a></li>
              
                <li className="bg-blue-500" onMouseEnter={()=>{setShowService(!showService)}} onMouseLeave={()=>{setShowService(!showService)}}>
                  <a >Service</a>
                </li>
              
                <li><a >T-Care</a></li>
              
                <li><a >Used Cars</a></li>
              
                <li><a >Mobility</a></li>
              
                <li><a >Buy Online</a></li>
              
                <li><a >Toyota India</a></li>
              </ul>
            </div>
        </>
    )
}
export default Menubar;