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
  const { race } = result
  console.log(race)

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="flex w-full max-w-screen-lg">
        <div className="w-1/2 p-2">
          <Image
            src={`/${race[0]?.image}`}
            alt={`${race?.circuit} circuit`}
            width={1200}
            height={900}
          />
        </div>
        <div className="w-1/2 p-8">
          <h2 className="text-2xl font-bold mb-4">{race?.circuit}</h2>
          <ul className="list-disc pl-4">
            <li>Cars: {race?.cars}</li>
            <li>Max IR: {race?.maxir}</li>
          </ul>
          <h3 className="text-xl font-semibold mb-4 pt-8">Recommended tyre strategy</h3>
          <div className="pt-4 pb-4">
            <TireTracker tireData={[{"hard": 10}, {"soft": 10}, {"wet": 2}]} />
          </div>
        </div>
      </div>
    </div>
  )
}
