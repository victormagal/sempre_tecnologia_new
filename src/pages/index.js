// import client from '../utils/client';
import { Footer, Header } from '../components/Structure';
import { Container } from '../components/Foundation';

export default function Home({ products }) {
  return (
    <>
      <Header />
      <Container>
        <p>Olá enfermeira</p>
      </Container>
      <Footer />
    </>
  )
}

// export async function getStaticProps(context) {
//   const { data } = await client.query({
//     query: getProducts
//   });

//   const products = data?.produtos?.edges.map(({ node }) => node);
  
//   return {
//     props: {
//       products
//     },
//     revalidate: 600
//   }
// }
