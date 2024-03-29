import React, { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from 'firebase/auth';

export function Wishlist(props) {
  const [userSignedIn, setUserSignedIn] = useState(false);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserSignedIn(true);
      } else {
        setUserSignedIn(false);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  // const handleRemoveFromWishlist = (item) => {
  //   props.removeFromWishlist(item);
  // };

  const wishlistItems = props.wishlist.map((item) => (
    <div className="col-md-6 col-xl-3 d-flex" key={item.item}>
      <div className="card mb-4">
        <div className="card-body">
          <div className="row">
            <div className="col-sm-auto col-xl-12">
              <img src={item.image} className="pb-3 wishlist-image" alt={item.imageDescription} />
            </div>
            <div className="col-sm">
              <p className="card-text">{item.item}</p>
              <p className="card-text">{item.price}</p>
              <a
                href={item.link}
                aria-label={item.linkDescription}
                target="_blank"
                className="btn btn-dark"
              >
                View on Company Website
              </a>
              <i
                title="Remove Item from Wishlist"
                aria-label="remove item from wishlist"
                aria-hidden="true"
                className="fa-solid fa-star fa-xl yellow-star"
                // onClick={() => handleRemoveFromWishlist(item)}
              ></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  ));

  return (
    <div className="wishlist-page container">
      <main>
        {userSignedIn ? (
          <div>
            {props.wishlist.length === 0 ? (
              <p>
                <img className="wishlist-image" src="img/shoppingcart.jpg" aria-label="Green Shopping Cart" alt="Green Shopping Cart" />  <br></br> <br></br>
                Your SustainablyYours wishlist is empty. Browse items to add to your wishlist. <br></br><br></br>
                <a href="/shop" className="btn" id="wishlist-bubble">Browse Items</a>
              </p>
            ) : (
              <div className="container">
                <div className="row">{wishlistItems}</div>
              </div>
            )}
          </div>
        ) : (
          <div>
            <p>
              <img className="wishlist-image" src="img/shoppingcart.jpg" aria-label="Green Shopping Cart" alt="Green Shopping Cart" /> <br></br> <br></br>
              Please sign in to view your wishlist. 
            </p>
            <a href="/account" className="btn" id="wishlist-bubble">Sign in</a>
          </div>
        )}
      </main>
    </div>
  );
}
