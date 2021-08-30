import React from 'react';
import {useParams,useRouteMatch,BrowserRouter,NavLink,Route,Switch} from 'react-router-dom'
import Products from './Products'
import AddProduct from './AddProduct';
const AdminDashboard = () => {
    let {username} = useParams()
    let { path, url } = useRouteMatch();
    let activeLinkStyles = {
        
        backgroundColor:"#FFC300"
    }

    return (
        <div>
        <h5 className="text-end">Welcome,<span className="text-warning">{username}</span>!</h5>        
        <BrowserRouter>
            <ul className="nav nav-pills d-flex justify-content-between">
            <li className="nav-item">
        <NavLink activeStyle={activeLinkStyles} className="nav-link ms-4" to={`${url}/Products`}>Products</NavLink>
      </li>
      <li className="nav-item ">
        <NavLink activeStyle={activeLinkStyles} className="nav-link me-4" to={`${url}/AddProduct`}>Add Product</NavLink>
      </li>
    </ul>
            <Switch>
            <Route path={`${path}/Products`}>
        <Products/>
      </Route>
      <Route path={`/admindashboard/admin/AddProduct/Products`}>
        <Products/>
      </Route>
      <Route path={`${path}/AddProduct`}>
        <AddProduct/>
      </Route>
            </Switch>
        </BrowserRouter>

        </div>
    );
};

export default AdminDashboard;