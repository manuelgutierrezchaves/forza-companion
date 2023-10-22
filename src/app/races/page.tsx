import RacesCarousel from '../components/RacesCarousel'
import TopMenu from '../components/TopMenu'

const RacesPage = () => {
  return (
    <div>
      <TopMenu />
      <h1 className="flex justify-center"></h1>
      <div className="flex justify-center"><RacesCarousel /></div>
    </div>
  )
}

export default RacesPage
