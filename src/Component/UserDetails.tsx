import { useState } from "react";
import Header from "./Header";
import Service from "./Service";
import Products from "./Products";
import { User } from "../Interface/DataModel";

function UserDetails(){

    const [showProducts,setShowProducts]=useState(false);
    const [showService,setShowService]=useState(false);
    console.log(User)

    return (
        <>
        {/* Header navigation section */}
            <Header setShowProducts={setShowProducts} setShowService={setShowService}></Header>
            <div className="relative bg-blue-400">
                <img className="bg-orange-300" src="./src/assets/car-3.jpg" alt="" />
                {
                    showProducts && <Products showProducts={showProducts} setShowProducts={setShowProducts}/>
                }
                {
                    showService && <Service showService={showService} setShowService={setShowService}/>
                }
            </div>

        {/* Hero section */}
        <div>
            <img src="" alt="" />
        </div>
        </>
    )
}
export default UserDetails;