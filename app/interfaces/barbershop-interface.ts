import { Barbershop, Service } from "@prisma/client";

export interface BarbershopItemProps {
    barbershop: Barbershop
}

export interface BarbershopDetailsProps {
    params: {
        id?: string
    }
}

export interface BarbershopInfoProps {
    barbershop: Barbershop
}

export interface ServiceItemProps {
    services: Service
}