import Image from 'next/image';
import { Container } from '../../Foundation';

export default function Hero({ search, title, uri }) {
  return (
    <div className="relative">
      <Image
        alt="Background Image"
        className="z-0"
        layout="fill"
        objectFit="cover"
        objectPosition="bottom"
        quality={100}
        src={uri}
      />
      <Container newClasses="h-112 relative z-10">
        <div className="lg:col-span-12 flex items-center">
          <div className="flex justify-center w-full">
            <Image
              alt="Meu Clube Bancorbrás"
              className="z-0"
              height={62}
              quality={100}
              src="/logo.svg"
              width={300}
            />
          </div>
        </div>
        <div className="lg:col-span-10 lg:col-start-2 flex justify-center">
          {!search ? (
            <h1 className="font-sans text-7xl text-white">{title}</h1>
          ) : null}
        </div>
      </Container>
    </div>
  );
}
