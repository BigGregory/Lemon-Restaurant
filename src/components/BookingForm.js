import { submitApi } from '../ApiMock';

const BookingForm = ({
  userInputData,
  setUserInputData,
  availableTimes,
  setAvailableTimes,
}) => {
  const onChange = (e) => {
    setUserInputData({
      ...userInputData,
      [e.target.name]: e.target.value,
    });
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    submitApi(userInputData);
    console.log(userInputData);
    setUserInputData({
      date: '',
      time: '',
      guests: '',
      occasion: '',
    });
    setAvailableTimes({
      type: 'setAvaliableTime',
      payload: [],
    });
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
        value={userInputData.date}
        onChange={(e) => {
          onChange(e);
        }}
        name="date"
      />
      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time"
        name="time"
        onChange={onChange}
        value={userInputData.time}
      >
        {availableTimes.length
          ? ['', ...availableTimes].map((time) => (
              <option key={time}>{time}</option>
            ))
          : []}
      </select>
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
      />
      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        name="occasion"
        value={userInputData.occasion}
        onChange={onChange}
      >
        <option></option>
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>
      <input type="submit" value="Make Your reservation" />
    </form>
  );
};

export default BookingForm;
