"use client";

import { Button } from "@/app/_components/ui/button";
import { Card, CardContent } from "@/app/_components/ui/card";
import { ServiceItemProps } from "@/app/interfaces/barbershop-interface";
import Image from "next/image";

const ServiceItem = ({ services }: ServiceItemProps) => {
  return (
    <div>
      <Card>
        <CardContent className="p-3">
          <div className="flex gap-4 items-center">
            <div className="relative min-h-[110px] min-w-[110px] max-h-[110px] max-w-[110px] ">
              <Image
                src={services.imageUrl}
                fill
                style={{ objectFit: "contain" }}
                alt={services.name}
                className="rounded-lg"
              />
            </div>
            <div className="flex flex-col w-full">
              <h2 className="font-bold"> {services.name} </h2>
              <p className="text-sm text-gray-400">{services.description}</p>

              <div className="flex items-center justify-between mt-3 gap-2">
                <p className="text-sm font-bold text-primary">
                  {Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  }).format(Number(services.price))}
                </p>
                <Button className="w-20" variant="secondary">Reservar</Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ServiceItem;
