import { getEvents } from '../app/lib/getEvents';
import EventCard from './EventCard';
import { notFound } from 'next/navigation';


interface EventsGridProps {
  eventType: string;
}

export default async function EventsGrid({ eventType }: EventsGridProps ) {
  const result = await getEvents(eventType)
  const { series } = result
  if (!series?.length) {
    notFound()
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {series?.map((serie) => (
        <div className="carousel-item" key={serie.id}>
          <EventCard race={serie} />
        </div>
      ))}
    </div>
  );
}
