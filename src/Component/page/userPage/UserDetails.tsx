import { useContext } from "react";
import { StoreContext } from "../../../context/StoreContext";
import Menubar from "../header/Menubar";
import Products from "../header/Products";
import Services from "../header/Services";

function UserDetails() {

    const {showProducts,showService,menu}=useContext(StoreContext);

    return (
        <>
            <div className="relative bg-blue-400">
                <img className="bg-orange-300" src="./src/assets/car-3.jpg" alt="" />
                {/* Menu bar for small screen */}
                { menu &&
                    <Menubar  />
                }
                {/* When we hover on Product is render "Products" component */}
                {
                    showProducts && (<Products  />)
                }
                {/* When we hover on Service is render "Service" component */}
                {
                    showService && (<Services />)
                }
            </div>

            {/* Hero section */}
            <div className="w-fit">
                <img src="./src/assets/banner.jpg" alt="" />
            </div>
        </>
    )
}
export default UserDetails;