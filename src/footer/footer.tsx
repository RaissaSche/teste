import { ContainerFooter, Divisor, Texto } from "./footer-styles";
import RedesSociais from "./footer-redes-sociais";
import { ContainerBotoesNavegacao } from "../commons/commons-styles";
import BotaoNavegacao from "../commons/commons-botao-navegacao";

const Footer = () => {
  return (
    <ContainerFooter>
      <Divisor />
      <ContainerBotoesNavegacao>
      <BotaoNavegacao nomeBotao="Home" bold= "true"/>
        <BotaoNavegacao nomeBotao="Pessoa Usuária"/>
        <BotaoNavegacao nomeBotao="Profissional"/>
      </ContainerBotoesNavegacao>
      <RedesSociais />
      <Texto>Desafio Front-end Lacrei</Texto>
    </ContainerFooter>
  );
};

export default Footer;
