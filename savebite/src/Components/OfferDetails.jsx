import { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

function OfferDetails({ onReserve }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const [quantity, setQuantity] = useState(1);
  const [message, setMessage] = useState("");

  const offers = [
    {
      id: 1,
      title: "Bakery Surprise Box",
      image:
        "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=900",
      description: "A delicious selection of fresh bread and bakery products.",
      oldPrice: 10,
      newPrice: 5,
      discount: "50%",
      category: "Bakery",
      business: "Fresh Bakery",
      location: "Tripoli, Lebanon",
      pickupTime: "5:00 PM - 8:00 PM",
    },
    {
      id: 2,
      title: "Fresh Pizza",
      image:
        "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=900",
      description:
        "Enjoy freshly prepared pizza at a special discounted price.",
      oldPrice: 12,
      newPrice: 7,
      discount: "42%",
      category: "Meals",
      business: "Italian Kitchen",
      location: "Tripoli, Lebanon",
      pickupTime: "6:00 PM - 9:00 PM",
    },
    {
      id: 3,
      title: "Dessert Box",
      image:
        "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=900",
      description: "A sweet selection of delicious cakes and desserts.",
      oldPrice: 8,
      newPrice: 4,
      discount: "50%",
      category: "Desserts",
      business: "Sweet Corner",
      location: "Tripoli, Lebanon",
      pickupTime: "4:00 PM - 8:00 PM",
    },
    {
      id: 4,
      title: "Healthy Salad",
      image:
        "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=900",
      description: "A fresh salad made with quality ingredients.",
      oldPrice: 9,
      newPrice: 6,
      discount: "33%",
      category: "Healthy Food",
      business: "Green Bowl",
      location: "Tripoli, Lebanon",
      pickupTime: "3:00 PM - 7:00 PM",
    },
    {
      id: 5,
      title: "Fresh Croissants",
      image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=900",
      description: "Freshly baked croissants, perfect for breakfast.",
      oldPrice: 6,
      newPrice: 3,
      discount: "50%",
      category: "Bakery",
      business: "Morning Bakery",
      location: "Tripoli, Lebanon",
      pickupTime: "5:00 PM - 8:00 PM",
    },
    {
      id: 6,
      title: "Special Meal Box",
      image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=900",
      description: "A delicious meal prepared with fresh ingredients.",
      oldPrice: 14,
      newPrice: 9,
      discount: "36%",
      category: "Meals",
      business: "Daily Kitchen",
      location: "Tripoli, Lebanon",
      pickupTime: "6:00 PM - 9:00 PM",
    },
  ];

  const offer = offers.find((item) => item.id === Number(id));

  const handleReservation = () => {
    onReserve(offer, quantity);
    setMessage("Your reservation was successful!");

    setTimeout(() => {
      navigate("/reservations");
    }, 1000);
  };

  if (!offer) {
    return (
      <div className="container mt-5 text-center">
        <h2>Offer Not Found</h2>
        <Link to="/offers" className="btn btn-success mt-3">
          Back to Offers
        </Link>
      </div>
    );
  }

  return (
    <div className="container mt-5 mb-5">
      <Link to="/offers" className="btn btn-outline-success mb-4">
        ← Back to Offers
      </Link>

      <div className="row">
        <div className="col-md-6">
          <img
            src={offer.image}
            alt={offer.title}
            className="img-fluid rounded-4 shadow"
          />
        </div>

        <div className="col-md-6 mt-4 mt-md-0">
          <span className="badge bg-success mb-3">{offer.discount} OFF</span>

          <h1 className="fw-bold">{offer.title}</h1>

          <p className="text-secondary">{offer.description}</p>

          <div className="d-flex align-items-center gap-3 mb-4">
            <h5 className="text-decoration-line-through text-secondary">
              ${offer.oldPrice}
            </h5>

            <h3 className="text-success fw-bold">${offer.newPrice}</h3>
          </div>

          <hr />

          <h5>Business Information</h5>

          <p>
            <strong>Business:</strong> {offer.business}
          </p>
          <p>
            <strong>Location:</strong> {offer.location}
          </p>
          <p>
            <strong>Pickup Time:</strong> {offer.pickupTime}
          </p>
          <p>
            <strong>Category:</strong> {offer.category}
          </p>

          <hr />

          <h5>Select Quantity</h5>

          <input
            type="number"
            className="form-control mb-3"
            min="1"
            max="10"
            value={quantity}
            onChange={(e) => {
              const value = Number(e.target.value);
              if (value >= 1 && value <= 10) {
                setQuantity(value);
              }
            }}
          />

          <h5 className="mb-3">
            Total:{" "}
            <span className="text-success">${offer.newPrice * quantity}</span>
          </h5>

          <button
            className="btn btn-success btn-lg w-100"
            onClick={handleReservation}
          >
            Reserve Now
          </button>

          {message && <div className="alert alert-success mt-3">{message}</div>}
        </div>
      </div>
    </div>
  );
}

export default OfferDetails;
