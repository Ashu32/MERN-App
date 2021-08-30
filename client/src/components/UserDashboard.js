import React from 'react';
import {useParams,useRouteMatch,BrowserRouter,NavLink,Route,Switch} from 'react-router-dom'
import Cart from './Cart'
import Products from './Products';
import { useSelector,useDispatch } from 'react-redux';
import {incrementCounter} from './../redux_store/cartCountSlice'
const UserDashboard = () => {
    let {username} = useParams()
    let {userObj}=useSelector(state=>state.user)
    let countFromStore = useSelector((state)=>state.cartCount.value)
    let dispatch =useDispatch()
    let increment = ()=>{
      dispatch(incrementCounter())
    }
    let { path, url } = useRouteMatch();
    let activeLinkStyles = {
        
        backgroundColor:"#FFC300"
    }

    return (
        <div>
        <h5 className="text-end">Welcome,<span className="text-warning">{username}</span>!<span><img src={userObj.image} alt="img" width="40" height="40"/></span></h5>        
        <BrowserRouter>
            <ul className="nav nav-pills d-flex justify-content-between">
            <li className="nav-item">
        <NavLink activeStyle={activeLinkStyles} className="nav-link ms-4" to={`${url}/Products`}>Products</NavLink>
      </li>
      <li className="nav-item ">
        <NavLink activeStyle={activeLinkStyles} className="nav-link me-4 position-relative" to={`${url}/Cart`}><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-cart4" viewBox="0 0 16 16">
            <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>
            </svg><span className="position-absolute top-5 start-90 translate-middle badge rounded-pill bg-danger">{countFromStore}</span></NavLink>
      </li>
    </ul>
            <Switch>
            <Route path={`${path}/Products`}>
        <Products increment={increment}/>
      </Route>
      <Route path={`${path}/Cart`}>
        <Cart/>
      </Route>
            </Switch>
        </BrowserRouter>

        </div>
    );
};

export default UserDashboard;