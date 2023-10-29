import { getRaces } from "@/app/lib/getRaces";
import { notFound } from "next/navigation";
import RacesCarousel from "@/components/RacesCarousel";
import UserTyreForm from "@/components/UserTyres";


type Params = {
  params: {
    serie: string;
  };
};

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

export default async function RacePage({ params: { serie } }: Params) {
  const serieAsNumber = parseInt(serie, 10);
  const races: Race[] = await getRaces(serieAsNumber);
  if (!races?.length) {
    notFound()
  }

  return (
    <div>
      <RacesCarousel races={races} />
      <UserTyreForm races={races} />
    </div>
  );
}
