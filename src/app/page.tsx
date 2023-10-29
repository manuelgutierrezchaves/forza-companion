import Navbar from '@/components/Navbar'
import Image from 'next/image'
import { auth } from '@clerk/nextjs'

export default function Home() {
  const { userId } = auth()

  return (
    <div>
      <h1>Home Page</h1>
      <Image
        src="/images/car.jpeg"
        alt="Descripción de la imagen"
        width={600}
        height={400}
      />
      {userId && (
        <div className='text-3xl'>You are signed up with user id: {userId}</div>
      )}
    </div>
  )
}
