import Image from 'next/image';
import Container from '../Container';
import styles from './styles.module.css';

export default function BackgroundContainer({ uri, children }) {
  return (
    <section className={styles.container}>
      <header>
        <Image alt="Background image" fill quality={100} src={uri} />
      </header>
      <Container newClasses="relative z-10">{children}</Container>
    </section>
  );
}
