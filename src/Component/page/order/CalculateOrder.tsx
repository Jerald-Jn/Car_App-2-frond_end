import type { Cars } from "../../../Interface/DataModel";

export const calculateOrder=(cartItems:Cars[],quantities:any)=>{
    const subTotal=cartItems.reduce((acc:any,car:Cars)=>acc+car.price+quantities[car.carId],0);
    const shipping=subTotal==0?0.0:10;
    const tax=subTotal*0.1; //10% tax
    const total=subTotal+shipping+tax;
    return {
        subTotal,shipping,tax,total
    }
}