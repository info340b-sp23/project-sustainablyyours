import React, { useEffect, useState } from "react";
import { Intro } from "./components/intro";
import { Header } from "./components/header";
import { About } from "./components/about";
import { Footer } from "./components/footer";
import { Contact } from "./components/contact";
import { Account } from "./components/account";
import { AllItems } from "./components/shop";
import { Routes, Route } from "react-router-dom";
import { ErrorPage } from "./components/error";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { useAuthState } from "react-firebase-hooks/auth";
import { SignOut } from "./components/signout";
import { Wishlist } from "./components/wishlist";
import { ref, push as firebasePush, onValue } from "firebase/database";

import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

const url = "./data/shop-items.json";

export function App(props) {
  // User auth
  const [user, loading] = useAuthState(getAuth());
  const currentUser = user;
  // Show items when not empty
  const [shopItems, setShopItems] = useState([]);
  // Access database
  const db = getDatabase();
  // Maintain wishlist data here
  const [wishlist, setWishlist] = useState([]); 
  // Sign out only when click sign out
  const [showSignOut, setShowSignOut] = useState(false);


  // External data
  const fetchJSONFromFile = async (url) => {
    try {
      const response = await fetch(url);
      const items = await response.json();
      // Add the 'isInWishlist' property to each item
      const itemsWithWishlistStatus = items.map((item) => ({
        ...item,
        isInWishlist: false,
      }));
      setShopItems(itemsWithWishlistStatus);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    fetchJSONFromFile(url);
  }, []);

  const addToWishlist = (item) => {
    const updatedShopItems = shopItems.map((shopItem) => {
      if (shopItem.item === item.item) {
        return { ...shopItem, isInWishlist: true };
      }
      return shopItem;
    });
    setShopItems(updatedShopItems);
    setWishlist((prevWishlist) => [...prevWishlist, item]);
  };
  
  const removeFromWishlist = (item) => {
    const updatedShopItems = shopItems.map((shopItem) => {
      if (shopItem.item === item.item) {
        return { ...shopItem, isInWishlist: false };
      }
      return shopItem;
    });
    setShopItems(updatedShopItems);
    setWishlist((prevWishlist) =>
      prevWishlist.filter((wishlistItem) => wishlistItem.item !== item.item)
    );
  };
  
  return (
    <div className="container-fluid">
      <Header user={currentUser} loading={loading} showSignOut={setShowSignOut} />
      <SignOut show={showSignOut} setShowSignOut={setShowSignOut} />
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="intro" element={<Intro />} />
        <Route path="about" element={<About />} />
        <Route
          path="shop/:category?"
          element={
            <AllItems items={shopItems}
            addToWishlist={addToWishlist}
            removeFromWishlist={removeFromWishlist}
            user={currentUser} />
          }
        />
        <Route path="contact" element={<Contact />} />
        <Route
          path="account"
          element={<Account user={currentUser}
          loading={loading} />}
        />
        <Route
          path="wishlist"
          element={
            <Wishlist
              wishlist={wishlist}
              removeFromWishlist={removeFromWishlist}
            />
          }
        />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      {window.location.pathname !== "/shop" && <Footer />}
    </div>
  );
}
