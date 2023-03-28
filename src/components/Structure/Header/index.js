import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { Container } from '../../Foundation';
import styles from './styles.module.css';

export default function Header() {
  const toggleMenu = (e) => {
    const currentElement = e.currentTarget;
    const nextElement = currentElement.nextElementSibling;

    if (nextElement.classList.contains('hidden')) {
      nextElement.classList.remove('hidden');
    } else {
      nextElement.classList.add('hidden');
    }
  };

  return (
    <>
      <Head>
        <title>Sempre Tecnologia</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Container newClasses="bg-gray-500 py-4">
        <div className={styles.logo}>
          <Link href="/">
            <Image
              alt="Sempre Tecnologia"
              height={43}
              quality={100}
              src="logo-sempre.svg"
              width={162}
            />
          </Link>
        </div>
        <nav className={styles.navBar}>
          <section>
            <button type="button" onClick={toggleMenu}>
              Quem Somos
              <FontAwesomeIcon icon={faChevronDown} />
            </button>
            <div className="hidden">
              <FontAwesomeIcon icon={faCaretUp} />
              <ul>
                <li>
                  <Link href="/">Blog</Link>
                </li>
                <li>
                  <Link href="/">Trabalhe Conosco</Link>
                </li>
                <li>
                  <Link href="/">Nossa História</Link>
                </li>
              </ul>
            </div>
          </section>
          <section>
            <button type="button" onClick={toggleMenu}>
              Soluções
              <FontAwesomeIcon icon={faChevronDown} />
            </button>
            <div className="hidden">
              <FontAwesomeIcon icon={faCaretUp} />
              <ul>
                <li>
                  <Link href="/">Sistemas Web para Gestão Empresarial</Link>
                </li>
                <li>
                  <Link href="/">
                    Sistemas Web para Emissão de Nota Eletrônica
                  </Link>
                </li>
                <li>
                  <Link href="/">Sistemas para Pequenos Varejos</Link>
                </li>
                <li>
                  <Link href="/">Certificado Digital</Link>
                </li>
                <li>
                  <Link href="/">Sistemas Web para Distribuidores</Link>
                </li>
                <li>
                  <Link href="/">Sistemas Web para Gestão de Recorrência</Link>
                </li>
              </ul>
            </div>
          </section>
          <section>
            <button type="button" onClick={toggleMenu}>
              Segmentos
              <FontAwesomeIcon icon={faChevronDown} />
            </button>
            <div className="hidden">
              <FontAwesomeIcon icon={faCaretUp} />
              <ul>
                <li>
                  <Link href="/">Distribuidores</Link>
                </li>
                <li>
                  <Link href="/">Atacadistas</Link>
                </li>
                <li>
                  <Link href="/">Pequenos Varejos</Link>
                </li>
                <li>
                  <Link href="/">Contabilidade</Link>
                </li>
                <li>
                  <Link href="/">Escolas e Faculdades</Link>
                </li>
                <li>
                  <Link href="/">Prestadores de Serviços</Link>
                </li>
                <li>
                  <Link href="/">Vendas Recorrentes</Link>
                </li>
                <li>
                  <Link href="/">Cobrança de Mensalidade</Link>
                </li>
                <li>
                  <Link href="/">MEI</Link>
                </li>
              </ul>
            </div>
          </section>
          <section>
            <button type="button" onClick={toggleMenu}>
              Seja Parceiro
              <FontAwesomeIcon icon={faChevronDown} />
            </button>
            <div className="hidden">
              <FontAwesomeIcon icon={faCaretUp} />
              <ul>
                <li>
                  <Link href="/">Contadores</Link>
                </li>
                <li>
                  <Link href="/">Certificado Digital</Link>
                </li>
                <li>
                  <Link href="/">Sistemas Web</Link>
                </li>
              </ul>
            </div>
          </section>
          <section>
            <button type="button">Planos e Preços</button>
          </section>
          <section>
            <button type="button">Unidades</button>
          </section>
          <section>
            <button type="button">Contato</button>
          </section>
        </nav>
        <div className={styles.contact}>
          <button type="button">Fale agora</button>
        </div>
      </Container>
    </>
  );
}
