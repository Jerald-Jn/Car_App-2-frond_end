import { Link } from "react-router-dom";

function Footer() {
    return (
        <>
        {/* Footer Navigation */}
            <div className='bg-black/80 md:w-full text-white/60 '>
                <div className=' md:ml-24 pb-10 md:w-2/5 w-full'>
                    <div className=''>
                        <ul className="grid grid-cols-3 py-2 border-b-2 md:py-5 md:gap-0 gap-2 md:grid-cols-6 text-center uppercase text-xs font-semibold ">
                            <li className='border-r-2   border-white/50 md:text-start hover:text-white/40'>
                                <Link to={''}>Contact Us</Link>
                            </li>
                            <li className='border-r-2 border-white/50 hover:text-white/40'>
                                <Link to={''}>Search</Link>
                            </li>
                            <li className='md:border-r-2 md:w-28 md:border-white/50 hover:text-white/40'>
                                <Link to={''}>Announcement</Link>
                            </li>
                            <li className='border-r-2 md:w-28 md:ml-2 border-white/50 hover:text-white/40'>
                                <Link to={''}>Legal Notice</Link>
                            </li>  
                            <li className='border-r-2 md:ml-5 border-white/50 hover:text-white/40'>
                                <Link to={'/help'}>Help</Link>
                            </li>
                            <li className='md:border-r-2  md:border-white/50 hover:text-white/40'>
                                <Link to={''}>Site Map</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="grid grid-cols-1 grid-flow-row md:grid-cols-3">
                        {/* Top Section */}
                        <div className="flex flex-col items-center  md:ml-0 md:items-start" > 
                        <h2 className="text-lg font-bold font-serif uppercase mt-2 tracking-wide">Top Sections</h2>
                        <ul className="mt-1 text-xs font-medium uppercase tracking-widest">
                            <li className="py-1 md:text-start text-center hover:text-white/40">
                                <Link to={''}>Price List</Link>
                            </li>
                            <li className="py-1 md:text-start text-center hover:text-white/40">
                                <Link to={''}>EBook</Link>
                            </li>
                            <li className="py-1 md:text-start text-center hover:text-white/40">
                                <Link to={''}>Find ADealer</Link>
                            </li>
                            <li className="py-1 md:text-start text-center hover:text-white/40">
                                <Link to={''}>Test Drive</Link>
                            </li>
                            <li className="py-1 md:text-start text-center hover:text-white/40">
                                <Link to={''}>Brochure</Link>
                            </li>
                            <li className="py-1 md:text-start text-center hover:text-white/40">
                                <Link to={''}>Exchange</Link>
                            </li>
                        </ul>
                        </div>

                        <div className="grid grid-cols-1 grid-flow-row mt-2">
                            <div className="flex flex-col md:items-start items-center">
                            <h2 className=" text-lg font-bold font-serif uppercase">Quik Links</h2>
                                <ul className="mt-1 text-xs font-medium uppercase tracking-widest">
                                <li className="py-1 md:text-start text-center hover:text-white/40">
                                    <Link to={''}>ABOUT US</Link>
                                </li>
                                <li className="py-1 md:text-start text-center hover:text-white/40">
                                    <Link to={''}>FEEDBACK/QUERIES</Link>
                                </li>
                            </ul>
                            </div>
                            <div className="flex flex-col md:items-start items-center md:-mt-2 mt-2">
                            <h2 className="text-lg font-bold font-serif uppercase ">MORE</h2>
                                <ul className="mt-1 text-xs font-medium uppercase tracking-widest">   
                                    <li className="py-1 md:text-start text-center hover:text-white/40">
                                        <Link to={''}>HEALTH & SAFETY</Link>
                                     </li>
                                <li className="py-1 md:text-start text-center hover:text-white/40">
                                    <Link to={''}>POLICY</Link>
                                </li>
                                <li className="py-1 md:text-start text-center hover:text-white/40">
                                    <Link to={''}>START YOUR</Link>
                                </li>
                                <li className="py-1 md:text-start text-center hover:text-white/40">
                                    <Link to={''}>IMPOSSIBLE</Link>
                                </li>
                            </ul>
                            </div>
                        </div>

                        <div className="flex flex-col md:ml-0 md:items-start items-center">
                        <h2 className="text-lg font-bold font-serif uppercase mt-2 ">MEDIA</h2>
                        <ul className="mt-1 text-xs font-medium uppercase tracking-widest">   
                            <li className="py-1 md:text-start text-center hover:text-white/40">
                                <Link to={''}>PRESS RELEASE</Link>
                            </li>
                            <li className="py-1 md:text-start text-center hover:text-white/40">
                                <Link to={''}>ARTICLES/REVIEWS</Link>
                            </li>
                            <li className="py-1 md:text-start text-center hover:text-white/40">
                                <Link to={''}>SPOKESPERSONS</Link>
                            </li>
                            <li className="py-1 md:text-start text-center hover:text-white/40">
                                <Link to={''}>IMAGES</Link>
                            </li>
                            <li className="py-1 md:text-start text-center hover:text-white/40">
                                <Link to={''}>CUSTOMER</Link>
                            </li>
                            <li className="py-1 md:text-start text-center hover:text-white/40">
                                <Link to={''}>STORIES</Link>
                            </li>
                            <li className="py-1 md:text-start text-center hover:text-white/40">
                                <Link to={''}>AWARDS</Link>
                            </li>
                            <li className="py-1 md:text-start text-center hover:text-white/40">
                                <Link to={''}>DREAM CAR</Link>
                            </li>
                            <li className="py-1 md:text-start text-center hover:text-white/40">
                                <Link to={''}>CONTEST</Link>
                            </li>
                        </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Footer;