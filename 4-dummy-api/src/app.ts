const axios = require('axios');
enum GENDER {
    MALE = 'male', 
    FEMALE = 'female',
    OTHER = 'other'
}
interface Users {
    id: number;
    firstname: string; 
    lastname: string;
    maidenName: string; 
    age: number; 
    gender: GENDER;
    email: string; 
    phone: string;
    username: string; 
    password: string;
    birthDate: string;
    image: string;
    bloodGroup: string;
    height: number; 
    weight: number;
    eyeColor: string; 
    hair: {
        color: string; 
        type: string;
    };
    ip: string; 
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
    macAddress: string; 
    university: string; 
    bank: {
        cardExpire: string;
        cardNumber: string;
        cardType: string; 
        currency: string;
        iban: string;
    };
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
    ein: string;
    ssn: string; 
    userAgent: string;
    crypto: {
        coin: string;
        network: string; 
        wallet: string;
    };
    role: string; 
}
interface UserResponse{
    users: Users[],
    total: number, 
    skip: number, 
    limit: number
}
async function request(): Promise<UserResponse>{
    try{
        const response = await axios.get('https://dummyjson.com/users');
        const data = response.data;
        console.log(data);
        return data;
    }catch(error){
        console.error(error);
        throw error;
    }
};
request();