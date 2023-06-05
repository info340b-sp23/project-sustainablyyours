import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function AllItems(props) {
  const params = useParams();
  const shopData = props.items;
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [loading, setLoading] = useState(true); // New loading state
  const navigate = useNavigate();

  useEffect(() => {
    const category = params.category || "";
    setSelectedCategory(category);
    // Simulate a delay using setTimeout
    setTimeout(() => {
      setLoading(false); // Mark loading as false after a delay
    }, 2000); // Adjust the delay duration as needed -- this is 2 seconds
  }, []);

  const handleCategoryChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedCategory(selectedValue);
    setSearchTerm("");
    navigate(`/shop/${encodeURIComponent(selectedValue)}`);
  };

  const handleRemoveFromWishlist = (item) => {
    if (props.user) {
      props.removeFromWishlist(item);
    }
  };

  const handleAddToWishlist = (item) => {
    if (props.user) {
      props.addToWishlist(item);
      // console.log(item)
    }
  };

  const isInWishlist = (item) => {
    return item["isInWishlist"];
    // return props.wishlist && props.wishlist.some((wishlistItem) => wishlistItem.item === item.item);
  };

  const searchItemsTmp = shopData
    .filter((val) => {
      if (searchTerm === "") {
        return val;
      } else if (val.item.toLowerCase().includes(searchTerm.toLowerCase())) {
        return val;
      }
      return null;
    })
    .filter((val) => {
      if (selectedCategory === "") {
        return val;
      } else {
        return val.category === selectedCategory;
      }
    });

  const searchItems = searchItemsTmp.map((val) => (
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
              <a
                href={val.link}
                aria-label={val.linkDescription}
                target="_blank"
                className="btn btn-dark"
              >
                View on Company Website
              </a>
              <i
                className={`fas fa-star fa-xl ${isInWishlist(val) ? "yellow-star" : ""}`}
                title="Add Item to Wishlist"
                aria-label="add item from wishlist"
                aria-hidden="true"
                onClick={() => {
                  if (isInWishlist(val)) {
                    handleRemoveFromWishlist(val);
                  } else {
                    handleAddToWishlist(val);
                  }
                }}
              ></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  ));

  // Render the loading spinner if the loading state is true
  if (loading) {
    return (
      <div className="loader-container">
        <FontAwesomeIcon icon={faSpinner} spin />
      </div>
    );
  }

  return (
    <main>
      <form className="search" action="/search">
        <label htmlFor="search">
          <i className="fa-solid fa-magnifying-glass"></i> Search:
        </label>
        <input
          type="text"
          id="search"
          name="q"
          placeholder="Search SustainablyYours"
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
          value={searchTerm}
        />
      </form>

      <p className="category-select">Choose a category:</p>
      <select value={selectedCategory} onChange={handleCategoryChange}>
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
          <option value="baby clothing &amp; products">
            Baby Clothing &amp; Products
          </option>
        </optgroup>
        <optgroup label="Home &amp; Kitchen ">
          <option value="kitchen">Kitchen</option>
          <option value="bed">Bed</option>
        </optgroup>
      </select>

      <div className="container">
        <div className="row">{searchItems}</div>
      </div>
    </main>
  );
}
