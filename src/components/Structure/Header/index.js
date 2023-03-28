import Head from 'next/head';
import Image from 'next/image';
import { Container } from '../../Foundation';
import styles from './styles.module.css';

export default function Header() {
  const toggleMenu = e => {
    const currentElement = e.currentTarget;
    const nextElement = currentElement.nextElementSibling;

    nextElement.classList.contains('hidden') ? nextElement.classList.remove('hidden') : nextElement.classList.add('hidden');
  }

  return (
    <>
      <Head>
        <title>Sempre Tecnologia</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Container>
        <div className={styles.logo}>
          <Image
            alt='Sempre Tecnologia'
            height={36}
            quality={100}
            src='logo-vermelha.svg'
            width={135}
          />
        </div>
        <nav className={styles.navBar}>
          <div className='relative'>
            <button onClick={toggleMenu} className='flex items-center bg-white border border-gray-300 focus:border-blue-500 rounded px-3 py-1 text-sm text-gray-800 placeholder-gray-300 focus:outline-none shadow'>Quem Somos</button>
            <div className='absolute hidden bg-white border border-gray-200 py-1 shadow-md rounded'>
              <a href='#this' className='block text-sm text-gray-500 px-3 py-1 bg-white hover:bg-gray-100'>Blog</a>
              <a href='#this' className='block text-sm text-gray-500 px-3 py-1 bg-white hover:bg-gray-100'>Trabalhe Conosco</a>
              <a href='#this' className='block text-sm text-gray-500 px-3 py-1 bg-white hover:bg-gray-100'>Nossa História</a>
            </div>
          </div>
        </nav>
      </Container>
    </>
  );
}
