import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Components/NavBar";
import Footer from "./Components/Footer";

import HomePage from "./Pages/HomePage";
import OffersPage from "./Pages/OffersPage";
import OfferDetailsPage from "./Pages/OfferDetailsPage";
import ReservationsPage from "./Pages/ReservationsPage";
import AboutPage from "./Pages/AboutPage";
import ContactPage from "./Pages/ContactPage";

function App() {
  const [reservations, setReservations] = useState([]);

  const handleReserve = (offer, quantity) => {
    const newReservation = {
      reservationId: Date.now(),
      ...offer,
      quantity: quantity,
    };

    setReservations([...reservations, newReservation]);
  };

  const handleCancel = (id) => {
    setReservations(reservations.filter((item) => item.reservationId !== id));
  };

  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/offers" element={<OffersPage />} />

        <Route
          path="/offers/:id"
          element={<OfferDetailsPage onReserve={handleReserve} />}
        />

        <Route
          path="/reservations"
          element={
            <ReservationsPage
              reservations={reservations}
              onCancel={handleCancel}
            />
          }
        />

        <Route path="/about" element={<AboutPage />} />

        <Route path="/contact" element={<ContactPage />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
