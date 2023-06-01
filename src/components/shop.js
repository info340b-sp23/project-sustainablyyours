import React, {useState, useEffect } from "react";
import { useNavigate, useParams} from 'react-router-dom';


export function AllItems(props) {
    const params = useParams();
    const shopData = props.items;
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("");
    const navigate = useNavigate();

    console.log("searchTerm " + searchTerm);
    console.log("selectedCategory " + selectedCategory);

    useEffect(()=>{
        const category = params.category || ""
        setSelectedCategory(category);
    }, [])


    const searchItemsTmp = shopData
        .filter((val) => {
        if (searchTerm === "") {
            return val;
        }
        else if (val.item.toLowerCase().includes(searchTerm.toLowerCase())) {
            return val;
        }
        return null; // Add this line to handle the case where neither condition is met
        })
        .filter((val) => {
            // Filter items based on the selected category
            if (selectedCategory === "") {
              return val;
            }
            else {
              return val.category === selectedCategory;
            }
        })
    // console.log(searchItemsTmp[0])
    
    const searchItems = searchItemsTmp.map(
            (val) => (
            <div className="col-md-6 col-xl-3 d-flex" key={val.item}>
                <div className="card mb-4">
                <div className="card-body">
                    <div className="row">
                    <div className="col-sm-auto col-xl-12">
                        <img src={"/" + val.image} className="pb-3" alt={val.imageDescription} />
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
        ));

    const handleCategoryChange = (event) => {
        const selectedValue = event.target.value;
        console.log("handleCategoryChange " + selectedValue);
        setSelectedCategory(selectedValue);
        navigate(`/shop/${encodeURIComponent(selectedValue)}`); // Update the URL parameter
        };


    return (
        <main >
        <form className="search" action="/search">
            <label form="search"><i className="fa-solid fa-magnifying-glass"></i> Search:</label>
            <input type="text" id="search" name="q" placeholder="Search SustainablyYours" onChange={(event) => {
            setSearchTerm(event.target.value);
          }} />
        </form>
        
        <p className="category-select">Choose a category:</p>
            <select
                value={selectedCategory}
                onChange={handleCategoryChange}>
                <option value="">Select a category</option>
                    <optgroup label="Audio &amp; Tech">
                    <option value="tech cases">Tech Cases</option>
                    <option value="chargers &amp; cables">Chargers &amp; Cables</option>
                </optgroup>
                <optgroup label="Beauty &amp; Care ">
                    <option value="skin care">Skin Care</option>
                    <option value="hair care">Hair Care</option>
                    <option value="bath &amp; body">Bath &amp; Body</option>
                    <option value="makeup">Makeup</option>
                </optgroup>
                <optgroup label="Clothing &amp; Accessories ">
                    <option value="men's clothing">Men's Clothing</option>
                    <option value="women's clothing">Women's Clothing</option>
                    <option value="kid's clothing">Kid's Clothing</option>
                    <option value="baby clothing &amp; products">Baby Clothing &amp; Products</option>
                </optgroup>
                <optgroup label="Home &amp; Kitchen ">
                    <option value="kitchen">Kitchen</option>
                    <option value="bed">Bed</option>
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