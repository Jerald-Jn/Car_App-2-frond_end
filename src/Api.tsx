import axios from "axios";

const API="http://localhost:8080";

// Users Api
export const loginApi=(userName:string,password:string)=>axios.post(`${API}/login?userName=${userName}&password=${password}`);

//Car Api
export const getListOfCars=async()=>{
    try {
        return (await axios.get(`${API}/cars/getListOfCars`)).data;
    } catch (error) {
        throw error;
    }
}
export const getCarByCarName=()=>{return axios.get(`${API}/cars/get/Petrol/Auto`);}
export const getCarImage=(model:any,color:string)=>{ return axios.get(`${API}/cars/get/${model}/${color}`)};
export const getCarByModel=(model:any)=>{ return axios.get(`${API}/cars/get/${model}`)};
export const getCars=()=>axios.get(`${API}/cars`);
export const addCar_Api=(formData:FormData)=>{ return axios.post(`${API}/add`,formData,{
    headers:{
        "Content-Type":"multipart/form-data"
    }
});
}
