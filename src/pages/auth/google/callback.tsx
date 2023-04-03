import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

interface GoogleCalendarEvent {
  id: string;
  summary: string;
  description?: string;
  location?: string;
  start: {
    dateTime: string;
    timeZone?: string;
  };
  end: {
    dateTime: string;
    timeZone?: string;
  };
  status: string;
  created: string;
  updated: string;
  htmlLink: string;
  organizer: {
    email: string;
    displayName?: string;
  };
  attendees?: Array<{
    email: string;
    displayName?: string;
    responseStatus: string;
  }>;
}

const GoogleCallback = () => {
  const router = useRouter();
  const { code } = router.query;

  const [events, setEvents] = useState<GoogleCalendarEvent[]>([]);

  useEffect(() => {
    const getEvents = async () => {
      const response = await fetch(`/api/calendar/fetch?code=${code}`);

      const json = await response.json();

      setEvents(json);
    };

    if (code) getEvents();
  }, [code, router]);

  return events.length === 0 ? (
    <div>Loading...</div>
  ) : (
    <ul>
      {events.map((event) => (
        <li key={event.id}>
          <span> {event.summary}</span>
          <span> {new Date(event.start.dateTime).toLocaleDateString()}</span>
        </li>
      ))}
    </ul>
  );
};

export default GoogleCallback;
