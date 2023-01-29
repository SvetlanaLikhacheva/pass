import logo from './logo.svg';
import './App.css';
import {Routes, Route } from 'react-router-dom';
import { Loginpage } from './pages/loginpage';
import { Service } from './pages/Service';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element = {<Loginpage />}/>
      <Route path='/Service' element = {<Service />}/>
    </Routes>
    </>
  
  );
}

export default App;
