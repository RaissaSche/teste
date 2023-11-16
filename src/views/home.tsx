import {
  Titulo,
  Texto,
  ContainerView,
  ContainerTextos,
  Imagem,
  ContainerBotoesNavegacaoHome,
  BotaoVerde,
  BotaoBranco,
} from "../commons/commons-styles.ts";
import ilustracao from "../assets/Home.svg";
import { useNavigate } from 'react-router-dom';
import { Footer, Header } from "../index.tsx";
import { ContainerApp } from "../app-styles.ts";



const Home = () => {
  const navigate = useNavigate();
  return (
    <ContainerApp>
    <Header />
    <ContainerView>
      <ContainerTextos>
        <Titulo>Yaayyyy Boas vindas a Lacrei Saúde</Titulo>
        <Texto>
          Uma plataforma segura e acolhedora para comunidade LGBTQIAPN+
        </Texto>
        <ContainerBotoesNavegacaoHome>
          <BotaoVerde onClick={() => navigate("/pessoa-usuaria")}>Pessoa Usuária</BotaoVerde>
          <BotaoBranco onClick={() => navigate("/profissional")}>Profissional</BotaoBranco>
        </ContainerBotoesNavegacaoHome>
      </ContainerTextos>
      <Imagem src={ilustracao}></Imagem> 
    </ContainerView>
    <Footer/>
    </ContainerApp>
  );
};

export default Home;
