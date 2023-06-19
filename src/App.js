import './App.css';
import Home from './components/Home'
import Navbar from './components/Navbar/Navbar';
import New from './components/New'
import Disposables from './components/Disposables';
import About from './components/About'
import Eliquids from './components/Eliquids'
import { BrowserRouter as Router, Route, Redirect, BrowserRouter } from 'react-router-dom'


function App() {
  return (

      <div className="App">
      <BrowserRouter>
      <Router>
        <Navbar />
          <Redirect to="/Home" />
          <Route path="/Home" component={Home} />
        <Route path='/About'>
          <About />
        </Route>
        <Route path='/New'>
          <New />
        </Route>
        <Route path='/Eliquids'>
          <Eliquids />
        </Route>
        <Route path='/Disposables'>
          <Disposables />
        </Route>
      </Router>
    </BrowserRouter>
      </div>
  );
}

export default App;
