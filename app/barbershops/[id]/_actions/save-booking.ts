"use server";

import { db } from "@/app/_lib/prisma";
import { SaveBookingParams } from "@/app/interfaces/barbershop-interface";

export const saveBooking = async (params: SaveBookingParams) => {
  await db.booking.create({
    data: {
      serviceId: params.serviceId,
      userId: params.userId,
      date: params.date,
      barbershopId: params.barbershopId,
    },
  });
};
