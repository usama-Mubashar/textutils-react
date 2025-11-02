
import './App.css';
import Navbar from './components/Navbar.js'
import Textform from './components/Textform.js'
import { useState } from 'react';
import Alert from './components/Alert.js'
import About from './components/About.js'

import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

function App() {
   const [alert,myalert]=useState(null);
   const showalert=(message,type)=>{
    myalert({
         msg:message,
         ty:type

    })
    setTimeout(() => {
      myalert(null);
    }, 1000);
   }
  const [mode,setmode]=useState('light');
  const togglemode=()=>{
    if(mode==='dark'){
      setmode('light');
      document.body.style.backgroundColor='white'
      showalert("Enable light mode","success");
    }
    else{
      setmode('dark');
      document.body.style.backgroundColor='#042743'
      showalert("Enable dark mode","success");
    }


  

  }
  return (
    <>
    <Router>
      <Navbar title="TextUtils" abouttext="About US" mode={mode} toggle={togglemode}/>
     <Alert alert={alert}/>
    
     <div className="container my-4">
        <Routes>
          <Route path="/about" element={<About mode={mode}/>}/>
         
          <Route path="/" element={<Textform  heading="Enter the text to analyse"
      mode={mode}
      showalert={showalert}
      />} />
     
      </Routes>
     </div>
     
    </Router>
   </>
  );
}

export default App;
