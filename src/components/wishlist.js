import React from "react";

export function Wishlist() {
    return(
    <div className="about-page container">      
    <main>
      <h1>Wishlist</h1>
              
      <div className="container">
      <div className="row">
        <div className="col-md-6 col-xl-3 d-flex">
        <div className="card mb-4">
          <div className="card-body">
          <div className="row">
            <div className="col-sm-auto col-xl-12">
              <img src="img/outerknown-yellow-puffer.png" className="pb-3" alt="yellow puffer jacket from Outerknown" />
            </div>
            <div className="col-sm">
              <p className="card-text">Outerknown Summer Yellow OK Mono Puffer Shirt Jacket</p>
              <p className="card-text">$398.00</p>
              <a href="https://www.outerknown.com/products/ok-mono-puffer-shirt-jacket-summer-yellow" aria-label="Outerknown Summer Yellow OK Mono Puffer Shirt Jacket" target="_blank" className="btn btn-dark">View on Company Website</a>
              <i title="Remove Item to Wishlist" aria-label="remove item from wishlist" aria-hidden="true" className="fa-solid fa-star fa-xl remove-from-wishlist"></i>
            </div>
          </div>
          </div>
        </div>
        </div>
      </div>
      </div>
    </main>
    </div>

)}