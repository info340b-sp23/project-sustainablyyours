import React from "react";

export function Shop() {
    return (
        <main>
        <form class="search" action="/search">
            <label for="search"><i class="fa-solid fa-magnifying-glass"></i> Search:</label>
            <input type="text" id="search" name="q" placeholder="Search SustainablyYours" />
        </form>
        
        <p class="category-select">Choose a category:</p>
            <select>
                <option value="">Select a Category</option>
                <optgroup label="Audio &amp; Tech">
                <option value="1">Tech Cases</option>
                <option value="2">Tech Accessories</option>
                <option value="3">Chargers &amp; Cables</option>
                </optgroup>
                <optgroup label="Beauty &amp; Care ">
                <option value="4">Skin Care</option>
                <option value="5">Hair Care</option>
                <option value="6">Bath &amp; Body</option>
                <option value="7">Makeup</option>
                <option value="8">Personal Care</option>
                <option value="9">Oral Care</option>
                <option value="10">Sun Care</option>
                </optgroup>
                <optgroup label="Clothing &amp; Accessories ">
                    <option value="11">Men's Clothing</option>
                    <option value="12">Men's Accessories</option>
                    <option value="13">Women's Clothing &amp; Body</option>
                    <option value="14">Women's Accessories</option>
                    <option value="15">Kid's Clothing</option>
                    <option value="16">Baby Clothing &amp; Products </option>
                </optgroup>
                <optgroup label="Home &amp; Kitchen ">
                    <option value="17">Kitchen</option>
                    <option value="18">Bath</option>
                    <option value="19">Bed</option>
                    <option value="20">Garden</option>
                    <option value="21">Office</option>
                    <option value="22">Decor</option>
                </optgroup>
                <optgroup label="Sports &amp; Outdoors ">
                    <option value="23">Bike</option>
                    <option value="24">Camp</option>
                    <option value="25">Garden</option>
                    <option value="26">Games</option>
                    <option value="27">Hike</option>
                    <option value="28">Yoga</option>
                </optgroup>
                <optgroup label="Travel">
                    <option value="29">Bags and Backpacks</option>
                    <option value="30">Toiletry Bags</option>
                    <option value="31">On the Go</option>
                </optgroup>
            </select>
        
        <div class="container">
            <div class="row">
                <div class="col-md-6 col-xl-3 d-flex">

                    <div class="card mb-4">
                        <div class="card-body">
                        <div class="row">
                            <div class="col-sm-auto col-xl-12">
                            <img src="img/outerknown-yellow-puffer.png" class="pb-3" alt="Yellow Puffer Jacket from Outerknown" />
                            </div>
                            <div class="col-sm">
                            <p class="card-text">Outerknown Summer Yellow OK Mono Puffer Shirt Jacket</p>
                            <p class="card-text">$398.00</p>
                            <a href="https://www.outerknown.com/products/ok-mono-puffer-shirt-jacket-summer-yellow" aria-label="Outerknown Summer Yellow OK Mono Puffer Shirt Jacket" target="_blank" class="btn btn-dark">View on Company Website</a>
                            <i title="Add Item to Wishlist" aria-label="add item to wishlist" aria-hidden="true" class="fa-solid fa-star fa-xl"></i>
                            {/* removed 'style="color: black;"' from i */}
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
        
                <div class="col-md-6 col-xl-3 d-flex">

                    <div class="card mb-4">
                        <div class="card-body">
                        <div class="row">
                            <div class="col-sm-auto col-xl-12">
                            <img src="img/pact-blue-shirt.jpg" class="pb-3" alt="blue long sleeve shirt from pact" />
                            </div>
                            <div class="col-sm">
                            <p class="card-text">pact Blue Dusk Vintage Long Sleeve Raglan Tee</p>
                            <p class="card-text">$36.00</p>
                            <a href="https://wearpact.com/men/apparel/tops%20&%20shirts/vintage%20long%20sleeve%20raglan%20tee/wa1-mvr-blk" aria-label="pact Blue Dusk Vintage Long Sleeve Raglan Tee" target="_blank" class="btn btn-dark">View on Company Website</a>
                            <i title="Add Item to Wishlist" aria-label="add item to wishlist" aria-hidden="true" class="fa-solid fa-star fa-xl"></i>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
        
                <div class="col-md-6 col-xl-3 d-flex">

                    <div class="card mb-4">
                        <div class="card-body">
                        <div class="row">
                            <div class="col-sm-auto col-xl-12">
                            <img src="img/pact-green-shirt.jpg" class="pb-3" alt="green t-shirt from pact" />
                            </div>
                            <div class="col-sm">
                            <p class="card-text">pact Myrtle Vintage Short Sleeve Henley</p>
                            <p class="card-text">$41.00</p>
                            <a href="https://wearpact.com/men/apparel/tops%20&%20shirts/vintage%20short%20sleeve%20henley/wa1-mvy-blk" aria-label="pact Myrtle Vintage Short Sleeve Henley" target="_blank" class="btn btn-dark">View on Company Website</a>
                            <i title="Add Item to Wishlist" aria-label="add item to wishlist" aria-hidden="true" class="fa-solid fa-star fa-xl"></i>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
        
                <div class="col-md-6 col-xl-3 d-flex">

                    <div class="card mb-4">
                        <div class="card-body">
                        <div class="row">
                            <div class="col-sm-auto col-xl-12">
                            <img src="img/outerknown-blue-shirt-plush.jpg" class="pb-3" alt="Plush azure blue polo shirt from Outerknown" />
                            </div>
                            <div class="col-sm">
                            <p class="card-text">Outerknown Azure Blue Rewind Polo</p>
                            <p class="card-text">$108.00</p>
                            <a href="https://www.outerknown.com/products/rewind-polo-azure-blue" aria-label="Outerknown Azure Blue Rewind Polo" target="_blank" class="btn btn-dark">View on Company Website</a>
                            <i title="Add Item to Wishlist" aria-label="add item to wishlist" aria-hidden="true" class="fa-solid fa-star fa-xl"></i>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
    )
}