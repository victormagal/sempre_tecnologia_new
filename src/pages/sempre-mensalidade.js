import { Footer, Header } from '../components/Structure';
import { Container, HeroPage } from '../components/Foundation';

export default function SempreMensalidade() {
  return (
    <>
      <Header />
      <main>
        <HeroPage
          description="Empresário e gestor que tem recebíveis recorrentes, nós temos funcionalidades que agilizarão seu dia a dia."
          iconSource="/icon-sempre-mensalidade.svg"
          title="Gestão de mensalidades"
          uri="/bg-sempre-mensalidade.jpg"
        />
        <Container>
          <p>Sempre Mensalidade</p>
        </Container>
      </main>
      <Footer />
    </>
  );
}
