import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Image from "next/image";

export default function Partners() {

  const partners = [
    "/partner1.png",
    "/partner2.png",
    "/partner3.png",
    "/partner4.png",
  ];

  return (
    <>
      <Header />

      <section className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6">

          <h1 className="text-4xl font-bold text-center text-blue-600 mb-12">
            Our Partners
          </h1>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 items-center">

            {partners.map((logo, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-lg p-6 flex justify-center"
              >
                <Image
                  src={logo}
                  alt="Partner"
                  width={150}
                  height={80}
                  className="object-contain"
                />
              </div>
            ))}

          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}