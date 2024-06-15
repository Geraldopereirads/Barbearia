import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { MenuIcon } from "lucide-react";

const Header = () => {
  return (
    <Card>
      <CardContent className="p-5 flex justify-between items-center flex-row">
        <Image src="/Logo.png" alt="Barbearia" height={22} width={120} />
        <Button variant="outline" size="icon" className="h-6 w-8">
          <MenuIcon size={16}/>
        </Button>
      </CardContent>
    </Card>
  );
};

export default Header;
