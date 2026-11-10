import Reservations from "../Components/Reservations";

function ReservationsPage({ reservations, onCancel }) {
  return <Reservations reservations={reservations} onCancel={onCancel} />;
}

export default ReservationsPage;
