import React, { useEffect, useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'moment/locale/fi';
import axios from 'axios';
import 'react-big-calendar/lib/css/react-big-calendar.css';
moment.locale('fi');

const localizer = momentLocalizer(moment);

const GoogleCalendar = () => {
    const [events, setEvents] = useState([]);
    const [currentDate, setCurrentDate] = useState(new Date());

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

                // Suodatetaan tapahtumat niin, että vain yksi tapahtuma per päivä sallitaan
                const eventsByDay = {};

                response.data.items.forEach(event => {
                    const isAllDayEvent = !event.start.dateTime; // Tarkistetaan, onko koko päivän tapahtuma
                    const eventDate = new Date(event.start.dateTime || event.start.date).toDateString();

                    // Lisää tapahtuma vain, jos päivälle ei ole jo tapahtumaa
                    if (!eventsByDay[eventDate]) {
                        eventsByDay[eventDate] = {
                            id: event.id,
                            title: event.summary,
                            start: isAllDayEvent
                                ? new Date(event.start.date) // Jos on koko päivän tapahtuma, käytetään vain päivämäärää
                                : new Date(event.start.dateTime),
                            end: isAllDayEvent
                                ? new Date(event.start.date) // Sama loppupäivämäärä koko päivän tapahtumille
                                : new Date(event.end.dateTime || event.end.date),
                            allDay: isAllDayEvent
                        };
                    }
                });

                setEvents(Object.values(eventsByDay));
            } catch (error) {
                console.error('Virhe tapahtumien hakemisessa:', error);
            }
        };

        fetchEvents();
    }, []);

    const handleNavigate = (newDate) => {
        setCurrentDate(newDate);
    };

    const messages = {
        today: 'Tänään',
        next: '>',
        previous: '<',
        month: "Kuukausi",
        week: 'Viikko',
    };
    
    return (
        <div>
            <h2>Varauskalenteri</h2>
            <Calendar
                localizer={localizer}
                culture='fi-FI'
                messages={messages}
                events={events}
                startAccessor="start"
                endAccessor="end"
                defaultView="month"
                views={['month']}
                date={currentDate}
                onNavigate={handleNavigate}
                style={{ width: 1000, height: 600 }}
            />
        </div>
    );
};

export default GoogleCalendar;
