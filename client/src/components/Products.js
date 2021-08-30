import {useHistory } from 'react-router-dom'
import {useState,useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { clearLoginStatus } from './../redux_store/userSlice';
import getAxiosWithTokenObj from '../Auth-req/AxiosReqWithToken';
import axios from 'axios';
import {history} from '../Auth-req/customHistory'
const Products = (props) => {
   let axiosReqWithToken = getAxiosWithTokenObj()
    let [products,setProducts]=useState([])
    
    let dispatch = useDispatch()
    // let history=useHistory()
    useEffect(async ()=>{
        
        try{
        let response = await axiosReqWithToken.get("/products/getproduct")
        
        let allProducts=response.data;
        if(allProducts.message === "success")
            setProducts([...allProducts.payload])
        else{
            alert(allProducts.message)
            localStorage.clear();
            //redirect to login
            history.push("/login")
            dispatch(clearLoginStatus())
           
            // window.location.reload()
        }
        }catch(e){
            console.log("error is",e);
            alert("something went wrong")
        }
    },[])
    const addCart = (id)=>{
        props.increment()
        
        let f = products.find(({pid})=>pid === id)
        console.log(f);
        const sendToCart = async ()=>{
            let response = await axios.post("/carts/addtocart",f)
            console.log(response);
        }
        sendToCart()
    }
    return (
        <div>
            
            <div className="container bg-light">
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                {
                    products.map((p,index)=>{
                        return( 
                        <div className="col" key={index}>
                            <div className="card mt-4">
                                <img src={p.image} alt="img" className="img-fluid d-block mx-auto" style={{maxHeight: "450px", maxWidth: "250px"}}/>
                                <div className="card-body">
                                    <h3>{p.productname}</h3>
                                    <p className="card-text">
                                        {p.prodDesp}
                                    </p>
                                    <h3>{p.prodPrice}<span><button className="btn btn-warning btn-sm float-end" onClick={()=>{addCart(p.pid)}}>Add to Cart</button></span></h3>
                                </div>
                            </div>
                        </div>
                        )
                    })
                }
                
            </div>
            </div>
        </div>
    );
};

export default Products;