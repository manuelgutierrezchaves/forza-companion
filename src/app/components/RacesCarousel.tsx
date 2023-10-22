import RaceCard from "./RaceCard"

async function getRaces() {
  const res = await fetch('http://localhost:3000/api/races')

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return await res.json()
}

interface Race {
  circuit: string
  cars: string
  maxIr: number
}

export default async function Page() {
  const res = await getRaces()
  const races = res.data

  return (
    <div className="carousel carousel-center p-4 space-x-4 rounded-box">
      {races.map((race: Race, index: number) => (
        <div className="carousel-item" key={index}>
          <RaceCard race={race} />
        </div>
      ))}
    </div>
  );
}
