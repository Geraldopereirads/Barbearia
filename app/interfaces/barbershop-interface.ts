import { Barbershop, Booking, Prisma, Service } from "@prisma/client";

export interface BarbershopItemProps {
  barbershop: Barbershop;
}

export interface BarbershopDetailsProps {
  params: {
    id?: string;
  };
}

export interface BarbershopInfoProps {
  barbershop: Barbershop;
}

export interface ServiceItemProps {
  barbershop: Barbershop;
  services: Service;
  isAuthenticated: boolean;
}

export interface SaveBookingParams {
  barbershopId: string;
  serviceId: string;
  userId: string;
  date: Date;
}

export interface BookingListProps {
  booking: Booking;
}

export interface BookingItemProps {
  booking: Prisma.BookingGetPayload<{
    include: {
      service: true;
      barbershop: true
    };
  }>;
}
