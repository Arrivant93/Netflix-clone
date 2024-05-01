import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { Search } from "lucide-react";
import { Bell } from "lucide-react";

const NavBar: FC = (): JSX.Element => {
  return (
    <nav className="flex z-50 fixed w-full backdrop-blur-sm justify-between px-6 py-2 ">
      <div className="flex items-center gap-6">
        <Image
          src="/Logonetflix.png"
          width={60}
          height={60}
          alt="LogoNetflix"
        />
        <div className="space-x-4">
          <Link href="/">Accueil</Link>
          <Link href="/">Séries</Link>
          <Link href="/">Films</Link>
          <Link href="/">Ma liste</Link>
          <Link href="/">Animer</Link>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <Search size={15} />
        <Link href="/">Jeunesse</Link>
        <Bell size={15} />
        <Image src="/pp.jpg" width={40} height={40} alt="Pp" />
      </div>
    </nav>
  );
};
export default NavBar;
