import './App.css';
import Home from './components/Home'
import Navbar from './components/Navbar/Navbar';
import Disposables from './components/Disposables';
import About from './components/About';
import Eliquids from './components/Eliquids';
import { BrowserRouter as Router, Route, Redirect, BrowserRouter } from 'react-router-dom'
import SinglePost from './components/SinglePost';

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
            <Route path='/Eliquids'>
              <Eliquids />
            </Route>
            <Route path='/Disposables'>
              <Disposables />
            </Route>
            <Route path='/post/:slug'>
              <SinglePost />
            </Route>
            <Route path='/disp/:slug'>
              <SinglePost />
            </Route>
          </Router>
        </BrowserRouter>
      </div>
  );
}


export default App;
