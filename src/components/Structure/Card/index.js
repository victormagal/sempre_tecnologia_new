import Link from 'next/link';

export default function Card({ date, slug, subtitle, summary, thumb, title }) {
  return (
    <Link href={`/destino_nacional/${slug}`}>
      <div className="lg:col-span-3 cursor-pointer flex flex-col space-y-5">
        <img alt={title} className="h-auto w-full" src={thumb} />
        <div>
          <h1 className="font-sans text-3xl text-custom-purple">{title}</h1>
          <h2 className="font-sans text-xl text-custom-purple">{subtitle}</h2>
        </div>
        <p className="font-sans h-28 text-xl text-custom-gray">{summary}</p>
        <p className="font-serif text-xs text-custom-gray">
          Publicado em: {new Date(date).toLocaleDateString('pt-BR')}
        </p>
      </div>
    </Link>
  );
}
