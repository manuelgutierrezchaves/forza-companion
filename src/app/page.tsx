import Navbar from '@/components/Navbar'
import Image from 'next/image'
import { auth } from '@clerk/nextjs'

export default function Home() {
  const { userId } = auth()

  return (
    <div className="pt-40 flex flex-col items-center justify-center p-5">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-2xl text-center">
        <h1 className="text-4xl font-bold mb-5">Home Page</h1>
        <Image
          src="/images/car.jpeg"
          alt="Descripción de la imagen"
          width={600}
          height={400}
          className="rounded"
        />
        {userId && (
          <div className="mt-5 text-2xl">
            You are signed up with user id:
            <span className="font-semibold ml-2">{userId}</span>
          </div>
        )}
      </div>
    </div>
  )
}
