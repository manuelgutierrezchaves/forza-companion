import RaceCard from "./RaceCard"

const RacesCarousel = () => {
  return (
		<div className="carousel carousel-center p-4 space-x-4 rounded-box">
			<div className="carousel-item">
				<RaceCard />
			</div>
			<div className="carousel-item">
				<RaceCard />
			</div>
			<div className="carousel-item">
				<RaceCard />
			</div>
		</div>
  )
}

export default RacesCarousel
