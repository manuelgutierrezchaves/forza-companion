import Link from "next/link";
import Image from "next/image";

interface Race {
  id: number
  name: string;
  car_restriction: string;
  length: string;
  type: string;
  image: string;
}

const EventCard = ({ race }: { race: Race }) => {
  return (
    <Link href={`/races/${race.id}`} className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <Image
          className="hover:opacity-100 xl:opacity-60 transition-opacity duration-500"
          src={`/${race.image}`}
          alt={`${race.image} image`}
          width={400}
          height={300}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{race.name}</h2>
        <ul className="text-gray-600">
          <li className="mb-2">
            <strong>Car Restriction:</strong> {race.car_restriction}
          </li>
          <li className="mb-2">
            <strong>Length:</strong> {race.length}
          </li>
        </ul>
      </div>
    </Link>
  );
}

export default EventCard;
