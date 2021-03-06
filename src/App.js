import "./style/main.scss"

import { Route, Routes } from "react-router-dom";

import Authentication from "./components/authentication/authentication.component"
import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component"

const Shop =()=>{
  return <h1>Hello im shop page</h1>
}

const App =()=> {
  return (
    <Routes>
      <Route path="/" element={<Navigation/>} >
        <Route index  element={ <Home/> } />
        <Route  path ='shop' element={<Shop/>} />   
        <Route  path ='auth' element={<Authentication/>} />    
      </Route>
    </Routes>
  ); 
}

export default App;
