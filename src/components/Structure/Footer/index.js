import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faInstagram,
  faYoutube
} from '@fortawesome/free-brands-svg-icons';
import { Container } from '../../Foundation';

export default function Footer() {
  return (
    <div className="bg-soft-green py-20">
      <Container>
        <div className="col-span-3">
          <Image
            alt="Meu Clube Bancorbrás"
            height={86}
            quality={100}
            src="/logo.svg"
            width={351}
          />
          <ul className="flex my-8 space-x-3">
            <li>
              <a
                href="#this"
                rel="noreferrer"
                target="_blank"
                title="Instagram"
              >
                <FontAwesomeIcon
                  className="h-8 text-white w-8"
                  icon={faInstagram}
                />
              </a>
            </li>
            <li>
              <a href="#this" rel="noreferrer" target="_blank" title="Facebook">
                <FontAwesomeIcon
                  className="h-8 text-white w-8"
                  icon={faFacebookF}
                />
              </a>
            </li>
            <li>
              <a href="#this" rel="noreferrer" target="_blank" title="YouTube">
                <FontAwesomeIcon
                  className="h-8 text-white w-8"
                  icon={faYoutube}
                />
              </a>
            </li>
          </ul>
          <p className="text-white text-xs">
            Copyright © Bancorbrás Turismo S.A. Todos os direitos reservados.
          </p>
        </div>
        <ul className="col-span-2 col-start-5 flex flex-col space-y-4">
          <li>
            <Link href="/">
              <p
                className="cursor-pointer text-white"
                title="Por dentro do Clube"
              >
                Por dentro do Clube
              </p>
            </Link>
          </li>
          <li>
            <Link href="/">
              <p className="cursor-pointer text-white" title="Minha Viagem">
                Minha Viagem
              </p>
            </Link>
          </li>
          <li>
            <Link href="/">
              <p className="cursor-pointer text-white" title="Termos de Uso">
                Termos de Uso
              </p>
            </Link>
          </li>
        </ul>
        <ul className="col-span-2 flex flex-col space-y-4">
          <li>
            <Link href="/">
              <p
                className="cursor-pointer text-white"
                title="Instituto Bancorbrás"
              >
                Instituto Bancorbrás
              </p>
            </Link>
          </li>
          <li>
            <Link href="/">
              <p
                className="cursor-pointer text-white"
                title="Destinos Inusitados"
              >
                Destinos Inusitados
              </p>
            </Link>
          </li>
        </ul>
        <ul className="col-span-2 flex flex-col space-y-4">
          <li>
            <Link href="/">
              <p
                className="cursor-pointer text-white"
                title="Estrelas do Clube"
              >
                Estrelas do Clube
              </p>
            </Link>
          </li>
          <li>
            <Link href="/">
              <p
                className="cursor-pointer text-white"
                title="Bagagem Gastronômica"
              >
                Bagagem Gastronômica
              </p>
            </Link>
          </li>
        </ul>
        <ul className="col-span-2 flex flex-col space-y-4">
          <li>
            <Link href="/">
              <p className="cursor-pointer text-white" title="Diário de Bordo">
                Diário de Bordo
              </p>
            </Link>
          </li>
          <li>
            <Link href="/">
              <p className="cursor-pointer text-white" title="Maior Idade">
                Maior Idade
              </p>
            </Link>
          </li>
        </ul>
      </Container>
    </div>
  );
}
