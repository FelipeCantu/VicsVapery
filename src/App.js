import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar/Navbar';
import Disposables from './components/Disposables';
import About from './components/About';
import Eliquids from './components/Eliquids';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import SinglePost from './components/SinglePost';
import Footer from './components/Footer';
import styled from 'styled-components';
import { CartProvider } from './components/CartContext';
import Cart from './components/Cart';
import StripePayment from './components/StripePayment';
import { Elements } from '@stripe/react-stripe-js';
import stripePromise from './stripe';
import PaymentSuccess from './components/PaymentSuccess'


function App({ setIsCheckout }) {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Redirect to="/Home" />
          </Route>
          <Route path="/Home" component={Home} />
          <Route path='/About'>
            <About />
          </Route>
          <Route path='/Eliquids'>
            <Eliquids />
          </Route>
          <Route path='/Disposables'>
            <Disposables />
          </Route>
          <Overflow>
            <CartProvider>
              <Route path='/post/:slug'>
                <SinglePost />
              </Route>
              <Route path='/disp/:slug'>
                <SinglePost />
              </Route>
              <Route path='/eliq/:slug'>
                <SinglePost />
              </Route>
              <Route path="/cart">
                <Cart />
              </Route>
              {setIsCheckout && (
                <Route path="/checkout">
                  <Elements stripe={stripePromise}>
                    <StripePayment />
                  </Elements>
                </Route>
              )}
              <Route path="/payment-success">
                <PaymentSuccess /> {/* Route to the PaymentSuccess component */}
              </Route>
            </CartProvider>
            <Footer />
          </Overflow>
        </Switch>
      </Router>
    </div>
  );
}

const Overflow = styled.div`
  height: 100vh;
  overflow: auto;
`

export default App;
