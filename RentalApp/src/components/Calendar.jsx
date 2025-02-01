import React, { useEffect,useState } from 'react';
import Calendar from 'react-calendar';
import '../App.css'
import axios from 'axios';

function ResCalendar() {
  const [eventDates, setEventDates] = useState(new Set());

  useEffect(() => {
      const fetchEvents = async () => {
        
          const calendarId = 'f1205b7657fe9a4a469c544171e513b42f803bb74da50b545925112c6a34b9eb@group.calendar.google.com';
          const apiKey = 'AIzaSyAOL9uEo5DxYCZ7jWlXnhG9Cu45fh88xpo';

          const timeMin = new Date(new Date().getFullYear(), 0, 1).toISOString(); 
          const timeMax = new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toISOString();

          try {
              const response = await axios.get(`https://www.googleapis.com/calendar/v3/calendars/${calendarId}/events`, {
                  params: {
                      key: apiKey,
                      timeMin: timeMin,
                      timeMax: timeMax,
                      singleEvents: true,
                      orderBy: 'startTime',
                  }
              });
              const dates = new Set(
                response.data.items.map(event => new Date(event.start.dateTime || event.start.date).toDateString())
              );
      
              setEventDates(dates);
            } catch (error) {
              console.error('Virhe tapahtumien hakemisessa:', error);
            }
      };

      fetchEvents();
  }, []);
  
  const minDate = new Date();
  const maxDate = new Date();
  maxDate.setFullYear(maxDate.getFullYear() + 1); 

  return (
    <Calendar
    tileClassName={({ date, view }) =>
      view === 'month' && eventDates.has(date.toDateString()) ? 'event-day-red' : null
    }
      showNeighboringMonth={false}
      next2Label={null}
      prev2Label={null}
      maxDate={maxDate}
      minDate={minDate}
    />
  );
};
export default ResCalendar;