import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar';
import Navbar2 from './components/navbar2';
import Carsol from './components/carsol';
import Men from './components/men';
import Women from './components/women';
import Kids from './components/kids';
import Data from './components/mendata';
import Data1 from './components/womendata';
import Data2 from './components/kidsdata';
import Mycart from '../src/components/cart';
import Login from '../src/components/login';
import Foot from './components/footer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useState } from 'react';
function App() {
  const { products } = Data;
  const { products1 } = Data1;
  const { products2 } = Data2;
  const [cart, setcart] = useState([]);




  const add = (item) => {
    const itemExist = cart.find((ct) => ct.id === item.id);
    if (itemExist) {
      setcart(
        cart.map((ct) =>
          ct.id === item.id
            ?
            { ...itemExist, quantity: itemExist.quantity + 1 }
            : ct
        )
      );
    }
    else {
      setcart([...cart, { ...item, quantity: 1 }]);
    }
  };


  const remove = (item) => {
    const itemExist = cart.find((ct) => ct.id === item.id);
    if (itemExist.quantity === 1) {
      setcart(
        cart.filter((ct) =>
          ct.id !== item.id));
    }
    else {
      setcart(
        cart.map((ct) => ct.id === item.id ? { ...itemExist, quantity: itemExist.quantity - 1 } : item
        )
      )
    }

  }






  return (
    <Router>
      <Navbar />
      <Navbar2 />
      {/* <Rout products={products} products1={products1} cart={cart} add={add} remove={remove}/> */}
      <Switch>
        <Route exact path="/">
        <Carsol />
        </Route>
        <Route exact path="/men">
          <Men products={products} add={add} />
        </Route>
        <Route exact path="/women">
          <Women products1={products1} add={add} />
        </Route>
        <Route exact path="/kids">
          <Kids products2={products2} add={add} />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/cart">
          <Mycart cart={cart} add={add} remove={remove} />
        </Route>
      </Switch>
      <Foot />
    </Router>
  );
}

export default App;
