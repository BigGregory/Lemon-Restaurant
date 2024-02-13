const BookingForm = ({
  reserveTableData,
  setReserveTableData,
  availableTimes,
}) => {
  const onChange = (e) => {
    setReserveTableData({
      ...reserveTableData,
      [e.target.name]: e.target.value,
    });
  };
  const onFormSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form
      style={{ display: 'grid', maxWidth: '200px', gap: '20px' }}
      onSubmit={onFormSubmit}
    >
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        value={reserveTableData.date}
        onChange={onChange}
        name="date"
      />
      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time"
        name="time"
        onChange={onChange}
        value={reserveTableData.time}
      >
        {availableTimes.map((time) => (
          <option key={time}>{time}</option>
        ))}
      </select>
      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        placeholder="1"
        min="1"
        max="10"
        id="guests"
        name="guests"
        value={reserveTableData.guests}
        onChange={onChange}
      />
      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        name="occasion"
        value={reserveTableData.occasion}
        onChange={onChange}
      >
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>
      <input type="submit" value="Make Your reservation" />
    </form>
  );
};

export default BookingForm;
