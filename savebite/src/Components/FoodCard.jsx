import { Link } from "react-router-dom";

function FoodCard({
  id,
  title,
  image,
  description,
  oldPrice,
  newPrice,
  discount,
}) {
  return (
    <div className="card h-100 shadow-sm">
      <img
        src={image}
        className="card-img-top"
        alt={title}
        style={{ height: "220px", objectFit: "cover" }}
      />

      <div className="card-body">
        <span className="badge bg-success mb-2">{discount} OFF</span>

        <h5 className="card-title fw-bold">{title}</h5>

        <p className="card-text text-secondary">{description}</p>

        <div className="d-flex align-items-center gap-2 mb-3">
          <span className="text-decoration-line-through text-secondary">
            ${oldPrice}
          </span>

          <h5 className="text-success fw-bold mb-0">${newPrice}</h5>
        </div>

        <Link to={`/offers/${id}`} className="btn btn-success w-100">
          View Details
        </Link>
      </div>
    </div>
  );
}

export default FoodCard;
