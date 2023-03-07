import { Link } from "react-router-dom";
import './NaviBAR.css';
import logo from './Images/logo.jpeg';


function Navbar() {


  return (
    

    <div className="abc">
      <div className="banner1">
            <div className="logo">
               <img src={logo}alt=""/>
           </div>            
              <div class="nav">
                  
                  
                       <Link className="active" to="/">Home</Link>
                       <Link className="active" to="/aboutus">About Us</Link>
                       <Link className="active" to="/Distribution">Distribution</Link>
                       <Link className="active" to="/Marketing">Marketing</Link>
                       <Link className="active" to="/Licensing">Licensing</Link>
                       <Link className="active" to="/contactus">Contact us</Link>
                        
                    </div>
                    
            </div>  
            </div>
  
  
  );
}

export default Navbar;