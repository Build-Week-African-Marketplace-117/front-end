import axios from 'axios';

export const axiosWithAuth = () =>{
    const token =localStorage.getItem("token");
    return axios.create({
      headers: {
        Authorization: token,
      },
      baseURL: "https://african-market-117-back-end.herokuapp.com/api",
    });
    
}