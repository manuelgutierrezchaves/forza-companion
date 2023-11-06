import { getRaces } from "@/app/lib/getRaces";
import { notFound } from "next/navigation";
import RacesCarousel from "@/components/RacesCarousel";
import UserTyreForm from "@/components/UserTyres";
import { auth } from "@clerk/nextjs";


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
  const { userId } : { userId: string | null } = auth();
  console.log(userId)
  const serieAsNumber = parseInt(serie, 10);
  const races: Race[] = await getRaces(serieAsNumber);
  if (!races?.length) {
    notFound()
  }

  return (
    <div>
      <RacesCarousel races={races} />
      <UserTyreForm races={races} userId={userId} />
    </div>
  );
}
