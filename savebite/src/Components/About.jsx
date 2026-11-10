import { Link } from "react-router-dom";

function About() {
  return (
    <div>
      {/* About Hero */}
      <section className="container mt-5 mb-5">
        <div className="row align-items-center">
          <div className="col-md-6">
            <span className="badge bg-success mb-3">About SaveBite</span>

            <h1 className="display-5 fw-bold">
              Good Food Deserves a
              <span className="text-success"> Second Chance.</span>
            </h1>

            <p className="lead text-secondary mt-3">
              SaveBite connects people with local food businesses offering
              surplus food at discounted prices.
            </p>

            <p>
              Our goal is simple: make good food more affordable while helping
              businesses reduce unnecessary food waste.
            </p>

            <Link to="/offers" className="btn btn-success btn-lg mt-3">
              Discover Offers
            </Link>
          </div>

          <div className="col-md-6 mt-4 mt-md-0">
            <img
              src="https://images.unsplash.com/photo-1547592180-85f173990554?w=900"
              className="img-fluid rounded-4 shadow"
              alt="Fresh food"
            />
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="bg-success text-white py-5">
        <div className="container text-center">
          <h2 className="fw-bold mb-3">Our Mission</h2>

          <p className="lead">
            Make affordable food accessible and help reduce food waste by
            connecting surplus food with people who can enjoy it.
          </p>
        </div>
      </section>

      {/* How We Help */}
      <section className="container mt-5 mb-5">
        <h2 className="text-center fw-bold mb-4">Why SaveBite?</h2>

        <div className="row text-center">
          <div className="col-md-4 mb-3">
            <div className="card shadow-sm p-4 h-100">
              <h1>💰</h1>
              <h4>Save Money</h4>
              <p>Discover quality food at prices that fit your budget.</p>
            </div>
          </div>

          <div className="col-md-4 mb-3">
            <div className="card shadow-sm p-4 h-100">
              <h1>🌱</h1>
              <h4>Reduce Waste</h4>
              <p>
                Give surplus food another chance instead of letting it go to
                waste.
              </p>
            </div>
          </div>

          <div className="col-md-4 mb-3">
            <div className="card shadow-sm p-4 h-100">
              <h1>🏪</h1>
              <h4>Support Businesses</h4>
              <p>Help local food businesses reach more customers.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
