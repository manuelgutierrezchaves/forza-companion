import { getRaces } from "@/app/lib/getRaces"
import Image from "next/image";
import TireTracker from '@/app/components/TyreUsedBar'


type Params = {
  params: {
    serie: string
  }
}

export default async function RacePage({ params: { serie } }: Params) {
  const serieAsNumber = parseInt(serie, 10);
  const result = await getRaces(serieAsNumber)
  const { races } = result

  return (
    <div className="carousel w-full">
      {races?.map((race, index) => (
        <div key={index} id={`race${index+1}`} className="carousel-item relative w-full min-h-screen flex justify-center items-center">
          <div className="flex w-full max-w-screen-lg bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="w-1/2 p-2">
              <Image
                src={`/${race.image}`}
                alt={`${race.circuit} circuit`}
                width={1200}
                height={900}
              />
            </div>
            <div className="w-1/2 p-8">
              <h2 className="text-3xl font-bold mb-4">{race.circuit}</h2>
              <h2 className="text-xl font-semibold mb-4">{race.circuit_configuration}</h2>
              <h2 className="text-lg mb-4">{race.laps} laps</h2>
              <h3 className="text-2xl font-semibold mb-4 pt-8">Recommended tyre strategy</h3>
              <div className="pt-4 pb-4">
                <TireTracker tireData={[{"medium": 5}, {"soft": 3}]} />
              </div>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href={`#race${index === 0 ? races.length : index}`} className="btn btn-circle">❮</a>
            <a href={`#race${index === races.length - 1 ? 1 : index + 2}`} className="btn btn-circle">❯</a>
          </div>
        </div>
      ))}
    </div>
  )
}
