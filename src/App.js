import React from "react";
import Home from "./pages/home/Home";
import Detail from "./components/Detail";
import Login from "./pages/login/Login";
import { Routes, Route } from "react-router-dom";

function App() {
    return (
        <Routes>
            <Route exact path="/home" element={<Home />} />
            <Route exact path="/home/detail/:id" element={<Detail />} />
            <Route exact path="/" element={<Login/>}/>
        </Routes>
    );
}

export default App;
