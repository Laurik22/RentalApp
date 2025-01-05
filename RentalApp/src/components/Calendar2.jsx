import React, { useEffect,useState } from 'react';
import Calendar from 'react-calendar';
import '../App.css'
import axios from 'axios';

function Calendar2() {
  const [events, setEvents] = useState([]);

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
              console.log(events)
          
              const eventsByDay = {};

              response.data.items.forEach(event => {
                
                const eventDate = new Date(event.start.dateTime || event.start.date).toDateString();
              
                if (!eventsByDay[eventDate]) {
                  eventsByDay[eventDate] = {
                    id: event.id,
                    title: event.summary,
                    start: new Date(event.start.dateTime || event.start.date),
                    end: new Date(event.end.dateTime || event.end.date),
                  };
                }
              });
              console.log(events)
              setEvents(Object.values(eventsByDay));
              
          } catch (error) {
              console.error('Virhe tapahtumien hakemisessa:', error);
          }
      };

      fetchEvents();
  }, []);

  return (
    <div className='calendar-container'>
    <Calendar
      tileClassName={({ date, view }) => {
        if (view === 'month') {
          const eventDates = events.map(event => event.start.toDateString());
          if (eventDates.includes(date.toDateString())) {
            return 'event-day-red';
          }
        }
        return null;
      }}
      showNeighboringMonth={false}
    />
    </div>
  );
};
export default Calendar2;