export const UserInfo={
    phoneNo:'',
    email:'',
    gender:'',
    pincode:'',
    state:'',
    address:''
} 

export const Insurance={
    insuranceExpiryDate:'',
    issueDate:'',
    typeOfInsurance:''
}

export const Car={
    make:"Toyota",
        year:"",
        transmission:"",
        engineCapacity:"",
        mileage:"",
        vin:"",
        model:"",
        fuelType:"",
        price:"",
        color:"",
}

export const User={
    userId:'',
    userName:'',
    password:'',
    userInfo:UserInfo,
    car:Car
}

export interface Cars{
    carId:'',
    make:'Toyota',
    year:'',
    transmission:'',
    engineCapacity:'',
    mileage:'',
    vin:'',
    model:string,
    fuelType:'',
    price:'',
    color:'black',
    car_Image:'',
    car_logo:''
}
