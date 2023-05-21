import React from "react";

export function Wishlist() {
    return(
    <div class="about-page container">      
    <main>
      <h1>Wishlist</h1>
              
      <div class="container">
      <div class="row">
        <div class="col-md-6 col-xl-3 d-flex">
        <div class="card mb-4">
          <div class="card-body">
          <div class="row">
            <div class="col-sm-auto col-xl-12">
              <img src="img/outerknown-yellow-puffer.png" class="pb-3" alt="yellow puffer jacket from Outerknown" />
            </div>
            <div class="col-sm">
              <p class="card-text">Outerknown Summer Yellow OK Mono Puffer Shirt Jacket</p>
              <p class="card-text">$398.00</p>
              <a href="https://www.outerknown.com/products/ok-mono-puffer-shirt-jacket-summer-yellow" aria-label="Outerknown Summer Yellow OK Mono Puffer Shirt Jacket" target="_blank" class="btn btn-dark">View on Company Website</a>
              <i title="Remove Item to Wishlist" aria-label="remove item from wishlist" aria-hidden="true" class="fa-solid fa-star fa-xl remove-from-wishlist"></i>
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