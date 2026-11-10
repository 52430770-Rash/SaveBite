import { Link } from "react-router-dom";

function Reservations({ reservations, onCancel }) {
  return (
    <div className="container mt-5 mb-5">
      <div className="text-center mb-5">
        <h1 className="fw-bold">My Reservations</h1>
        <p className="text-secondary">
          Manage your food reservations and collect your orders.
        </p>
      </div>

      {reservations.length === 0 ? (
        <div className="text-center p-5 bg-white rounded-4 shadow-sm">
          <h2>🥡</h2>
          <h4>No Reservations Yet</h4>

          <p className="text-secondary">
            You haven't reserved any food yet. Discover our available offers!
          </p>

          <Link to="/offers" className="btn btn-success mt-2">
            Browse Offers
          </Link>
        </div>
      ) : (
        <div className="row">
          {reservations.map((item) => (
            <div className="col-md-6 col-lg-4 mb-4" key={item.reservationId}>
              <div className="card h-100 shadow-sm">
                <img
                  src={item.image}
                  className="card-img-top"
                  alt={item.title}
                  style={{ height: "200px", objectFit: "cover" }}
                />

                <div className="card-body">
                  <span className="badge bg-success mb-2">Reserved</span>

                  <h5 className="fw-bold">{item.title}</h5>

                  <p className="text-secondary">Business: {item.business}</p>

                  <p>Quantity: {item.quantity}</p>

                  <h5 className="text-success">
                    Total: ${item.newPrice * item.quantity}
                  </h5>

                  <p className="small">
                    <strong>Pickup:</strong> {item.pickupTime}
                  </p>

                  <button
                    className="btn btn-outline-danger w-100"
                    onClick={() => onCancel(item.reservationId)}
                  >
                    Cancel Reservation
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Reservations;
