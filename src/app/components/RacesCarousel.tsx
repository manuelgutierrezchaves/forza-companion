import { getRaces } from '../lib/races';
import RaceCard from './RaceCard';

interface Race {
  id: number
  circuit: string;
  cars: string;
  maxIr: number;
}

export default async function RacesCarousel(raceType: string) {
  const result = await getRaces(raceType)
  const { races } = result

  return (
    <div className="carousel carousel-center p-4 space-x-4 rounded-box">
      {races?.map((race) => (
        <div className="carousel-item" key={race.id}>
          <RaceCard race={race} />
        </div>
      ))}
    </div>
  );
}
