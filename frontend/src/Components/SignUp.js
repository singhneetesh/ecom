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
// src/components/RegisterForm.js
// src/components/RegistrationForm.js
// src/components/RegisterForm.js
import React, { useState } from 'react';
import axios from 'axios';

function RegisterForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('/register', formData);
      alert('User registered successfully!');
    } catch (error) {
      console.error(error);
      alert('An error occurred while registering the user.');
    }
  };

  return (
    <form className= 'sigupForm' onSubmit={handleSubmit}>
      <h1>Registration</h1>
      <input className='inputBox'
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Name"
      />
      <input className='inputBox'
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
      />
      <input className='inputBox'
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="Password"
      />
      <button className= 'SignupButton' type="submit">Register</button>
    </form>
  );
}

export default RegisterForm;
