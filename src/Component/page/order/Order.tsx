import { useContext, useEffect, useState } from "react";
import { StoreContext } from "../../../context/StoreContext";
import type { Cars } from "../../../Interface/DataModel";
import { useNavigate } from "react-router-dom";
import { calculateOrder } from "./CalculateOrder";

function Order(){

    const {cars,quantities,setQuantities,increaseQuantity,decreaseQuantity}=useContext(StoreContext);
    const [searchText, setSearchText]=useState('');
    const navigate=useNavigate();
    

    const cartItems=cars.filter((car:Cars)=>quantities[car.carId]>0);
    const calculateOrderResponse=calculateOrder(cartItems,quantities);

    const onchangeHandler=(event:any)=>{
        setSearchText(event.target.value);
        console.log(event.target.value)
    }

    const clearCarQuantity=(carId:string)=>{
        setQuantities((preQuantity: any)=>{
            const temp={...preQuantity};
            delete temp[carId];
            return temp;
        })
    }

    const goToCheckout=()=>{
        console.log(500*0.1)
        navigate('/checkout')
    }

    useEffect(()=>{

    },[])

    return (
        <>
        <h1>Add Cart</h1>

        <input className="border-2 border-red-500" type="text" name="searchText" value={searchText} 
            onChange={()=>onchangeHandler(event)} />
            <div className="min-h-screen">
                

                {
                    cartItems.map((car:Cars)=>{
                        <div className="mt-5">
                            <div>
                                <div>
                                    <button className="bg-blue-400" onClick={()=>decreaseQuantity(car.carId)}>Decrease</button>
                                    <button className="bg-blue-400" onClick={()=>increaseQuantity(car.carId)}>Increase</button>
                                    </div>
                                    <button className="bg-blue-600" onClick={()=>clearCarQuantity(car.carId)}>delete</button>
                            </div>
                                    
                            
                        </div>
                        }
                    )
                }
                <button className="bg-slate-500" type="submit" onClick={()=>goToCheckout}>Pay</button>
            </div> 
        </>
    )
}
export default Order;