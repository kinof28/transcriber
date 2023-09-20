import Link from "next/link";
import { MdVideoLibrary } from "react-icons/md";

const Navbar = () => {
  return (
    <nav className=" bg-[#F9F9FC] flex items-center justify-between p-5 sticky top-0 z-50 w-full drop-shadow-black drop-shadow-md">
      <Link href={"/"}>
        <div className="flex items-center gap-2 cursor-pointer">
          <MdVideoLibrary className="text-violet-700 text-3xl" />
          <h1 className="text-indigo-900 font-sans font-bold text-2xl">
            Transcriber
          </h1>
        </div>
      </Link>
      <div className="text-lg flex gap-2 font-medium no-underline underline-offset-4 font-sans ">
        <Link
          href="/about"
          className="hover:underline hover:-translate-y-1 transition"
        >
          About
        </Link>
        <Link
          href="/contact"
          className="hover:underline hover:-translate-y-1 transition"
        >
          Contact
        </Link>
        <Link
          href="/auth"
          className="hover:underline hover:-translate-y-1 transition"
        >
          Sign In
        </Link>
        <Link
          href="/auth"
          className="hover:underline hover:-translate-y-1 transition"
        >
          Try for Free
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
