const axios = require('axios');
interface User {
    address: {
        address: string; 
        city: string; 
        coordinates: {
            lat: number; 
            lng: number;
        }
        country: string;
        state: string;
        stateCode: string; 
    };
    age: number; 
    bank: {
        cardExpire: string;
        cardNumber: string;
        cardType: string; 
        currency: string;
        iban: string;
    };
    birthDate: string;
    bloodGroup: string;
    company: {
        address:{
        address: string; 
        city: string; 
        coordinates: {
            lat: number; 
            lng: number;
        }
        country: string;
        state: string;
        stateCode: string; 
        };
        departament: string; 
        name: string; 
        title: string; 
    }; 
    crypto: {
        coin: string;
        network: string; 
        wallet: string;
    };
    ein: string;
    email: string;
    eyeColor: string; 
    firstname: string; 
    gender: string;
    hair: {
        color: string; 
        type: string;
    };
    height: number; 
    id: number;
    image: string;
    ip: string; 
    lastname: string;
    macAddress: string; 
    maidenName: string; 
    password: string;
    phone: string;
    role: string; 
    ssn: string; 
    university: string; 
    userAgent: string;
    username: string; 
    weight: number;
}
async function request(){
    try{
        const response = await axios.get('https://dummyjson.com/users');
        const data = response.data;
        console.log(data);
    }catch(e){
        console.error(e);
    }
};
request();