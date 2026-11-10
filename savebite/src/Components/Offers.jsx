import { useState } from "react";
import FoodCard from "./FoodCard";

function Offers() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const offers = [
    {
      id: 1,
      title: "Bakery Surprise Box",
      image:
        "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600",
      description: "A delicious selection of fresh bakery products.",
      oldPrice: 10,
      newPrice: 5,
      discount: "50%",
      category: "Bakery",
    },
    {
      id: 2,
      title: "Fresh Pizza",
      image:
        "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600",
      description: "Freshly prepared pizza at a special price.",
      oldPrice: 12,
      newPrice: 7,
      discount: "42%",
      category: "Meals",
    },
    {
      id: 3,
      title: "Dessert Box",
      image:
        "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600",
      description: "A sweet selection of delicious desserts.",
      oldPrice: 8,
      newPrice: 4,
      discount: "50%",
      category: "Desserts",
    },
    {
      id: 4,
      title: "Healthy Salad",
      image:
        "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600",
      description: "A fresh and healthy salad made with quality ingredients.",
      oldPrice: 9,
      newPrice: 6,
      discount: "33%",
      category: "Healthy Food",
    },
    {
      id: 5,
      title: "Fresh Croissants",
      image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=600",
      description: "Freshly baked croissants perfect for breakfast.",
      oldPrice: 6,
      newPrice: 3,
      discount: "50%",
      category: "Bakery",
    },
    {
      id: 6,
      title: "Special Meal Box",
      image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600",
      description: "A delicious meal prepared with fresh ingredients.",
      oldPrice: 14,
      newPrice: 9,
      discount: "36%",
      category: "Meals",
    },
  ];

  const filteredOffers = offers.filter((item) => {
    const matchesSearch = item.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory = category === "All" || item.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="container mt-5 mb-5">
      {/* Page Heading */}
      <div className="text-center mb-5">
        <h1 className="fw-bold">Discover Amazing Food Deals</h1>
        <p className="text-secondary">
          Find delicious food at lower prices and help reduce food waste.
        </p>
      </div>

      {/* Search Bar */}
      <div className="row justify-content-center mb-4">
        <div className="col-md-8">
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="Search for food..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      {/* Category Filters */}
      <div className="d-flex flex-wrap justify-content-center gap-2 mb-5">
        <button
          className={`btn ${category === "All" ? "btn-success" : "btn-outline-success"}`}
          onClick={() => setCategory("All")}
        >
          All
        </button>

        <button
          className={`btn ${category === "Bakery" ? "btn-success" : "btn-outline-success"}`}
          onClick={() => setCategory("Bakery")}
        >
          Bakery
        </button>

        <button
          className={`btn ${category === "Meals" ? "btn-success" : "btn-outline-success"}`}
          onClick={() => setCategory("Meals")}
        >
          Meals
        </button>

        <button
          className={`btn ${category === "Desserts" ? "btn-success" : "btn-outline-success"}`}
          onClick={() => setCategory("Desserts")}
        >
          Desserts
        </button>

        <button
          className={`btn ${category === "Healthy Food" ? "btn-success" : "btn-outline-success"}`}
          onClick={() => setCategory("Healthy Food")}
        >
          Healthy Food
        </button>
      </div>

      {/* Food Offers */}
      <div className="row">
        {filteredOffers.length > 0 ? (
          filteredOffers.map((item) => (
            <div className="col-md-4 mb-4" key={item.id}>
              <FoodCard
                id={item.id}
                title={item.title}
                image={item.image}
                description={item.description}
                oldPrice={item.oldPrice}
                newPrice={item.newPrice}
                discount={item.discount}
              />
            </div>
          ))
        ) : (
          <div className="col-12 text-center">
            <h4 className="text-secondary">No offers found.</h4>
            <p>Try another search or category.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Offers;
