import Image from "next/image";
import TireTracker from "./TyreUsedBar";

interface TireData {
  [key: string]: number;
}

interface Race {
  id: number,
  laps: number,
  circuit: string,
  circuit_configuration: string,
  series_id: number,
  image: string,
  tyres: TireData[]
}

interface RacesCarouselProps {
  races: Race[];
}

const RacesCarousel: React.FC<RacesCarouselProps> = ({ races }) => {
  return (
    <div className="carousel w-full lg:pt-28">
      {races?.map((race, index) => (
        <div key={index} id={`race${index+1}`} className="carousel-item relative w-full flex justify-center items-center">
          <div className="flex flex-col md:flex-row w-full max-w-screen-lg bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="w-full md:w-1/2 p-2">
              <Image
                src={`/images/${race.image}`}
                alt={`${race.circuit} circuit`}
                width={1200}
                height={900}
              />
            </div>
            <div className="w-full md:w-1/2 p-8">
              <h2 className="text-3xl font-bold mb-4">{race.circuit}</h2>
              <h2 className="text-xl font-semibold mb-4">{race.circuit_configuration}</h2>
              <h2 className="text-lg mb-4">{race.laps} laps</h2>
              <h3 className="text-2xl font-semibold mb-4 pt-8">Recommended tyre strategy</h3>
              <div className="pt-4 pb-4">
                <TireTracker
                  tireData={race.tyres}
                  totalWidth={330}
                />
              </div>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href={`#race${index === 0 ? races.length : index}`} className="btn btn-circle opacity-40">❮</a>
            <a href={`#race${index === races.length - 1 ? 1 : index + 2}`} className="btn btn-circle opacity-40">❯</a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RacesCarousel;
