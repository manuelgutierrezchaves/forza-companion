import Link from "next/link";
import Image from "next/image";

type Race = {
  circuit: string;
  cars: string;
  maxir: number;
  image: string;
};

const RaceCard = ({ race }: { race: Race }) => {
  return (
    <Link href={`/races/${race.circuit}`} className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <Image
          className="hover:opacity-100 opacity-50"
          src={`/${race.image}`}
          alt={`${race.circuit} image`}
          width={400}
          height={300}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{race.circuit}</h2>
        <ul>
          <li>{race.cars}</li>
          <li>Max class {race.maxir}</li>
        </ul>
      </div>
    </Link>
  );
}

export default RaceCard;
