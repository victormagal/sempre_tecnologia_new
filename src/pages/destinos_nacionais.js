import { Card, Footer, Header, Hero } from '../components/Structure';
import { Container } from '../components/Foundation';
import client from '../utils/client';
import { getAllNationalDestinations } from '../utils/queries';

export default function NationalDestinations({ destinations }) {
  return (
    <>
      <Header />
      <div>
        <Hero
          search={false}
          title="Destinos Nacionais"
          uri="/bg-national-destinations.jpg"
        />
        <Container newClasses="py-16">
          <div className="lg:col-span-10 grid lg:grid-cols-9 gap-x-8 gap-y-16">
            {destinations?.map((destination) => (
              <Card
                date={destination.date}
                key={destination.id}
                slug={destination.slug}
                subtitle={destination.custom_destinations_fields.stateCountry}
                summary={destination.custom_destinations_fields.summary}
                thumb={destination.featuredImage.node.sourceUrl}
                title={destination.title}
              />
            ))}
          </div>
          <div className="lg:col-span-2">
            <p>Publicidade</p>
          </div>
        </Container>
      </div>
      <Footer />
    </>
  );
}

export async function getStaticProps() {
  const { data } = await client.query({
    query: getAllNationalDestinations,
  });

  const destinations = data?.destinosNacionais?.edges?.map(({ node }) => node);

  return {
    props: {
      destinations,
    },
    revalidate: 600,
  };
}
