import { useContext } from "react";
import { StoreContext } from "../../../context/StoreContext";
import type { Cars } from "../../../Interface/DataModel";

function Explore(){

    const {cars,quantities,decreaseQuantity,increaseQuantity}=useContext(StoreContext)

    return (
        <>
            <div>
                {
                    cars.map((car:Cars)=>
                        <div  key={car.carId}>
                            {
                                quantities?
                                (
                                    <div>
                                    <button className="bg-blue-400" onClick={()=>decreaseQuantity(car.carId)}>Decrease</button>
                                    <button className="bg-blue-400" onClick={()=>increaseQuantity(car.carId)}>Increase</button>
                                    </div>
                                ):
                                (
                                    <button type="button" className="bg-blue-400" onClick={()=>increaseQuantity(car.carId)}>Increase</button>
                                )
                            }
                        </div>
                    )
                }            
            </div>
        </>
    )
}
export default Explore;