// import React,{useState}from 'react'

// function SignUp() {

//   const [name, setName]= useState('')
//   const [email, setEmail]= useState('')
//   const [password, setPassword]= useState('')

//   const collectData=()=>{
//     console.log(name,email,password);
//   }


//   return (
//     <div className='sigupForm'>
//       <h1 >Register</h1>
//       <input className='inputBox' value ={name} onChange={(e)=>setName(e.target.value)} type="text" placeholder='Enter your Name' />
//       <input  className='inputBox' value={email} onChange={(e)=>setEmail(e.target.value)} type="text" placeholder='Enter your EmailId' />
//       <input className='inputBox' value={password} onChange={(e)=>setPassword(e.target.value)} type="password" placeholder='Enter your Password' />

//     <button className='SignupButton' onClick={collectData} type= 'button'>Sign Up</button>

      


//     </div>
//   )
// }

// export default SignUp;
// src/components/RegisterForm.js
import React, { useState } from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'


function RegisterForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
const navigate= useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

navigate('/login')

    try {
      await axios.post('api/users/register', formData);
      alert('User registered successfully!');
    } catch (error) {
      console.error(error);
      alert('An error occurred while registering the user.');
    }
  };

  return (
    <>
<h1>Registration</h1>

    <form onSubmit={handleSubmit}>
      <input className='inputBox'
        type="text"
        name="name"
       
        onChange={handleChange}
        placeholder="Name"
      />
      <input className='inputBox'
        type="email"
        name="email"
        
        onChange={handleChange}
        placeholder="Email"
      />
      <input className='inputBox'
        type="password"
        name="password"
        onChange={handleChange}
        placeholder="Password"
      />
      <button type="submit">Register</button>
    </form>
    </>
  );
}

export default RegisterForm;
