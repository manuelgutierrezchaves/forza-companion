import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="pt-20 flex flex-col justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-6xl font-bold text-red-500 mb-4">404</h1>
        <p className="text-xl mb-4">Oops! It seems this page doesn&apos;t exist.</p>
        <Link href="/" className="text-blue-500 hover:underline">Return home</Link>
      </div>
    </div>
  );

}
