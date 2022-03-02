import { Link } from 'react-router-dom';
import img from '../images/cart-icon-28356.png';
import './navbar.css';
const Navbar = () => {
    return ( 
        <div className='navb'>
            <div className="logo">
                <Link to="/"><a href=""><h1>𝓜𝓨 𝓒𝓐𝓡𝓣</h1></a></Link>                 
            </div>
            <div className="search">
                <input id='srch' type="text" placeholder="Search for products" />
                <a href=""><button id='btn1'>Search</button></a>
            </div>
            <div className="btn">
                <Link to="/login"><button id="btn2">Login</button></Link>
            </div>
            <div >
            <Link to="/cart"><img src={img} alt="" height={40} width={40}/></Link>
            
            </div>
        </div>
     );
}
 
export default Navbar;