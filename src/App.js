import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NoPage from "./Components/Defaults/NoPage";
import MainSite from "./Components/Defaults/MainSite";
import { UserDataContextProveder } from "./Contexts/UserDataContext";

const App = () => {
  return (
    /*
      Ez a komponenens tartalmazza a navigációt a 
      BrowserRouter-rel illetve, az egyedileg megirt 
      Context Provider-t.
    */
    <UserDataContextProveder>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainSite />}/>
          <Route path="/*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </UserDataContextProveder>
  );
}

export default App
