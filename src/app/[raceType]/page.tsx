import RacesCarousel from '../components/RacesCarousel'

export const revalidate = 60; // Refresh db fetch in seconds

type Params = {
  params: {
    raceType: string
  }
}

export default async function RacesPage({ params: { raceType } }: Params) {

  return (
    <div>
      <div className="flex justify-center p-20">
        <RacesCarousel
          raceType={raceType}
        />
      </div>
    </div>
  )
}
