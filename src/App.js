import React, { Component } from 'react';
import './App.css';
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import FormPage from './components/form';
import Navv from './components/nav';
class App extends Component {
  render() {
    return (
      
    <Router>
      <Navv/>
     <div className="App">
	<ol className='list'>
	<li className='item'>
		<Link to="/">Home</Link>
	</li>
	<li className='item'>
		<Link to="/about">About Us</Link>
	</li>
	<li className='item'>
		<Link to="/contact">Contact Us</Link>
	</li>
  <li className='item'>
		<Link to="/form">Form Page</Link>
	</li>
	</ol>
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
