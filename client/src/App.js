import { BrowserRouter,NavLink,Route,Switch } from 'react-router-dom'
import Register from './components/Register';
import Login from './components/Login'
import Home from './components/Home';
import UserDashboard from './components/UserDashboard';
import AdminDashboard from './components/AdminDashboard'
import {useSelector,useDispatch} from 'react-redux';
import {clearLoginStatus} from './redux_store/userSlice'
function App() {
  let activeLinkStyles={
    fontWeight: "bold",
    color: "red"
  }
  let dispatch = useDispatch()
  const onUserLogout=()=>{
    //remove token from local storage
    localStorage.clear();
    dispatch(clearLoginStatus())
  }
  let {isSuccess} = useSelector(state=>state.user)
  return (
    <BrowserRouter>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand bg-warning p-0" href="#">realme</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mb-2 mb-lg-0 ms-auto">
        {!isSuccess?
        <>
            <li className="nav-item">
          <NavLink activeStyle={activeLinkStyles} className="nav-link active" to="/Home"><i class="fas fa-home"></i><span>Home</span></NavLink>
        </li>
        <li className="nav-item">
          <NavLink activeStyle={activeLinkStyles} className="nav-link" to="/Login">Login</NavLink>
        </li>
        <li className="nav-item">
          <NavLink activeStyle={activeLinkStyles} className="nav-link" to="/Register">Register</NavLink>
        </li>
        </>:
        <>
        
        <li className="nav-item">
          <NavLink activeStyle={activeLinkStyles} className="nav-link text-white" to="/Login" onClick={onUserLogout}><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-power" viewBox="0 0 16 16">
  <path d="M7.5 1v7h1V1h-1z"/>
  <path d="M3 8.812a4.999 4.999 0 0 1 2.578-4.375l-.485-.874A6 6 0 1 0 11 3.616l-.501.865A5 5 0 1 1 3 8.812z"/>
</svg></NavLink>
        </li>
        </>
        }
        
        
      </ul>
      
    </div>
  </div>
</nav>
<Switch>
  <Route path='/Home'>
    <Home/>
  </Route>
  <Route path='/Login'>
    <Login/>
  </Route>
  <Route path='/Register'>
    <Register/>
  </Route>
  <Route path='/userdashboard/:username'>
    <UserDashboard/>
  </Route>
  <Route path='/admindashboard/:username'>
    <AdminDashboard/>
  </Route>
</Switch>
    </BrowserRouter>
  );
}

export default App;
