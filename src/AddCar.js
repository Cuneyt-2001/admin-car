import React, { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useCookies } from 'react-cookie';



const AddCarr = () => {
  const [brand, setOption1] = useState('');
  const [transmission, setOption2] = useState('');
  const [body, setOption3] = useState('');
  const [model, setInputValue1] = useState('');
  const [year, setInputValue2] = useState('');
  const token = getCookie('token');
  const role =getCookie('role');
  const [alertMessage, setAlertMessage] = useState('');


  
 
  
 



 

   function getCookie(name) {
     const value = `; ${document.cookie}`;
     const parts = value.split(`; ${name}=`);
    
    
     if (parts.length === 2) {
       return parts.pop().split(';').shift();
     }
   }
  

   useEffect(() => {
  console.log(role);
  
 
     if (role != 'true') {
    
       window.location.href = '/';    
     }
     
   }, []);



  const handleFormSubmit = async (event) => {
    event.preventDefault();
    var myData = {                    
      "Brand": brand,                   
      "Transmission": transmission,
      "Body": body,                   
      "Model": model,
      "Year": year
    };
   

    
      const response = await axios.post('https://localhost:7096/api/Car',
      myData,
      
      
      
      {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
        
      }
      
      
      )   .then(response => {
      
        alert("Adding car is succeed");
      })
      .catch(error => {
        console.error(error);
       alert("Adding car is failed");
      });
     
    
  }

  const handleSelect1Change = (event) => {
    setOption1(event.target.value);
  }

  const handleSelect2Change = (event) => {
    setOption2(event.target.value);
  }
  const handleSelect3Change = (event) => {
    setOption3(event.target.value);
  }

  const handleInputChange1 = (event) => {
    setInputValue1(event.target.value);
  }

  const handleInputChange2 = (event) => {
    setInputValue2(event.target.value);
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <br></br>
      <select required className="form-select" value={brand} aria-label="Default select example" onChange={handleSelect1Change}>
        <option value="">Select Brand</option>
        <option value="Audi">Audi</option>
        <option value="Bmw">Bmw</option>
        <option value="Mercedes">Mercedes</option>
      </select>
      <br></br>
      <select required className="form-select"  aria-label="Default select example"value={transmission} onChange={handleSelect2Change}>
        <option value="">Select Transmission</option>
        <option value="Automatic">Automatic</option>
        <option value="Manual">Manual</option>
      </select>
      <br></br>
      <select required className="form-select" aria-label="Default select example" value={body} onChange={handleSelect3Change}>
        <option value="">Select Type</option>
        <option value="Sedan">Sedan</option>
         <option value="Hatchback" >Hatchback</option>
           <option  value="Cabriolet">Cabriolet</option>
           <option  value="4x4">4x4</option>
      </select>
      <br></br>
      <input type="text" value={model} onChange={handleInputChange1} className="form-control" placeholder="Model" required />
      <br></br>
      <input type="text" value={year} onChange={handleInputChange2} className="form-control" placeholder="Year" required />
      <br></br>
      <button className="btn btn-lg btn-warning btn-block" type="submit">Save</button>
      <br></br>
      <br></br>
      <img src="https://img.sixt.com/1600/13954fe7-98c8-42b1-b415-d211f628ccab.png"width="500" height="200" className="rounded mx-auto d-block" alt="..."/>
    </form>
  );
};

export default AddCarr;