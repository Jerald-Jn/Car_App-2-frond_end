function Service({showService,setShowService}:{showService:boolean,setShowService:React.Dispatch<React.SetStateAction<boolean>>}){
    console.log(showService);
    return (
        <>
        { showService &&
            (
                <div className="w-32 absolute transform flex flex-col top-0 md:right-1/2 -translate-x-44  md:px-2 md:pb-2 bg-white/80" onMouseLeave={()=>{setShowService(false)}}>
                    <div><a href="" className="text-black text-sm font-medium tracking-wide">Service</a></div>
                    <div><a href="" className="text-black text-sm font-medium tracking-wide">Safety Recall</a></div>
                </div>
        
            )
        }
        </>
    );
}
export default Service;