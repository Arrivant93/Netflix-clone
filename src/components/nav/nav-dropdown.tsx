import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import SignOut from "@/features/auth/sign-out";
import { Search } from "lucide-react";
import Image from "next/image";
import { FC } from "react";
import { LinkIcon } from "../ui/link";

const NavDropDown: FC = (): JSX.Element => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Image src="/pp.jpg" width={35} height={35} alt="Pp" className="rounded-sm" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-[200px] relative -left-10">
        <div className="p-4 space-y-4">
          <LinkIcon href="/" icon={<Search size={25} />} variant="nav-dropdown">
            Gérer les profils
          </LinkIcon>
          <LinkIcon href="/" icon={<Search size={25} />} variant="nav-dropdown">
            Compte
          </LinkIcon>
        </div>

        <DropdownMenuSeparator />
        <div className="p-4 text-center">
          <SignOut />
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default NavDropDown;
