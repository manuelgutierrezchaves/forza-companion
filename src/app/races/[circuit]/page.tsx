import { getRace } from "@/app/lib/getRace"
import Image from "next/image";
import TireTracker from '@/app/components/TyreUsedBar'


type Params = {
  params: {
    circuit: string
  }
}

export default async function RacePage({ params: { circuit } }: Params) {
  const result = await getRace(circuit)
  const { race } = result

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="flex w-full max-w-screen-lg">
        <div className="w-1/2 p-2">
          <Image
            className="hover:opacity-100 opacity-50"
            src={`/${circuit}.jpg`}
            alt={`${circuit} circuit`}
            width={1200}
            height={900}
          />
        </div>
        <div className="w-1/2 p-8">
          <h2 className="text-2xl font-semibold mb-4">{race?.circuit}</h2>
          <ul className="list-disc pl-4">
            <li>Circuit: {race?.circuit}</li>
            <li>Cars: {race?.cars}</li>
            <li>Max IR: {race?.maxir}</li>
            <li>Race Type: {race?.race_type?.race_type}</li>
          </ul>
          <div className="p-4">
            <TireTracker tireData={[{"hard": 10}, {"soft": 3}, {"wet": 2}, {"medium": 6}]} />
          </div>
        </div>
      </div>
    </div>
  )
}
