import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import { useState } from 'react';
const Register = () => {
    let {register,handleSubmit,formState:{ errors }}=useForm()
    let [file,setFile] = useState(null)
    let [userRegisterStatus,setUserRegisterStatus] = useState("")
    let history = useHistory()
    const onFileSelect=(e)=>{
        setFile(e.target.files[0])
    }
    let onRegisterFormSubmit = async (userObj)=>{

        //create formData obj
        let formData= new FormData();
        //append image to it
        formData.append('profImg',file,file.name)
        //append productObj
        formData.append('userObj',JSON.stringify(userObj))
        //HTTP POST
        let responseObj = await axios.post("/users/register",formData)
        
        let payload = responseObj.data;
        console.log("payload is",payload);
        if(payload.message==="success"){
            //redirect to login
            history.push('/Login')
        }
        else{
            setUserRegisterStatus("Username has already existed!!")
        }
    }
    return (
        <div className="row mt-5">
            <h5 className="text-danger text-center">{userRegisterStatus}</h5>
            <form action="" className="col-11 col-sm-8 col-md-6 mx-auto" onSubmit={handleSubmit(onRegisterFormSubmit)}>
                {/* name */}
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="name" placeholder="Your name"
                    {...register("name",{required:true})}
                    />
                    <label for="name">Name</label>
                </div>
                {errors.name?.type==='required' && <p className="alert alert-danger">Name is required</p>}
                {/* username */}
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="username" placeholder="Your username"
                    {...register("username",{required:true,minLength:6})}
                    />
                    <label for="username">Username</label>
                </div>
                {errors.username?.type==='required' && <p className="alert alert-danger">UserName is required</p>}
                {errors.username?.type==='minLength' && <p className="alert alert-danger">Minimum 6 characters</p>}
                {/* password */}
                <div className="form-floating mb-3">
                    <input type="password" className="form-control" id="password" placeholder="password"
                    {...register("password",{required:true})}
                    />
                    <label for="password">Password</label>
                </div>
                {errors.password?.type==='required' && <p className="alert alert-danger">password is required</p>}
                {/* email */}
                <div className="form-floating mb-3">
                    <input type="email" className="form-control" id="email" placeholder="name@example.com"
                    {...register("email",{required:true})}
                    />
                    <label for="email">Email</label>
                </div>
                {errors.email?.type==='required' && <p className="alert alert-danger">email is required</p>}
                {/* dob */}
                <div className="form-floating mb-3">
                    <input type="date" className="form-control" id="dob" placeholder="01/01/2000"
                    {...register("dob",{required:true})}
                    />
                    <label for="dob">Date of Birth</label>
                </div>
                {errors.dob?.type==='required' && <p className="alert alert-danger">Date of birth is required</p>}

                <div className="form-group mb-3">
                    <label for="profImg">Profile Image</label>
                    <input type="file" className="form-control" id="profImg" name="profImg"
                    onChange={onFileSelect}
                    />
                   
                </div>
                <button className="btn btn-success">Sign up</button>
            </form>
        </div>
    );
};

export default Register;