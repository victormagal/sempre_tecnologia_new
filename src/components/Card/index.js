import Link from 'next/link';

export default function Card({ slug, thumb, title, subtitle, summary, date }) {
  return (
    <Link href={`/destino_nacional/${slug}`}>
      <div className='lg:col-span-3 cursor-pointer'>
        <div>
          <img alt='Alt' src={thumb} />
        </div>
        <div>
          <h1>{title}</h1>
          <h2>{subtitle}</h2>
          <p>{summary}</p>
          <p>Publicado em: {new Date(date).toLocaleDateString('pt-BR')}</p>
        </div>
      </div>
    </Link>
  );
}
