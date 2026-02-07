import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function Medicine() {
  return (
    <>
      <Header />
      <main className="pt-24 min-h-screen bg-[#0B2C33] text-white flex items-center justify-center">
        <h1 className="text-5xl font-bold">Medicine Page</h1>
      </main>
      <Footer />
    </>
  );
}
