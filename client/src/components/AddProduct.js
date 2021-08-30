import {useState} from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import {useHistory,useRouteMatch} from 'react-router-dom';
// let { path, url } = useRouteMatch();
const AddProduct = () => {
    let {register,handleSubmit,formState:{ errors }}=useForm()
    let [file,setFile] = useState(null)
    let history = useHistory()
    let { url } = useRouteMatch();
    
    const onFileSelect=(e)=>{
        setFile(e.target.files[0])
    }
    let onAddprodFormSubmit= async (productObj)=>{
        //create formData obj
        let formData= new FormData();
        //append image to it
        formData.append('prodImg',file,file.name)
        //append productObj
        formData.append('productObj',JSON.stringify(productObj))
        //HTTP POST
        let response = await axios.post("/products/addproduct",formData)
        alert(response.data.message)
        history.push(`${url}/Products`)
       
    }
    return (
        <div className="row mt-5">
            {/* <h5 className="text-danger text-center">{userRegisterStatus}</h5> */}
            <form action="" className="col-11 col-sm-8 col-md-6 mx-auto" onSubmit={handleSubmit(onAddprodFormSubmit)}>
                {/* pid */}
                <div className="form-floating mb-3">
                    <input type="number" className="form-control" id="pid" placeholder="Product id"
                    {...register("pid",{required:true})}
                    />
                    <label for="pid">Product ID</label>
                </div>
                {errors.pid?.type==='required' && <p className="alert alert-danger">Product ID is required</p>}
                {/* productname */}
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="productname" placeholder="product name"
                    {...register("productname",{required:true})}
                    />
                    <label for="productname">Product Name</label>
                </div>
                {errors.productname?.type==='required' && <p className="alert alert-danger">Product Name is required</p>}
                {/* productDesp */}
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="prodDesp" placeholder="product description"
                    {...register("prodDesp",{required:true})}
                    />
                    <label for="prodDesp">Product Description</label>
                </div>
                {errors.prodDesp?.type==='required' && <p className="alert alert-danger">Product description is required</p>}
                {/* productPrice */}
                <div className="form-floating mb-3">
                    <input type="number" className="form-control" id="prodPrice" placeholder="10000"
                    {...register("prodPrice",{required:true})}
                    />
                    <label for="prodPrice">Price</label>
                </div>
                {errors.prodPrice?.type==='required' && <p className="alert alert-danger">Price is required</p>}
                {/* prodImage */}
                <div className="form-floating mb-3">
                    <input type="file" className="form-control" id="prodImg" name="prodImg"
                    onChange={onFileSelect}
                    />
                   
                </div>
               
                <button className="btn btn-success">Add</button>
            </form>
        </div>
    );
};

export default AddProduct;