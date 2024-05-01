import { FC } from "react";
import { Link } from "./ui/link";

const Footer: FC = (): JSX.Element => {
  return (
    <footer className="mt-36 global-padding-x pb-14">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 lg:justify-items-center gap-14 lg:gap-0">
        <div className="flex flex-col space-y-4">
          <Link href="/" variant="footer-links">
            Audiodescription
          </Link>
          <Link href="/" variant="footer-links">
            Relations Investisseurs
          </Link>
          <Link href="/" variant="footer-links">
            Confidentialité
          </Link>
          <Link href="/" variant="footer-links">
            Nous contacter
          </Link>
        </div>

        <div className="flex flex-col space-y-4">
          <Link href="/" variant="footer-links">
            Centre d&apos;aide
          </Link>
          <Link href="/" variant="footer-links">
            Recrutement
          </Link>
          <Link href="/" variant="footer-links">
            Informations légales
          </Link>
          <Link href="/" variant="footer-links">
            Choix liées à la pub
          </Link>
        </div>

        <div className="flex flex-col space-y-4">
          <Link href="/" variant="footer-links">
            Cartes cadeaux
          </Link>
          <Link href="/" variant="footer-links">
            Boutique Netflix
          </Link>
          <Link href="/" variant="footer-links">
            Préférences de cookies
          </Link>
        </div>

        <div className="flex flex-col space-y-4">
          <Link href="/" variant="footer-links">
            Presse
          </Link>
          <Link href="/" variant="footer-links">
            conditions d&apos;utilisation
          </Link>
          <Link href="/" variant="footer-links">
            Mentions légales
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
