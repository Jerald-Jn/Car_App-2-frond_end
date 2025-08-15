import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { StoreContext } from "../../../context/StoreContext";
import { getCarByModel } from "../../../Api";
import Menubar from "../header/Menubar";
import Products from "../header/Products";
import Services from "../header/Services";

function Car() {
    
    const {showProducts,showService,menu}=useContext(StoreContext)
    const [image, setImage] = useState();
    let model=useParams();

    useEffect(() => {
        getImage();
        console.log(model)
    }, []
    );

    async function getImage() {
        const tempImage = (await getCarByModel(model)).data;
        console.log(tempImage)
        setImage(tempImage);
        return tempImage;
    }

    return (
        <>
            {/* Header Section */}
            <div className="relative">
                <img src={"./src/assets/car-1.jpg"} alt="car image" />
                {/* Menu bar for small screen */}
                {menu &&
                    <Menubar  />
                }
                {/* When we hover on Product is render "Products" component */}
                {
                    showProducts && (<Products />)
                }
                {/* When we hover on Service is render "Service" component */}
                {
                    showService && (<Services />)
                }
            </div>

            {/* <div>
            <img src={`data:image/jpeg;base64,${getImage('Glanza')}`} alt="car image" />
        </div>
        <div>
            <img src={`data:image/jpeg;base64,${getImage('Legender')}`} alt="car image" />
        </div>
        <div>
            <img src={`data:image/jpeg;base64,${getImage('Rumion')}`} alt="car image" />
        </div> */}
        </>
    )
}
export default Car;