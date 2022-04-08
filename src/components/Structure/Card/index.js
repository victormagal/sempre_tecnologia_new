import Link from 'next/link';
import Image from 'next/image';
import styles from './styles.module.css';

export default function Card({ date, slug, subtitle, summary, thumb, title }) {
  return (
    <Link href={`/destino_nacional/${slug}`}>
      <div className={styles.card}>
        <Image
          alt={title}
          height={250}
          layout="responsive"
          objectFit="cover"
          quality={100}
          src={thumb}
          width={400}
        />
        <div>
          <h1>{title}</h1>
          <h2>{subtitle}</h2>
        </div>
        <p>{summary}</p>
        <legend>
          Publicado em: {new Date(date).toLocaleDateString('pt-BR')}
        </legend>
      </div>
    </Link>
  );
}
