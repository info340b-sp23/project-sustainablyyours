import React, {useState} from "react";

// function ItemCard(props) {
//     const shopData = props.shopData;
//     const { image, imageDescription, item, price, link, linkDescription } = shopData;

//     return (
//         <div className="col-md-6 col-xl-3 d-flex">
//             <div className="card mb-4">
//                 <div className="card-body">
//                     <div className="row">
//                         <div className="col-sm-auto col-xl-12">
//                             <img src={image} className="pb-3" alt={imageDescription}/>
//                         </div>
//                         <div className="col-sm">
//                             <p className="card-text">{item}</p>
//                             <p className="card-text">{price}</p>
//                             <a href={link} aria-label={linkDescription} target="_blank" className="btn btn-dark">View on Company Website</a>
//                             <i title="Add Item to Wishlist" aria-label="add item to wishlist" aria-hidden="true" className="fa-solid fa-star fa-xl"></i>
//                             {/* removed 'style="color: black;"' from i */}
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

export function AllItems(props) {
    // const itemCards = props.items.map((item) => {
    //     return <ItemCard shopData={item} key={item.item} />
    // });

    const shopData = props.items;
    // const { image, imageDescription, item, price, link, linkDescription } = shopData;

    console.log("shopData:", shopData);
    const [searchTerm, setSearchTerm] = useState("");


    return (
        <main >
        <form className="search" action="/search">
            <label form="search"><i className="fa-solid fa-magnifying-glass"></i> Search:</label>
            <input type="text" id="search" name="q" placeholder="Search SustainablyYours" onChange={(event) => {
            setSearchTerm(event.target.value);
          }} />
        </form>
        
        <p className="category-select">Choose a category:</p>
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
        
        <div className="container">
            <div className="row">
            {shopData
                .filter((val) => {
                if (searchTerm === "") {
                    return val;
                }
                else if (val.item.toLowerCase().includes(searchTerm.toLowerCase())) {
                    return val;
                }
                return null; // Add this line to handle the case where neither condition is met
                })
                .map((val) => (
                    <div className="col-md-6 col-xl-3 d-flex" key={val.item}>
                        <div className="card mb-4">
                        <div className="card-body">
                            <div className="row">
                            <div className="col-sm-auto col-xl-12">
                                <img src={val.image} className="pb-3" alt={val.imageDescription} />
                            </div>
                            <div className="col-sm">
                                <p className="card-text">{val.item}</p>
                                <p className="card-text">{val.price}</p>
                                <a href={val.link} aria-label={val.linkDescription} target="_blank" className="btn btn-dark">View on Company Website</a>
                                <i title="Add Item to Wishlist" aria-label="add item to wishlist" aria-hidden="true" className="fa-solid fa-star fa-xl"></i>
                                {/* removed 'style="color: black;"' from i */}
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                ))
            }



                
            </div>
        </div>
        </main>
    )
}