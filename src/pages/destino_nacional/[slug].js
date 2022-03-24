import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Container } from '../../components/Guide';
import client from '../../utils/client';
import { getAllNationalDestinationsSlugs, getNationalDestinationBySlug } from '../../utils/queries';

export default function DestinationPage({ destination }) {
  return (
    <>
      <Header />
      <div className='bg-bottom bg-mail-response bg-no-repeat'>
        <Container newClasses='h-screen flex items-center'>
          <div className='lg:col-span-10'>
            <h1>{destination.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: destination.custom_destinations_fields.content }} />
          </div>
          <div className='lg:col-span-2'>
            <p>Publicidade</p>
          </div>
        </Container>
      </div>
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
