import Image from 'next/image';
import styles from './styles.module.css';

export default function HeroPage({ uri, children }) {
  return (
    <section className={styles.container}>
      <Image alt="Background Image" fill quality={100} src={uri} />
      <div className="relative z-10">{children}</div>
    </section>
  );
}
