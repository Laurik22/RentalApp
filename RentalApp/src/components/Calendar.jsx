import React, { useEffect, useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'moment/locale/fi';
moment.locale('fi');
import axios from 'axios';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import CustomCalendarToolbar from '../components/CustomCalendarToolbar'


const localizer = momentLocalizer(moment);

const GoogleCalendar = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        const fetchEvents = async () => {
            const calendarId = 'f1205b7657fe9a4a469c544171e513b42f803bb74da50b545925112c6a34b9eb@group.calendar.google.com'; // Kalenterin ID
            const apiKey = 'AIzaSyAOL9uEo5DxYCZ7jWlXnhG9Cu45fh88xpo'; 
            const timeMin = new Date().toISOString(); 

            try {
                const response = await axios.get(`https://www.googleapis.com/calendar/v3/calendars/${calendarId}/events`, {
                    params: {
                        key: apiKey,
                        timeMin: timeMin,
                        singleEvents: true,
                        orderBy: 'startTime',
                    }
                });

                const fetchedEvents = response.data.items.map(event => ({
                    id: event.id,
                    title: event.summary,
                    start: new Date(event.start.dateTime || event.start.date),
                    end: new Date(event.end.dateTime || event.end.date),
                }));

                setEvents(fetchedEvents);
            } catch (error) {
                console.error('Virhe tapahtumien hakemisessa:', error);
            }
        };

        fetchEvents();
    }, []);

    return (
        <div>
            <h2>Varauskalenteri</h2>
            <Calendar
                culture='fi'
                localizer={localizer}
                events={events}
                startAccessor="start"
                endAccessor="end"
                style={{width: 1000, height: 600,  margin: '50px' }}
            />
        </div>

    );
};

export default GoogleCalendar;
