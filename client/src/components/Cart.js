import React from 'react';
import { useEffect,useState } from 'react';
import axios from 'axios'
import { useSelector } from 'react-redux';
import getAxiosWithTokenObj from '../Auth-req/AxiosReqWithToken';
const Cart = () => {
    let axiosReqWithToken = getAxiosWithTokenObj()
    let [products,setProducts]=useState([])
    useEffect(async ()=>{
        try{
            let response = await axiosReqWithToken.get("/carts/getproduct")
            let allProducts=response.data;
            console.log("products in cart",allProducts);
        if(allProducts.message === "success")
            setProducts([...allProducts.payload])
        else{
            alert(allProducts.message)
            
        }
        }catch(e){
            console.log(e);
        }
    },[])
    let deleteCart=(id)=>{}
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
                                    <h3>{p.prodPrice}<span><button className="btn btn-danger btn-sm float-end" onClick={()=>{deleteCart(p.pid)}}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
  <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
</svg></button></span></h3>
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

export default Cart;