import React, { useState } from 'react';
import axios from 'axios';
import { Link, Router, Routes,useNavigate } from 'react-router-dom';
import { Cookies } from 'react-cookie';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './Home';
import Navbar from './Navbar';




const Login = () => {

  const navigate = useNavigate ();
   
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const role =getCookie('role');
  function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
   
   
    if (parts.length === 2) {
      return parts.pop().split(';').shift();
    }
  }
 


  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const cookies = new Cookies();

    
    axios.post(`https://localhost:7096/api/User/login?email=` + email + "&password=" + password)
      .then(response => {
        
       
        console.log('Login successful!', response.data);
        console.log(response.data.userName);
        console.log(response.data.token);
        console.log(response.data.email);

        cookies.set('username', response.data.userName);
        cookies.set('token', response.data.token);
        cookies.set('role',response.data.role);
        cookies.set('email',response.data.email);
      
      
      

        if (role != 'true') {
         
          window.location.href = '/About';    
          alert("The page is only for administrators");
         
       
       
          
        
        }
       
        
       
      
        
    
             
        if(response.data.userName!=null)
        {
          navigate("/About");
        }

       
      })
      .catch(error => {
        console.error('Login failed:', error);
        alert("Login failed");
      
    
       
      });
  }

  return (
 
<div className="text-center">
       <form className="form-signin col-md-2 mx-auto" onSubmit={handleSubmit} > 
       <img src="https://www.ekan.com.tr/wp-content/uploads/2020/12/arac-kiralama-icerik.jpg" className="img-fluid" alt="..."/>
      <h2 className="h3 mb-3 font-weight-normal">Welcome</h2>
      <br></br>
  
       <input type="email" value={email} onChange={handleEmailChange} id="inputEmail" className="form-control" placeholder="Email address" required autoFocus/>
      <br></br>

       <input type="password" value={password}  onChange={handlePasswordChange} id="inputPassword" className="form-control" placeholder="Password" required/>
      <div className="checkbox mb-3">
        <label>
    
        </label>
      </div>
      
     
      <button className="btn btn-lg btn-primary btn-block" type="submit">Log in</button>
      <br></br>
   
      <br></br>
   </form>
</div>
  );
}

export default Login;