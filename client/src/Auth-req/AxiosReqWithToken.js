 import axios from 'axios'

 const getAxiosWithTokenObj=()=>{
 //Get token
 let token=localStorage.getItem("token")
 //add token to headers of req object
 let apiURL="http://localhost:4000"
 let axiosReqWithToken = axios.create({
     baseURL: apiURL,
     headers:{
         Authorization: `Bearer ${token}`
     }
 })
 return axiosReqWithToken
 }
 export default getAxiosWithTokenObj