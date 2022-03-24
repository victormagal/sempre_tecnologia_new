import Header from '../components/Header';
import Footer from '../components/Footer';
import Card from '../components/Card';
import { Container } from '../components/Guide';
import client from '../utils/client';
import { getAllNationalDestinations } from '../utils/queries';

export default function NationalDestinations({ destinations }) {

  return (
    <>
      <Header />
      <div className='bg-bottom bg-mail-response bg-no-repeat'>
        <Container newClasses='h-screen flex items-center'>
          <div className='lg:col-span-10 grid lg:grid-cols-9'>
            {destinations?.map(destination => (
              <Card
                key={destination.id}
                slug={destination.slug}
                thumb={destination.featuredImage.node.sourceUrl}
                title={destination.title}
                subtitle={destination.custom_destinations_fields.stateCountry}
                summary={destination.custom_destinations_fields.summary}
                date={destination.date}
              />
            ))}
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

export async function getStaticProps(context) {
  const { data } = await client.query({
    query: getAllNationalDestinations
  });

  const destinations = data?.destinosNacionais?.edges?.map(({ node }) => node);

  return {
    props: {
      destinations
    },
    revalidate: 600
  }
}
