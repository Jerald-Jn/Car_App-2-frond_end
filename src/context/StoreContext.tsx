import { createContext, useEffect, useState} from "react";
import type { Cars } from "../Interface/DataModel";
import { getListOfCars } from "../Api";

export const StoreContext=createContext<null | any>(null);

export const StoreContextProvider=(props:any)=>{
    const [showProducts,setShowProducts]=useState(false)
    const [showService,setShowService]=useState(false)
    const [menu,setMenu]=useState(false);
    const [cars,setCars]=useState<Cars[]>([]);
    const [catagory,setCatagory]=useState('All');
    const [quantities,setQuantities]=useState({});

    const increaseQuantity=(carId:string)=>{
        setQuantities((pre:any)=>(
            {...pre,
            [carId]:(pre[carId] || 0)+1
            }
        ));
        }

    const decreaseQuantity=(carId:string)=>{
        setQuantities(
            (pre:any)=>(
                {...pre,[carId]:pre[carId]>0? pre[carId]-1:0}
            )
        )
    }
    
    const propsData={
        showProducts, setShowProducts,
        showService, setShowService,
        menu, setMenu,
        cars, setCars,
        catagory,setCatagory,
        quantities,setQuantities,
        decreaseQuantity,increaseQuantity
    }

    useEffect(()=>{
        const loadData=async()=>{
        const carListResponse=await getListOfCars();
        setCars(carListResponse);
        }
        loadData();
    },[])
    
    return (
        <StoreContext.Provider value={propsData}>
            {props.children}
        </StoreContext.Provider>
    )
}