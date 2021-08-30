import React, { useEffect,useState } from 'react';
import { useForm } from 'react-hook-form'
import { useSelector,useDispatch } from 'react-redux';
import {userLogin} from './../redux_store/userSlice';
import {useHistory} from 'react-router-dom'
const Login = () => {
    let {register,handleSubmit,formState:{ errors }}=useForm()
    let {userObj,isSuccess,isError,isLoading,invalidLoginMessage}=useSelector(state=>state.user)
    
    let dispatch = useDispatch()
    let history = useHistory()
    
    let [userCredentialsObj,setUserCredentialObj] = useState({
        userType:'',
        username:'',
        password:''
    });
    
    let onLoginFormSubmit = (userCredentialObj)=>{
        
        setUserCredentialObj({...userCredentialObj})
        dispatch(userLogin(userCredentialObj))

    }
    useEffect(()=>{
        //one method
        // if(isSuccess && userObj.username === "admin"){
        //     //navigate to userdashboard
        //     history.push(`/admindashboard/${userObj.username}`)
        // }
        // else if(isSuccess && userObj.username !== "admin"){
        //     history.push(`/userdashboard/${userObj.username}`)
        // }
        //another method
        
        if(isSuccess === true && userCredentialsObj.usertype==="user"){
            
            history.push(`/userdashboard/${userCredentialsObj.username}`)
        }
            
        if(isSuccess === true && userCredentialsObj.usertype === "admin"){
            
            history.push(`/admindashboard/${userCredentialsObj.username}`)
        }
    },[isSuccess,userCredentialsObj])
    return (
        <div className="row mt-5">
            {invalidLoginMessage && <h5 className="text-danger text-center">{invalidLoginMessage}</h5>}
            <form action="" className="col-11 col-sm-8 col-md-6 mx-auto" onSubmit={handleSubmit(onLoginFormSubmit)}>
                <div className="form-group mb-3">
                    <input type="radio" name="usertype" id="admin" className="form-check-input" value="admin" {...register("usertype")}/>
                    <label htmlFor="admin" className="form-check-label">Admin</label>
                    <input type="radio" name="usertype" id="user" className="form-check-input ms-3" value="user" {...register("usertype")}/>
                    <label htmlFor="user">User</label>
                </div>
                {/* username */}
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="username" placeholder="Your username"
                    {...register("username",{required:true,minLength:5})}
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
                
                
                
                <button className="btn btn-success">Login</button>
            </form>
            </div>
    );
};

export default Login;