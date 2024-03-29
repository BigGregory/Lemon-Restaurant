import Button from './Button';

const BookingForm = ({
  userInputData,
  setUserInputData,
  availableTimes,
  submitForm,
}) => {
  const onChange = (e) => {
    setUserInputData({
      ...userInputData,
      [e.target.name]: e.target.value,
    });
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    submitForm(userInputData);
  };

  return (
    <form onSubmit={onFormSubmit} className="booking-form">
      <div>
        <label htmlFor="res-date">Choose date</label>
        <input
          type="date"
          id="res-date"
          value={userInputData.date}
          onChange={(e) => {
            onChange(e);
          }}
          name="date"
          required
          min={new Date().toISOString().split('T')[0]}
        />
      </div>
      <div>
        <label htmlFor="res-time">Choose time</label>
        <select
          id="res-time"
          name="time"
          onChange={onChange}
          value={userInputData.time}
          required
        >
          {availableTimes.length
            ? ['', ...availableTimes].map((time) => (
                <option key={time}>{time}</option>
              ))
            : []}
        </select>
      </div>
      <div>
        <label htmlFor="guests">Number of guests</label>
        <input
          type="number"
          placeholder="choose from 1-10"
          min="1"
          max="10"
          id="guests"
          name="guests"
          value={userInputData.guests}
          onChange={onChange}
          required
        />
      </div>
      <div>
        <label htmlFor="occasion">Occasion</label>
        <select
          id="occasion"
          name="occasion"
          value={userInputData.occasion}
          onChange={onChange}
          required
        >
          <option></option>
          <option>Birthday</option>
          <option>Anniversary</option>
          <option>Other</option>
        </select>
      </div>
      <Button
        label="Make Your Reservation"
        type="submit"
        disabled={!Object.values(userInputData).every((el) => el !== '')}
      />
    </form>
  );
};

export default BookingForm;
