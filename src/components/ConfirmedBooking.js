import confirmIcon from '../assets/success-booking.svg';

const ConfirmedBooking = () => {
  return (
    <div className="confirmed-booking content-container">
      <div className="confirmed-banner">
        <img src={confirmIcon} className="icon-success" alt="success" />
        <h2>Your booking is confirmed!</h2>
      </div>
    </div>
  );
};

export default ConfirmedBooking;
