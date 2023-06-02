import React from "react";
import { Link } from "react-router-dom";

export function Wishlist(props) {
  console.log(props.wishlist)
  const handleRemoveFromWishlist = (item) => {
    props.removeFromWishlist(item);
  };

  const wishlistItems = props.wishlist.map((item) => (
    <div className="col-md-6 col-xl-3 d-flex" key={item.item}>
      <div className="card mb-4">
        <div className="card-body">
          <div className="row">
            <div className="col-sm-auto col-xl-12">
              <img src={item.image} className="pb-3" alt={item.imageDescription} />
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
                className="fa-solid fa-star fa-xl remove-from-wishlist"
                onClick={() => handleRemoveFromWishlist(item)}
              ></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  ));

  return (
    <div className="about-page container">
      <main>
        <h1>Wishlist</h1>
        {props.wishlist.length === 0 ? (
          <p>Your wishlist is empty. <Link to="/shop">Browse items</Link> to add to your wishlist.</p>
        ) : (
          <div className="container">
            <div className="row">{wishlistItems}</div>
          </div>
        )}
      </main>
    </div>
  );
}
