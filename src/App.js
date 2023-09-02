import './App.css';
import Home from './components/Home'
import Navbar from './components/Navbar/Navbar';
import Disposables from './components/Disposables';
import About from './components/About';
import Eliquids from './components/Eliquids';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import SinglePost from './components/SinglePost';
import Footer from './components/Footer';
import styled from 'styled-components'

function App() {
  return (
    <div className="App">
        <Router basename='/Home' >
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
          <Overflow>
          <Route path='/post/:slug'>
            <SinglePost />
          </Route>
          <Route path='/disp/:slug'>
            <SinglePost />
          </Route>
          <Route path='/eliq/:slug'>
            <SinglePost />
          </Route>
            <Footer />
          </Overflow>
        </Router>
    </div>
  );
}

const Overflow = styled.div `
height: 100vh;
overflow: auto;
  
`

export default App;
