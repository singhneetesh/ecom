
import './App.css';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import SignUp from './Components/SignUp';

function App() {

 

  
  

  return (
    <>
    <BrowserRouter>
        <Navbar/>
      <Routes>
        <Route path= "/" element={<h1>Products</h1>} />
        <Route path= "/add" element={<h1>Add Products</h1>} />
        <Route path= "/update" element={<h1>Update Products</h1>} />
        <Route path= "/logout" element={<h1>Logout</h1>} />
        <Route path= "/profile" element={<h1>Profile</h1>} />
        <Route path= "/signup" element={<SignUp/>} />

      </Routes>
      <Footer/>
    </ BrowserRouter>
    </>
  );
}

export default App;
