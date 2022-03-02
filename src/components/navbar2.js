import { Link } from 'react-router-dom';
import './navbar2.css'
const Navbar2 = () => {
    return (
        <div>
            <div className="nav2">
                <Link to="/men"><a href="" id="bb"><h3>𝓜𝓔𝓝</h3></a></Link>
                <Link to="/women"><a href="" id="bb"><h3>𝓦𝓞𝓜𝓔𝓝</h3></a></Link>
                <Link to="/kids"><a href="" id="bb"><h3>𝓚𝓘𝓓𝓢</h3></a></Link>

            </div>
          
            <div><marquee id="scrol" behavior="alternate" direction="right" scrollamount="14px"><h3>For First Time Users 10% Off Upto $2.</h3></marquee></div>

            
        </div>
    );
}

export default Navbar2;
