import React, {useState} from "react";

export function AllItems(props) {
    const shopData = props.items;
    const [searchTerm, setSearchTerm] = useState("");

    const searchItems = shopData
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
                    <option value="2">Chargers &amp; Cables</option>
                </optgroup>
                <optgroup label="Beauty &amp; Care ">
                    <option value="3">Skin Care</option>
                    <option value="4">Hair Care</option>
                    <option value="5">Bath &amp; Body</option>
                    <option value="6">Makeup</option>
                </optgroup>
                <optgroup label="Clothing &amp; Accessories ">
                    <option value="7">Men's Clothing</option>
                    <option value="8">Women's Clothing</option>
                    <option value="9">Kid's Clothing</option>
                    <option value="10">Baby Clothing &amp; Products </option>
                </optgroup>
                <optgroup label="Home &amp; Kitchen ">
                    <option value="11">Kitchen</option>
                    <option value="12">Bed</option>
                </optgroup>
            </select>
        
        <div className="container">
            <div className="row">
            {searchItems}
            </div>
        </div>
        </main>
    )
}