import './login.css';
const Login = () => {
    return (
        <div className="xyy">
            <div className="log">
                <h2 id="hh">Login</h2>
                <form>
                    <input type="Name" placeholder="Enter your Name" id="frm" />
                    <br />
                    <input type="Email" placeholder="Enter your Email" id="frm" />
                    <br />
                    <input type="tel" placeholder="Mobile Number" id="frm" />
                    <br />
                    <input type="password" name="" placeholder="Password" id="frm" />
                    <br />
                </form>
                <button id="bt1">Submit</button>
            </div>
        </div>
    );
}

export default Login;