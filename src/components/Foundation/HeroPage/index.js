import Image from 'next/image';
import Container from '../Container';
import styles from './styles.module.css';

export default function HeroPage({ description, iconSource, title, uri }) {
  return (
    <section className={styles.container}>
      <header>
        <Image alt="Background Image" fill quality={100} src={uri} />
      </header>
      <Container newClasses="relative z-10">
        <header>
          <Image
            alt="Solução"
            height={23}
            quality={100}
            src={iconSource}
            width={163}
          />
          <h1 className="font-serif">{title}</h1>
        </header>
        <main>
          <h2>{description}</h2>
        </main>
        <footer>
          <button type="button">Contrate Agora</button>
        </footer>
      </Container>
    </section>
  );
}
