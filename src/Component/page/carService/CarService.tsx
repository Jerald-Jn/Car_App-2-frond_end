import { useContext } from "react";
import { StoreContext } from "../../../context/StoreContext";
import Menubar from "../header/Menubar";
import Products from "../header/Products";
import Services from "../header/Services";

function CarService(){

  const {showProducts,showService,menu}=useContext(StoreContext);
    return (
        <>
        <div className="relative">
        {/* Menu bar for small screen */}
          { menu &&
            <Menubar />
          
          }
        {   
        showProducts && <Products ></Products> 
        }
        {   showService && <Services ></Services>}
        <img className="relative" src="./src/assets/wp9875339.jpg" alt="service img" />
        <h1 className="absolute transform top-2">Service</h1>
        </div>
        </>
    );
}
export default CarService;