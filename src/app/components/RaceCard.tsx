import Link from "next/link";

type Race = {
  circuit: string;
  cars: string;
  maxIr: number;
};

const RaceCard = ({ race }: { race: Race }) => {
  return (
    <Link href={`/races/${race.circuit}`} className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img className="hover:opacity-100 opacity-50" src={`/${race.circuit.replace(/\s/g, '_')}.jpg`} alt={`${race.circuit} image`} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{race.circuit}</h2>
        <ul>
          <li>{race.cars}</li>
          <li>Max class {race.maxIr}</li>
        </ul>
      </div>
    </Link>
  );
}

export default RaceCard;
