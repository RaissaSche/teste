import { IConfiguracaoBotao } from "./commons-index.ts";
import { ContainerBotoesNavegacao, Botao } from "./commons-styles.ts";
import { useNavigate } from "react-router-dom";

interface BotoesNavegacaoProps {
  configuracoes: Array<IConfiguracaoBotao>;
}

const BotoesNavegacao = (props: BotoesNavegacaoProps) => {
  const navigate = useNavigate();

  return (
    <ContainerBotoesNavegacao>
      {props.configuracoes.map((obj) => (
        <Botao
          $negrito={obj.negrito}
          $destaqueVerde={obj.destaqueVerde}
          onClick={() => navigate(obj.endereco)}
        >
          {obj.nome}
        </Botao>
      ))}
    </ContainerBotoesNavegacao>
  );
};

export default BotoesNavegacao;

//
