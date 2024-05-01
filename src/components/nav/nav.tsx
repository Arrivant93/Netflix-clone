import { Bell, Search } from "lucide-react";
import Image from "next/image";
import { FC } from "react";
import { Link } from "../ui/link";
import NavDropDown from "./nav-dropdown";

const NavBar: FC = (): JSX.Element => {
  return (
    <nav className="flex z-50 fixed w-full justify-between global-padding-x py-3 bg-[#161617cc] backdrop-blur-md">
      <div className="flex items-center gap-10">
        <Image src="/Logonetflix.png" width={100} height={100} alt="LogoNetflix" />
        <div className="space-x-6">
          <Link variant="nav-links" href="/">
            Accueil
          </Link>
          <Link variant="nav-links" href="/">
            Séries
          </Link>
          <Link variant="nav-links" href="/">
            Films
          </Link>
          <Link variant="nav-links" href="/">
            Ma liste
          </Link>
          <Link variant="nav-links" href="/">
            Animer
          </Link>
        </div>
      </div>

      <div className="flex items-center gap-5">
        <Search size={20} />
        <Link variant="nav-links" href="/">
          Jeunesse
        </Link>
        <Bell size={20} />
        <NavDropDown />
      </div>
    </nav>
  );
};
export default NavBar;
