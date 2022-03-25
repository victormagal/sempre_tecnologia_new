import Link from 'next/link';

export default function Card({ date, slug, subtitle, summary, thumb, title }) {
  return (
    <Link href={`/destino_nacional/${slug}`}>
      <div className='lg:col-span-3 cursor-pointer flex flex-col'>
        <img
          alt={title} 
          className='h-auto mb-5 w-full'
          src={thumb} 
        />
        <h1 className='font-sans text-3xl text-custom-purple'>{title}</h1>
        <h2 className='font-sans mb-4 text-xl text-custom-purple'>{subtitle}</h2>
        <p className='font-sans mb-5 text-xl text-custom-gray'>{summary}</p>
        <p className='font-serif text-xs text-custom-gray'>Publicado em: {new Date(date).toLocaleDateString('pt-BR')}</p>
      </div>
    </Link>
  );
}
