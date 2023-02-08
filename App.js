import { useState } from 'react';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import './App.css';
import { auth } from './firebase';
import Home from './Component/Home/Home';
import Login from './Component/Login/Login';
import SignUp from './Component/SignUp/SignUp';
import Todo from './TODO/Todo'
import { onAuthStateChanged } from 'firebase/auth';
function App() {
  const [username,setUserame]=useState("")
 
  onAuthStateChanged(auth,(user)=>{
      if(user){
        setUserame(user.email.substring(0,user.email.indexOf("@")))
      }else{
        setUserame("")
      }
    })
  
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/Todo' element={<Todo name={username}/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/SignUp' element={<SignUp/>}/>
      </Routes>
      </BrowserRouter>
      
        
    </div>
  );
}

export default App;
