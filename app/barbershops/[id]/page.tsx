import { db } from "@/app/_lib/prisma";
import { BarbershopDetailsProps } from "@/app/interfaces/barbershop-interface";
import BarbershopInfo from "./_components/barbershop-info";
import ServiceItem from "./_components/service-item";
import { getServerSession } from "next-auth";

const BarbershopDetailsPage = async ({ params }: BarbershopDetailsProps) => {

  const session = await getServerSession()

  if (!params.id) {
    return null;
  }

  const barbershop = await db.barbershop.findUnique({
    where: {
      id: params.id,
    },
    include: {
      services: true,
    },
  });

  if (!barbershop) {
    return null;
  }
  return (
    <div>
      <BarbershopInfo barbershop={barbershop} />

      <div className="px-1 flex flex-col gap-4 py-6">
      {barbershop.services.map((service) => (
        <ServiceItem key={service.id} services={service} isAuthenticated={!!session?.user}/>
      ))}

      </div>

    </div>
  );
};

export default BarbershopDetailsPage;
