import React from 'react';
import '../App.css'

function Calendar() {
  return (
    <div className="calendar-container">
      <iframe
        src="https://calendar.google.com/calendar/embed?src=f1205b7657fe9a4a469c544171e513b42f803bb74da50b545925112c6a34b9eb%40group.calendar.google.com&ctz=Europe%2FHelsinki"
        className="calendar-iframe"
        frameBorder="0"
        scrolling="no"
        title="Google Calendar"
      ></iframe>
    </div>
  );
}

export default Calendar;

