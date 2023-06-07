import React, { useEffect, useState } from "react";
import { Intro } from "./components/intro";
import { Header } from "./components/header";
import { About } from "./components/about";
import { Footer } from "./components/footer";
import { Contact } from "./components/contact";
import { Account } from "./components/account";
import { AllItems } from "./components/shop";
import { ErrorPage } from "./components/error";
import { SignOut } from "./components/signout";
import { Wishlist } from "./components/wishlist";

import { Routes, Route, useLocation } from "react-router-dom";
import { getAuth } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { getDatabase, ref, push, remove, onValue } from 'firebase/database';

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
  // Hide footer on wishlist and shop page to not overlap
  const location = useLocation();
  const hideFooter = location.pathname === '/wishlist' || location.pathname.startsWith('/shop');

  
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
    if (currentUser) {
      const wishlistRef = ref(db, `wishlist/${currentUser.uid}`);
      push(wishlistRef, item);
    }
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
    if (currentUser) {
      const wishlistRef = ref(db, `wishlist/${currentUser.uid}/${item.item}`);
      remove(wishlistRef); // doesn't remove item
    }
  };
  
  // Render wishlist and shop per account when logged back in; get initial wishlist and shop starred
  useEffect(() => {
    if (currentUser) {
      const wishlistRef = ref(db, `wishlist/${currentUser.uid}`);
      const offFunction = onValue(wishlistRef, (snapshot) => {
        const wishlistData = snapshot.val();
        if (wishlistData) {
          const wishlistArray = Object.values(wishlistData);
          setWishlist(wishlistArray);
          // Update the isInWishlist property of shopItems
          const updatedShopItems = shopItems.map((shopItem) => {
            const isInWishlist = wishlistArray.some(
              (wishlistItem) => wishlistItem.item === shopItem.item
            );
            return { ...shopItem, isInWishlist };
          });
          setShopItems(updatedShopItems);
        } else {
          setWishlist([]);
        }
      });
  
      const cleanup = function() {
        offFunction();
      };
      return cleanup;
    }
  }, [currentUser, shopItems]);

  
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
          loading={loading} />
        }
        />
        <Route
          path="wishlist"
          element={
            <Wishlist
              wishlist={wishlist}
              removeFromWishlist={removeFromWishlist} />
          }
        />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      {!hideFooter && <Footer />}
    </div>
  );
}