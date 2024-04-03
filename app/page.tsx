import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex  flex-col items-center n p-24 m-2">
      <span className="text-5xl text-gray-50">Hola mundo!!</span>
      <Link href={"/about"}>About Page</Link>
    </main>
  );
}
