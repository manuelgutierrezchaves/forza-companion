import { getEvents } from '../lib/getEvents';
import EventCard from './EventCard';


interface EventsCarouselProps {
  eventType: string;
}

export default async function EventsCarousel({ eventType }: EventsCarouselProps ) {
  const result = await getEvents(eventType)
  const { series } = result

  return (
    <div className="carousel carousel-center p-4 space-x-4 rounded-box">
      {series?.map((serie) => (
        <div className="carousel-item" key={serie.id}>
          <EventCard race={serie} />
        </div>
      ))}
    </div>
  );
}
