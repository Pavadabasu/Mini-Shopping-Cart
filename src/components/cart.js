import { Link } from 'react-router-dom';
import './cart.css';
const Mycart = ({ cart, add, remove }) => {
    const total = cart.reduce((cost, item) => cost + item.quantity * item.cost, 0)
    return (
        <div className="chd">
            <h2 id="ttl">My Cart</h2>
            {cart.length === 0 && <div><Link to="/" ><button id='tt2'>Start Shopping</button></Link></div>}

            <div className="chd1">
                {cart.map((item) => (
                    <div key={item.id}>
                        <div className="chd2">
                            <img id="chd3" src={item.image} alt={item.name} height={350} width={300} />
                            <h4 id='chd4'>{item.name} <br /> ${item.cost}</h4>
                            <button id="butn1" onClick={() => add(item)}>+</button>
                            <h3 id='cost1'>{item.quantity}</h3>
                            <button id="butn1" onClick={() => remove(item)}>-</button>
                        </div>



                    </div>

                ))}
                <div className='tot'>
                    <h2 id='ttl1'>Total Cost = ${total}</h2>
                </div>
            </div>
        </div>
    );
}

export default Mycart;