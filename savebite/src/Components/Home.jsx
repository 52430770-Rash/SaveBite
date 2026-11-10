import { Link } from "react-router-dom";
import FoodCard from "./FoodCard";

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="container mt-5 mb-5">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h1 className="display-4 fw-bold">
              Save Good Food.
              <span className="text-success"> Save Money.</span>
            </h1>

            <p className="lead mt-3">
              Discover delicious food at discounted prices while helping reduce
              food waste.
            </p>

            <Link to="/offers" className="btn btn-success btn-lg mt-3">
              Explore Offers
            </Link>
          </div>

          <div className="col-md-6 mt-4 mt-md-0">
            <img
              src="https://images.unsplash.com/photo-1509440159596-0249088772ff?w=900"
              className="img-fluid rounded-4 shadow"
              alt="Fresh bakery bread"
            />
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="container mt-5">
        <h2 className="fw-bold mb-4">Explore Categories</h2>

        <div className="row">
          <div className="col-6 col-md-3 mb-4">
            <div className="card h-100 shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=500"
                className="card-img-top"
                style={{ height: "160px", objectFit: "cover" }}
                alt="Bakery"
              />
              <div className="card-body text-center">
                <h5>🥐 Bakery</h5>
              </div>
            </div>
          </div>

          <div className="col-6 col-md-3 mb-4">
            <div className="card h-100 shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500"
                className="card-img-top"
                style={{ height: "160px", objectFit: "cover" }}
                alt="Pizza and meals"
              />
              <div className="card-body text-center">
                <h5>🍕 Meals</h5>
              </div>
            </div>
          </div>

          <div className="col-6 col-md-3 mb-4">
            <div className="card h-100 shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500"
                className="card-img-top"
                style={{ height: "160px", objectFit: "cover" }}
                alt="Dessert cake"
              />
              <div className="card-body text-center">
                <h5>🍰 Desserts</h5>
              </div>
            </div>
          </div>

          <div className="col-6 col-md-3 mb-4">
            <div className="card h-100 shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500"
                className="card-img-top"
                style={{ height: "160px", objectFit: "cover" }}
                alt="Healthy salad"
              />
              <div className="card-body text-center">
                <h5>🥗 Healthy Food</h5>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Offers */}
      <section className="container mt-5 mb-5">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="fw-bold">Today's Best Deals</h2>

          <Link to="/offers" className="btn btn-outline-success">
            View All
          </Link>
        </div>

        <div className="row">
          <div className="col-md-4 mb-4">
            <FoodCard
              id={1}
              title="Bakery Surprise Box"
              image="https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600"
              description="A delicious selection of fresh bakery products."
              oldPrice="10"
              newPrice="5"
              discount="50%"
            />
          </div>

          <div className="col-md-4 mb-4">
            <FoodCard
              id={2}
              title="Fresh Pizza"
              image="https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600"
              description="Enjoy a freshly prepared pizza at a special price."
              oldPrice="12"
              newPrice="7"
              discount="42%"
            />
          </div>

          <div className="col-md-4 mb-4">
            <FoodCard
              id={3}
              title="Dessert Box"
              image="https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600"
              description="A sweet selection of delicious desserts."
              oldPrice="8"
              newPrice="4"
              discount="50%"
            />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="container mt-5 mb-5">
        <h2 className="text-center fw-bold mb-4">How SaveBite Works</h2>

        <div className="row text-center">
          <div className="col-md-4 mb-3">
            <div className="card p-4 h-100 shadow-sm">
              <h1>🔍</h1>
              <h4>Discover</h4>
              <p>Browse delicious food offers near you.</p>
            </div>
          </div>

          <div className="col-md-4 mb-3">
            <div className="card p-4 h-100 shadow-sm">
              <h1>🛒</h1>
              <h4>Reserve</h4>
              <p>Choose your favorite offer and reserve it.</p>
            </div>
          </div>

          <div className="col-md-4 mb-3">
            <div className="card p-4 h-100 shadow-sm">
              <h1>🥡</h1>
              <h4>Collect</h4>
              <p>Visit the business and collect your food.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
