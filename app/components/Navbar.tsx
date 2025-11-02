import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <header>
      <nav>
        <Link href="/" className="logo">
          <Image alt="Logo" src="/icons/logo.png" width={24} height={24} />
          <p>Dev Events</p>
        </Link>

        <ul>
          <Link href="/">Home</Link>
          <Link href="/">Events</Link>
          <Link href="/">Create Events</Link>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
