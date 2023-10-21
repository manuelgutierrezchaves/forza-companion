import Link from 'next/link';

const TopMenu = () => {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto">
        <ul className="flex space-x-4">
          <li>
            <Link href="/" className="text-white">Home</Link>
          </li>
          <li>
            <Link href="/cars" className="text-white ml-10">Cars</Link>
          </li>
          <li>
            <Link href="/races" className="text-white">Races</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default TopMenu;
