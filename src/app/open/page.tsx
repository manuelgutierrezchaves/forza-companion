import RacesCarousel from '../components/RacesCarousel'

export const revalidate = 60; // Refresh db fetch in seconds

export default async function RacesPage() {
  return (
    <div>
      <h1 className="flex justify-center"></h1>
      <div className="flex justify-center"><RacesCarousel /></div>
    </div>
  )
}
