import axios from 'axios';

export const axiosWithAuth = () =>{
    const token =localStorage.getItem("token");
    return axios.create({
      headers: {
        Authorization: token,
      },
     baseURL: "https://reqres.in",
    // baseURL:" https://african-market-117-be.herokuapp.com"
    });
    
}