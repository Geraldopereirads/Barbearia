import { db } from "@/app/_lib/prisma";
import { BarbershopDetailsProps } from "@/app/interfaces/barbershop-interface";
import BarbershopInfo from "./_components/barbershop-info";

const BarbershopDetailsPage = async ({ params }: BarbershopDetailsProps) => {
  if (!params.id) {
    return null;
  }

  const barbershop = await db.barbershop.findUnique({
    where: {
      id: params.id,
    },
  });

  if (!barbershop) {
    return null;
  }
  return (
    <>
      <BarbershopInfo barbershop={barbershop}/>
    </>
  );
};

export default BarbershopDetailsPage;
