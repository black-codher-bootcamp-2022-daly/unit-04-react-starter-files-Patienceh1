import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import {
  BrowserRouter,
  Routes,
  Route,

} from "react-router-dom";
import Header from "./components/Header";
import Bookcase from "./components/Bookcase";


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Header styles={{ 
      }}/>
    <App />
    
     
    </BrowserRouter>
  </React.StrictMode>
);
