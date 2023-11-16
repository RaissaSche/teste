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
import { useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { TitleContext } from "../App.tsx";

const Home = () => {
  const navigate = useNavigate();
  const { setTitulo } = useContext(TitleContext);

  //quando é criada, muda o título
  useEffect(() => {
    setTitulo("Home | Desafio Lacrei");
  }, []);

  return (
    <ContainerView>
      <ContainerTextos>
        <Titulo>Boas vindas a Lacrei Saúde</Titulo>
        <Texto>
          Uma plataforma segura e acolhedora para comunidade LGBTQIAPN+
        </Texto>
        <ContainerBotoesNavegacaoHome>
          <BotaoVerde onClick={() => navigate("/pessoa-usuaria")}>
            Pessoa Usuária
          </BotaoVerde>
          <BotaoBranco onClick={() => navigate("/profissional")}>
            Profissional
          </BotaoBranco>
        </ContainerBotoesNavegacaoHome>
      </ContainerTextos>
      <Imagem src={ilustracao}></Imagem>
    </ContainerView>
  );
};

export default Home;
