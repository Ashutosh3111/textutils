import "./App.css";
// import About from "./Components/About";
import Navbar from "./Components/Navbar";
import Textform from "./Components/Textform";
import { useState } from "react";
import Alert from "./Components/Alert";
// import {
//     BrowserRouter as Router,
//     Routes,
//     Route,
//   } from "react-router-dom";


function App() {
const [mode, setMode] = useState('light');//whether the dark mode is ensbled or not
const [alert, setAlert] = useState(null);

const showAlert = (message, type)=>{
    setAlert({
        msg: message,
        type: type
    })
    setTimeout(() =>{
        setAlert(null);
    },1500);
}

const toggleMode = ()=>{
if(mode==='light'){
    setMode('dark');
    document.body.style.backgroundColor='#083460';
    showAlert("Dark mode has been enabled","success");
    document.title="Textutils-Dark Mode";
}else{
    setMode('light');
    document.body.style.backgroundColor='white';
    showAlert("light mode has been enabled","success");
    document.title="Textutils-Light Mode";
}
}

return (
<>
{/* {<Navbar title="textutils" aboutText="About Textutils"/> } */}
{/* <Navbar/> */}
{/* <Router> */}
<Navbar title="Textutils" mode={mode} toggleMode={toggleMode}/>
<Alert alert={alert}/>
<div className="container my-3">
{/* <Routes> */}
{/* <Route path="/" element={/> */}
<Textform showAlert={showAlert} heading="Enter the text below to anlyze"mode={mode} />
{/* <Route path="/" element={<About />}> <Route path="/about" element={<About />}> */}
{/* </Route> */}

          
{/* </Routes> */}
</div>
{/* </Router> */}
</>
);
}


export default App;
