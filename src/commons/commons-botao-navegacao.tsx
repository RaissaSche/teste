import IConfiguracaoBotao from "./commons-interface-configuracao-botao";
import { Botao } from "./commons-styles.ts";
import { useNavigate } from "react-router-dom";

const BotaoNavegacao = (props: any) => {
  const navigate = useNavigate();

  if (props.isBold === true) {
    return <Botao $bold>{props.nomeBotao}</Botao>;
  } else {
    return <Botao>{props.nomeBotao}</Botao>;
  }
};

export default BotaoNavegacao;
