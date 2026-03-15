import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Image from "next/image";

export default function Team() {
  const team = [
    {
      name: "Dr. John Smith",
      role: "Research Director",
      image: "/team1.jpg",
    },
    {
      name: "Dr. Sarah Williams",
      role: "Publication Manager",
      image: "/team2.jpg",
    },
    {
      name: "Dr. Michael Brown",
      role: "Scientific Advisor",
      image: "/team3.jpg",
    },
  ];

  return (
    <>
      <Header />

      <section className="pt-32 pb-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">

          <h1 className="text-4xl font-bold text-center text-blue-600 mb-12">
            Our Team
          </h1>

          <div className="grid md:grid-cols-3 gap-10">

            {team.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md p-6 text-center"
              >
                <Image
                  src={member.image}
                  alt={member.name}
                  width={200}
                  height={200}
                  className="mx-auto rounded-full mb-4"
                />

                <h3 className="text-xl font-semibold">
                  {member.name}
                </h3>

                <p className="text-gray-600">
                  {member.role}
                </p>
              </div>
            ))}

          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}