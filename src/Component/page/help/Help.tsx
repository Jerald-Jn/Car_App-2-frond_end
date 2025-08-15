import { useContext } from "react";
import { StoreContext } from "../../../context/StoreContext";
import Menubar from "../header/Menubar";
import Products from "../header/Products";
import Services from "../header/Services";

function Help(){
    const {showProducts,showService,menu}=useContext(StoreContext);
    return (
        <>
        <div className="relative">

        {/* Menu bar for small screen */}
                { menu &&
                    <Menubar  />
                }
                {/* When we hover on Product is render "Products" component */}
                {
                    showProducts && (<Products />)
                }
                {/* When we hover on Service is render "Service" component */}
                {
                    showService && (<Services  />)
                }
        <h1>Help</h1>
        </div>
        </>
    );
}
export default Help;