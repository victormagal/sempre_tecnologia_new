import { Card, Cards, Footer, Header, Hero } from '../components/Structure';
import { Container } from '../components/Foundation';
import { DesktopVertical } from '../components/Advertising';
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
        <Container>
          <Cards>
            {destinations?.map(
              ({
                date,
                id,
                slug,
                custom_destinations_fields: { stateCountry, summary },
                featuredImage: {
                  node: { sourceUrl }
                },
                title
              }) => (
                <Card
                  date={date}
                  key={id}
                  slug={slug}
                  subtitle={stateCountry}
                  summary={summary}
                  thumb={sourceUrl}
                  title={title}
                />
              )
            )}
          </Cards>
          <DesktopVertical />
        </Container>
      </div>
      <Footer />
    </>
  );
}

export async function getStaticProps() {
  const { data } = await client.query({
    query: getAllNationalDestinations
  });

  const destinations = data?.destinosNacionais?.edges?.map(({ node }) => node);

  return {
    props: {
      destinations
    },
    revalidate: 600
  };
}
