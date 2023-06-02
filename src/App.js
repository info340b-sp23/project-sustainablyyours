import React, { useEffect, useState } from "react";
import {Intro} from "./components/intro";
import {Header} from "./components/header";
import {About} from "./components/about";
import {Footer} from "./components/footer";
import { Contact } from "./components/contact";
import { Account } from "./components/account";
import { AllItems } from "./components/shop";
import { Wishlist } from "./components/wishlist";
import { Routes, Route, useNavigate } from "react-router-dom";
import { ErrorPage } from "./components/error";
import { getAuth, onAuthStateChanged } from 'firebase/auth';

import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
// import items from './data/shop-items.json'
const url = './data/shop-items.json'

export function App(props) {

    const [shopItems, setShopItems] = useState([]);
    const [currentUser, setCurrentUser] = useState(undefined);

    const fetchJSONFromFile = async (url) => {
        try {
          const response = await fetch(url);
          const items = await response.json();
          setShopItems(items)
        } 
        catch (error) {
          console.error('Error:', error);
        }
    };

    useEffect(()=>{
        fetchJSONFromFile(url);

    }, [])

    const navigateTo = useNavigate(); 

    //effect to run when the component first loads
    useEffect(() => {
    //log in a default user
    //loginUser(DEFAULT_USERS[0])
        const auth = getAuth();
        onAuthStateChanged(auth, (firebaseUserObj) => {
        console.log("auth state changed");
        console.log(firebaseUserObj);
        if(firebaseUserObj) { //if defined
            setCurrentUser(firebaseUserObj);
            // navigateTo('/wishlist'); //go to wishlist after         
            <Route path="account" element={<Wishlist />} />
        }
        })

    }, []) 
    
    return (
        <div className="container-fluid">
            <Header />
            <Routes>
                <Route path="/" element={<Intro />} />
                <Route path="intro" element={<Intro />} />
                <Route path="about" element={<About />} />
                <Route path="shop/:category?" element= {
                    <AllItems items={shopItems} />
                }/>
                <Route path="contact" element={<Contact />} />
                <Route path="account" element={<Account />} />
                <Route path="wishlist" element={<Wishlist />} />
                <Route path="*" element={<ErrorPage />} />
            </Routes>
            {window.location.pathname !== "/shop" && <Footer />}
        </div>
        )
 
}
