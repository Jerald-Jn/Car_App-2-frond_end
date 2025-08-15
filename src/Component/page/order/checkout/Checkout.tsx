import { useContext } from "react";
import { StoreContext } from "../../../../context/StoreContext";
import type { Cars } from "../../../../Interface/DataModel";
import { calculateOrder } from "../CalculateOrder";

function Checkout(){
    
    const {cars,quantities}=useContext(StoreContext);
    const userDetails={
            'firstName':'','lastName':'','address':'','city':'','zip':0,'phoneNo':'','email':''
        }

    const cartItems=cars.filter((car:Cars)=>quantities[car.carId]>0);
    const calculateOrderResponse=calculateOrder(cartItems,quantities);

    const payAmount=()=>{
        
    }

    return (
        <>
            <div>
                <form onSubmit={()=>{event?.preventDefault(); payAmount();}}>

                </form>

            </div>
        </>
    )
}
export default Checkout