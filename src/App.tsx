import { Route, Routes } from 'react-router-dom';
import Add_Car from './Component/addCar/Add_Car';
import Car from './Component/page/carPage/Car';
import CarService from './Component/page/carService/CarService';
import Explore from './Component/page/explore/Explore';
import Footer from './Component/page/footer/Footer';
import Header from './Component/page/header/Header';
import Help from './Component/page/help/Help';
import Home from './Component/page/home/Home';
import Login from './Component/page/login/Login';
import UserDetails from './Component/page/userPage/UserDetails';
import { StoreContextProvider } from './context/StoreContext';
import Checkout from './Component/page/order/checkout/Checkout';
import Order from './Component/page/order/Order';


function App() {

  return (
  <>
  <StoreContextProvider>
  {/* Header Component */}
   { <Header></Header> }

  <Routes>
    <Route path="/login" element={<Login />} />
    <Route path="/" element={<Home />}></Route>
    <Route path='/userDetails' element={<UserDetails />}></Route>
    <Route path='/car/:model' element={<Car />}></Route>
    <Route path='/carservice' element={<CarService />}></Route>
    <Route path='/help' element={<Help  />}></Route>
    <Route path='/addCar' element={<Add_Car/>}></Route>
    <Route path='/checkout' element={<Checkout></Checkout>}></Route>
    <Route path='/explore'  element={<Explore></Explore>}></Route>
    <Route path='/order' element={<Order></Order>}></Route>
  </Routes>

  {/* Footer Section */}
  {<Footer /> }
  </StoreContextProvider>
  </>
  );
}

export default App
