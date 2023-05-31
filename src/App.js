import React from "react";
import {Intro} from "./components/intro";
import {Header} from "./components/header";
import {About} from "./components/about";
import {Footer} from "./components/footer";
import { Contact } from "./components/contact";
import { Account } from "./components/account";
import { AllItems } from "./components/shop";
import { Wishlist } from "./components/wishlist";
import { Routes, Route, useParams } from "react-router-dom";
import { ErrorPage } from "./components/error";

import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

const url = './data/shop-items.json'

function requestData() {
    fetch(url)
        .then((response) => {
            console.log("recieved:", response.url);
            const dataPromise = response.json();
            console.log(dataPromise);
            return dataPromise;
        })
        .then((data) => {
            console.log(data);
        })
        .catch((error) => {
            console.log("Error:", error)
        })
};

export function App(props) {
    return (
    <div className="container-fluid">
        <Header />
        <Routes>
            <Route path="/" element={<Intro />} />
            <Route path="intro" element={<Intro />} />
            <Route path="about" element={<About />} />
            {/* <Route path="shop" element={<AllItems items={props.items} />} /> */}
                {/* <Route path=":category?" element={<AllItemsWrapper />} /> Route for the updated component */}
            <Route path="shop/:category?" element= {
                <AllItems items={props.items}/>
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