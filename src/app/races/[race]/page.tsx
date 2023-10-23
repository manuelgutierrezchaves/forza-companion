type Params = {
  params: {
    race: string
  }
}

export default async function RacePage({ params: { race } }:Params) {
  return (
      <div>Race: {race}</div>
  )
}
