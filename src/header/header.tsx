import BotaoNavegacao from "../commons/commons-botao-navegacao";
import { ContainerBotoesNavegacao } from "../commons/commons-styles";
import { ContainerHeader, LogoLacrei } from "./header-styles";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <ContainerHeader>
      <LogoLacrei onClick={() => navigate("/home")}>Lacrei</LogoLacrei>
      <ContainerBotoesNavegacao>
        <BotaoNavegacao nomeBotao="Home" path="/home" />
        <BotaoNavegacao nomeBotao="Pessoa Usuária" path="/pessoa-usuaria" />
        <BotaoNavegacao nomeBotao="Profissional" path="/profissional" />
      </ContainerBotoesNavegacao>
    </ContainerHeader>
  );
};

export default Header;
