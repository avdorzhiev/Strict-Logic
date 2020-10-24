const { getLastDayOfMonth } = require("./getLastDayOfMonth");


function getDay(date) {
  let day = date.getDay();
  if (day === 0) day = 7;
  return day - 1;
}
const createTable = (year, month) => {

  let dateTable = [
    [],
    [],
    [],
    [],
    [],
    [],
  ];

  let index = 1;
  let week = 0;
  let date = new Date(year, month);
  let firstDay = getDay(date);

  for (let i = 0; i < firstDay; i++) {
    dateTable[week].push(
      {
        current: 0,
        day: getLastDayOfMonth(year, month - 1) - firstDay + i + 1
      }
    )
  }

  while (date.getMonth() == month) {
    // debugger;
    dateTable[week].push(
      {
        current: 1,
        day: date.getDate()
      }
    );
    if (dateTable[week].length == 7) {
      week++;
    }
    date.setDate(date.getDate() + 1);
  }

  while (week != 6) {
    while (dateTable[week].length != 7) {
      dateTable[week].push({
        current: 0,
        day: index
      }
      );
      index++;
    }
    week++;
  }
  return dateTable;
}


export default createTable;