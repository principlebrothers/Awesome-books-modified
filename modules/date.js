import { DateTime } from "./luxon.js";

const displayDateTime = () => {
  const dateAndTime = document.querySelector('.time-and-date');

  const today = DateTime.local();
  const currentDateTime = today.toLocaleString(DateTime.DATETIME_FULL_WITH_SECONDS);
  dateAndTime.innerHTML = currentDateTime;
}

export default displayDateTime;
