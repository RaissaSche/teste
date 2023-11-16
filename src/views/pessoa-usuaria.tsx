import {
  Titulo,
  Texto,
  ContainerView,
  ContainerTextos,
  Imagem,
  LinhaVertical,
  ContainerBasico,
} from "../commons/commons-styles.ts";

import ilustracao from "../assets/PessoaUsuaria.svg";
import { useContext, useEffect } from "react";
import { TitleContext } from "../App.tsx";

const PessoaUsuaria = () => {
  const { setTitulo } = useContext(TitleContext);

  //quando é criada, muda o título
  useEffect(() => {
    setTitulo("Pessoa Usuária | Desafio Lacrei");
  }, []);

  return (
    <ContainerView>
      <ContainerTextos>
        <Titulo>Pessoa Usuária</Titulo>
        <ContainerBasico>
          <LinhaVertical />
          <Texto>
            A Lacrei garante que pessoas LGBTQIAPN + recebam atendimento
            realizado por profissionais de qualidade e que atendam às suas
            necessidades de forma segura e acolhedora.
          </Texto>
        </ContainerBasico>
      </ContainerTextos>
      <Imagem src={ilustracao}></Imagem>
    </ContainerView>
  );
};

export default PessoaUsuaria;
