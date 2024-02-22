import Link from "next/link";
import Image from "next/image";
import { User } from "lucide-react";

const Header = () => {
  return (
    <header className="flex items-center justify-between px-4 py-2 bg-zinc-100 text-white overflow-x-hidden max-h-20 sticky overflow-hidden">
        <Link href="/dashboard" className="flex items-center justify-center">
          <Image
            src="/logo.svg"
            alt="Logo de l'entreprise"
            width={40}
            height={40}
            className="w-40 h-40"
          />
        </Link>
      <nav className="flex items-center space-x-4 text-gray-700">
        <ul className="flex items-center space-x-4">
          <li>
            <Link href="/about" className="hover:text-black hover:font-bold">
              À Propos
            </Link>
          </li>
          <li>
            <Link href="/events" className="hover:font-bold hover:text-black">
              Évènements
            </Link>
          </li>
          <li>
            <Link href="/association" className="hover:text-black hover:font-bold">
              L'association
            </Link>
          </li>
          <li>
            <Link href="/news" className="hover:text-black hover:font-bold">
              Actualités
            </Link>
          </li>
        </ul>
        <Link href="/login" className="flex items-center justify-center pl-20 px-5">
            <User />
        </Link>
      </nav>
    </header>
  );
};

export default Header;
