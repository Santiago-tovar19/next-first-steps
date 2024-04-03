import { Navbar } from "@/components/navbar/Navbar";

export default function GeneralLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center  p-24 m-2">
        <span className="text-5xl text-gray-50">Hola Mundo</span>
        {children}
      </main>
    </>
  );
}
