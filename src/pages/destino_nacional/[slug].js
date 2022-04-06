import { Footer, Header, Hero } from '../../components/Structure';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedinIn, faTwitter, faWhatsapp } from '@fortawesome/fontawesome-free-brands';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import client from '../../utils/client';
import { getAllNationalDestinationsSlugs, getNationalDestinationBySlug } from '../../utils/queries';
import { Container } from '../../components/Foundation';

export default function DestinationPage({ destination }) {
  console.log(destination);
  return (
    <>
      <Header />
      <Hero search={false} title={destination.title} uri={destination.featuredImage.node.sourceUrl} />
      <Container>
        <div className='col-span-6 col-start-4 grid grid-cols-6 gap-6'>
          <h2 className='col-span-4 font-serif text-custom-gray text-xl'>{destination.title}</h2>
          <ul className='col-span-2 flex justify-end space-x-3'>
            <li>
              <a href='#this' rel='noreferrer' target='_blank' title='Facebook'>
                <FontAwesomeIcon className='h-5 text-soft-gray w-5' icon={faFacebook} />
              </a>
            </li>
            <li>
              <a href='#this' rel='noreferrer' target='_blank' title='Twitter'>
                <FontAwesomeIcon className='h-5 text-soft-gray w-5' icon={faTwitter} />
              </a>
            </li>
            <li>
              <a href='#this' rel='noreferrer' target='_blank' title='LinkedinIn'>
                <FontAwesomeIcon className='h-5 text-soft-gray w-5' icon={faLinkedinIn} />
              </a>
            </li>
            <li>
              <a href='#this' rel='noreferrer' target='_blank' title='WhatsApp'>
                <FontAwesomeIcon className='h-5 text-soft-gray w-5' icon={faWhatsapp} />
              </a>
            </li>
            <li>
              <a href='#this' rel='noreferrer' target='_blank' title='E-mail'>
                <FontAwesomeIcon className='h-5 text-soft-gray w-5' icon={faEnvelope} />
              </a>
            </li>
          </ul>
          <h1 className='col-span-6 text-4xl text-custom-purple'>{destination.custom_destinations_fields.summary}</h1>
          <p className='col-span-6 font-serif text-custom-gray text-xs'>Publicado em: {new Date(destination.date).toLocaleDateString('pt-BR')}</p>
          <div className='col-span-6 teste' dangerouslySetInnerHTML={{ __html: destination.custom_destinations_fields.content }} />
        </div>
      </Container>
      <Footer />
    </>
  )
}

export async function getStaticPaths() {
  const { data } = await client.query({
    query: getAllNationalDestinationsSlugs
  });

  return {
    paths: data?.destinosNacionais?.nodes?.map(({ slug }) => {
      return {
        params: { slug }
      };
    }),
    fallback: false
  };
};

export async function getStaticProps({ params }) {
  const { slug } = params;
  const { data } = await client.query({
    query: getNationalDestinationBySlug,
    variables: { slug }
  });

  const destination = data?.destinoNacionalBy;

  return {
    props: {
      destination
    },
    revalidate: 600
  }
}
