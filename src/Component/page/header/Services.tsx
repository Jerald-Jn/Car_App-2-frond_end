import { useContext } from "react";
import { Link } from "react-router-dom";
import { StoreContext } from "../../../context/StoreContext";

function Services(){
    
    const {showService,setShowService}=useContext(StoreContext);

    return (
        <>
        { showService &&
            (
                <div className="md:w-32 w-full absolute transform flex-col  md:top-0 top-36 md:left-44 md:translate-x-3/4  px-6 md:px-5 md:pb-2 bg-white/80" onMouseLeave={()=>{setShowService(false)}}>
                    <div><Link to={{pathname:'/carservice'}} className="text-black text-sm font-medium tracking-wide">Service</Link></div>
                    <div><Link to={''} className="text-black text-sm font-medium tracking-wide">Safety Recall</Link></div>
                </div>
        
            )
        }
        </>
    );
}
export default Services;