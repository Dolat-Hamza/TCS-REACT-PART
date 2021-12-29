import React, { Component } from 'react';
import './App.css';
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link
} from 'react-router-dom';
import {
  MDBNavbar,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBContainer,
  MDBIcon } from 'mdb-react-ui-kit';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import FormPage from './components/form';
class App extends Component {
  render() {
    return (
      
    <Router>
      
     <div className="App">
	<ul>
	<li>
		<Link to="/">Home</Link>
	</li>
	<li>
		<Link to="/about">About Us</Link>
	</li>
	<li>
		<Link to="/contact">Contact Us</Link>
	</li>
  <li>
		<Link to="/form">Form Page</Link>
	</li>
	</ul>
  <Routes>
                 <Route exact path='/' element={< Home />}></Route>
                 <Route exact path='/about' element={< About />}></Route>
                 <Route exact path='/contact' element={< Contact />}></Route>
                 <Route exact path='/form' element={< FormPage />}></Route>

          </Routes>
</div>

    </Router>
  );
  }
  }
  

export default App;
