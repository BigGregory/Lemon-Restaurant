// Generate data
export const generateDatesAndTimes = () => {
  const monthLength = 31;
  const resultDatesAndTimes = {};

  for (let i = 0; i <= monthLength; i++) {
    let itemDate = new Date();
    itemDate.setDate(itemDate.getDate() + i);
    if (i % 2 === 0) {
      resultDatesAndTimes[itemDate.toISOString().split('T')[0]] = [
        '18:00',
        '20:00',
        '22:00',
      ];
    } else {
      resultDatesAndTimes[itemDate.toISOString().split('T')[0]] = [
        '17:00',
        '19:00',
        '21:00',
        '23:00',
      ];
    }
  }
  return resultDatesAndTimes;
};
const availableTimesByDate = generateDatesAndTimes();

export const fetchAPI = (date) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (availableTimesByDate[date]) {
        resolve(availableTimesByDate[date]);
      } else {
        reject(new Error('There is no available time for selected date'));
      }
    }, 500);
  });
};

// TODO
export const mockApi = (formData) => {};
