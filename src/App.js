import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
import './App.css';
import Home from './components/home/Home'
import Contact from './components/contactus/Contact'
import Login from './components/login/Login'
import Register from './components/register/Register'
import TripPackage from './components/trippackage/TripPackage';
 
import ColorChange from './components/BGcolor'


function App() {
  return (
    <div className="App">
     
     <Router>

        <nav className="navbar navbar-expand-lg navbar-light bg-primary">
        {/* <Link to="/" className="navbar-brand" href="#">Home</Link> */}
        <img src="/logo.png" className="navbar-brand" alt="MyTrip" height="70px"></img>
        {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button> */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link to="/" className="nav-link" href="#">Home </Link>
            </li>
            <li className="nav-item active">
              <Link to="/contactus" className="nav-link" href="#">Contact Us </Link>
            </li>
            <li className="nav-item active">
              <Link to="/packages" className="nav-link" href="#">Trip Packages </Link>
            </li>
            <li className="nav-item active">
              <Link to="/login" className="nav-link" href="#">Login</Link>
            </li> 
            <li className="nav-item active">
              <Link to="/register" className="nav-link " href="#">Register</Link>
            </li>
          </ul>
        </div>
      </nav>
      

     <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/contactus" component={Contact}/>
        <Route path="/login" component={Login}/>
        <Route path="/packages" component={TripPackage}/>
        <Route path="/register" component={Register}/>
      </Switch>


     </Router>

    
    </div>
  );
}

// function App(){
//   return(
//     <div className="App">
//       <ColorChange/>

//     </div>
//   )
// }

export default App;