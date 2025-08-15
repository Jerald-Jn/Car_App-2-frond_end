import { Link } from "react-router-dom";
import type { Cars } from "../../../Interface/DataModel";
import { useContext } from "react";
import { StoreContext } from "../../../context/StoreContext";

function Products() {
    
    const {cars,showProducts,setShowProducts}=useContext(StoreContext);
    return (
        <>
            {
            showProducts &&
                (
                <div className=" absolute transform top-0 bg-white w-full" 
                    onMouseEnter={() => { setShowProducts(true) }}  
                    onMouseLeave={() => { setShowProducts(false) }}>
                    <ul className="space-x-5 mb-5 grid grid-cols-2 grid-flow-row md:grid-cols-5 w-full items-center ">

                    { cars.map((item:Cars)=>{
                        console.log(item.model)
                        return(
                            <Link key={item.carId} to={`/car/${item.model}`} className="m-5 hover:underline hover:underline-offset-4">
                            <li className="flex flex-col items-center">
                                <img className="h-3/4 w-2/4" src={item.car_logo} alt="" />
                                <p className="font-semibold text-center uppercase text-sm">{item.model}</p>
                            </li>
                        </Link>
                    )   
                    })
                    }
                        
                    </ul >
                </div >
                )
            }
        </>
    );
}
export default Products;