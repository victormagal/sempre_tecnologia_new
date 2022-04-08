import { Footer, Header, Hero, Post } from '../../components/Structure';
import client from '../../utils/client';
import {
  getAllNationalDestinationsSlugs,
  getNationalDestinationBySlug
} from '../../utils/queries';
import { Container } from '../../components/Foundation';

export default function DestinationPage({ destination }) {
  return (
    <>
      <Header />
      <Hero
        search={false}
        title={destination.title}
        uri={destination.featuredImage.node.sourceUrl}
      />
      <Container>
        <Post
          content={destination.custom_destinations_fields.content}
          date={destination.date}
          summary={destination.custom_destinations_fields.summary}
          title={destination.title}
        />
      </Container>
      <Footer />
    </>
  );
}

export async function getStaticPaths() {
  const { data } = await client.query({
    query: getAllNationalDestinationsSlugs
  });

  return {
    paths: data?.destinosNacionais?.nodes?.map(({ slug }) => ({
      params: { slug }
    })),
    fallback: false
  };
}

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
  };
}
