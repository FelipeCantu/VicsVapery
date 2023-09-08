import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar/Navbar';
import Disposables from './components/Disposables';
import About from './components/About';
import Eliquids from './components/Eliquids';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'; // Import Switch
import SinglePost from './components/SinglePost';
import Footer from './components/Footer';
import styled from 'styled-components';
import { CartProvider } from './components/CartContext';
import Cart from './components/Cart'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch> {/* Use Switch to ensure only one route is matched */}
          <Route exact path="/">
            <Redirect to="/Home" /> {/* Redirect to Home by default */}
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
