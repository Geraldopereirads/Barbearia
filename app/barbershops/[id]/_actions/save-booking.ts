"use server";

import { db } from "@/app/_lib/prisma";
import { SaveBookingParams } from "@/app/interfaces/barbershop-interface";
import { revalidatePath } from "next/cache";

export const saveBooking = async (params: SaveBookingParams) => {
  await db.booking.create({
    data: {
      serviceId: params.serviceId,
      userId: params.userId,
      date: params.date,
      barbershopId: params.barbershopId,
    },
  });
  revalidatePath("/");
  revalidatePath("/bookings");
};
