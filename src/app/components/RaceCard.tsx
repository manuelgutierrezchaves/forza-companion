

const RaceCard = () => {
  return (
    <button className="card w-96 bg-base-100 shadow-xl">
      <figure><img className="hover:opacity-100 opacity-50" src="/spa.jpg" alt="Spa image" /></figure>
      <div className="card-body">
        <h2 className="card-title">Spa</h2>
				<ul>
					<li>Old LMP</li>
					<li>Max class 800</li>
				</ul>
      </div>
    </button>
  );
}

export default RaceCard;
