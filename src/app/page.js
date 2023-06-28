import "../styles/globals.css";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <main className="flex flex-col w-full">
        <header className="flex w-full justify-center text-white items-center h-[100px] bg-slate-600 ">
          <nav className="flex text-center mx-auto max-w-7xl justify-between w-full px-4  ">
            <Link className="text-3xl text-zinc-200 font-extrabold" href="/">
              <h1>BMG Services</h1>
            </Link>
            <ul className="flex gap-4 text-white text-2xl">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/services">Services</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
        </header>

        <Hero />
        <Features />
      </main>
    </>
  );
}
