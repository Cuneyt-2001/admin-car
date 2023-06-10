import React from 'react';
import './App.css';
import Login from './Login';


import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,

  BrowserRouter
} from "react-router-dom";


import Navbar from './Navbar';
import About from './About';
import AddCar from './AddCar';
import CarList from './CarList';
import UpdateCar from './UpdateCar';
import Home from './Home';
import LoansList from './LoansList';








class App extends React.Component {


  render() {

    return (
      <div>
        <Router>

          <Navbar />
          <Routes>
            <Route exact path="/" element={<Login />} />
            <Route path="/CarList" element={<CarList />} />
            {/* <Route path="/CreateAccount" element={<CreateAccount />} /> */}
            <Route path="/About" element={<About />} />
            {/* <Route path="/Loan" element={<Loan />} />
            <Route path="/CreateLoan/:id" element={<CreateLoan />} /> */}
            <Route path="/AddCar" element={<AddCar />} />
            <Route  path="/UpdateCar/:id" element={<UpdateCar />} />
            {/* <Route  path="/CreateLoan/:id" element={<CreateLoan />} /> */}
            {/* <Route  path="/WriteReview/:id" element={<WriteReview />} /> */}
            <Route  path="/Home" element={<Home />} />
            {/* <Route  path="/GetLoans" element={<GetLoans />} /> */}
            <Route  path="/LoansList" element={<LoansList />} />
            {/* <Route  path="/ReviewList/:id" element={<ReviewList />} />
            <Route  path="/UpdateCar2/:id" element={<UpdateCar2 />} /> */}
          </Routes>

        </Router>

      </div>
    )
  }
}

export default App;