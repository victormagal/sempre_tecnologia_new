import { Footer, Header } from '../components/Structure';
import { Container, HeroPage } from '../components/Foundation';

export default function SempreMensalidade() {
  return (
    <>
      <Header />
      <main>
        <HeroPage uri="/bg-sempre-mensalidade.jpg">
          <Container>
            <p>Sempre Mensalidade</p>
          </Container>
        </HeroPage>
      </main>
      <Footer />
    </>
  );
}
