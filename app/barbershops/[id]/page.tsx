import { db } from "@/app/_lib/prisma";
import { BarbershopDetailsProps } from "@/app/interfaces/barbershop-interface";
import BarbershopInfo from "./_components/barbershop-info";
import ServiceItem from "./_components/service-item";

const BarbershopDetailsPage = async ({ params }: BarbershopDetailsProps) => {
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
        <ServiceItem key={service.id} services={service} />
      ))}

      </div>

    </div>
  );
};

export default BarbershopDetailsPage;
