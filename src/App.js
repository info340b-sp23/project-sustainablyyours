import React from "react";
import {Intro} from "./components/intro";
import {Header} from "./components/header";
import {About} from "./components/about";
import {Footer} from "./components/footer";
import {Shop} from "./components/shop";
import { Contact } from "./components/contact";
import { Account } from "./components/account";
import { BrowserRouter, Routes, Route, Router, Link } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';




export function App(props) {
    return (
    <div>
    
        <Header />
        <Routes>
            <Route path="/" element={<Intro />} />
            <Route path="intro" element={<Intro />} />
            <Route path="about" element={<About />} />
            <Route path="shop" element={<Shop />} />
            <Route path="contact" element={<Contact />} />
            <Route path="account" element={<Account />} />
        </Routes>
        <Footer />

    </div>
    )
}