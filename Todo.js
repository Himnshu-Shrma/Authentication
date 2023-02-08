import { useState } from 'react';
import SideNav from './SideNav';
import MainSection from './MainSection';

function App(props) {
  const [active,setActive]=useState("Inbox")
  
  return (
    <div id="main">
      {props.name ? (
        <div>
          <header className='App-header'>{props.name? `Welcome ${props.name}`:"Please Login"}</header>
        <div className='body' >
          <div className='SideNav'>
            <SideNav change={setActive}/>
            
          </div>
          <div className='MainSection'>
            <MainSection active={active}/>
          </div>
          
        </div>
      
        </div>
      ):"Please Login"}
      
    </div>
  );
}

export default App;
