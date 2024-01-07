import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-blue-500 px-8 py-4 sticky top-0 z-50 flex">
      <Image
        priority
        src="/streaver-logo.png"
        height={28}
        width={24}
        alt="Streaver Logo"
      />
      <Link href="/" className="text-white text-xl font-semibold ml-2">
        StreaverBlog
      </Link>
    </nav>
  );
};
