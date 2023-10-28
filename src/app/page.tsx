import Navbar from './components/Navbar'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <Image
        src="/images/car.jpeg"
        alt="Descripción de la imagen"
        width={600}
        height={400}
      />
    </div>
  )
}
