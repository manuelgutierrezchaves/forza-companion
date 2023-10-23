import TopMenu from './components/TopMenu'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <Image
        src="/car.jpeg"
        alt="Descripción de la imagen"
        width={600}
        height={400}
      />
    </div>
  )
}
