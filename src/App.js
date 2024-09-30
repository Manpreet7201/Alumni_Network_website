import './App.css';
import {BrowserRouter} from 'react-router-dom'
import { Routes,Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import LoginPage from './Pages/LoginPage'
import AlumniConnect from './Pages/AlumniConnect'
import SignUp from './Pages/SignUp'
import CareerResources from './Pages/CareerResourcesPage';
import AlumniProfile from './Pages/AlumniProfile';
import Profile from './Components/Profile'; 


function App() {
  return (
  <BrowserRouter>
  <Routes>
  <Route path="/" element={<HomePage />} /> 
  <Route path="/login" element={<LoginPage />} /> 
  <Route path="/alumni-connect" element={<AlumniConnect />} /> 
  <Route path="/signup" element={<SignUp />} /> 
  <Route path="/career-resources" element={<CareerResources />} />
  <Route path="/alumni-profile" element={<AlumniProfile />} />
  <Route path="/profile/:id" element={<Profile />} />

  </Routes>
  </BrowserRouter>
  );
}

export default App;

// import React, { useState,useEffect } from "react";

// function Example(){
//   const [count, setCount] = useState(0);

//   useEffect(()=> {
//     document.title = `You clicked ${count} times`;
//   })

//   return (
//     <>
//       <p> You clicked {count} times </p>
//       <button onClick={()=> setCount(count+1)}> Click Me</button>
//     </>
//   )
// }

// export default Example