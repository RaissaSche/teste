import {
  BotoesNavegacao,
  IConfiguracaoBotao,
} from "../commons/commons-index.ts";
import { ContainerHeader, LogoLacrei } from "./header-styles.ts";
import { useNavigate } from "react-router-dom";
import { TitleContext } from "../App.tsx";
import { useContext } from "react";

let configuracoesHeader: Array<IConfiguracaoBotao>;

const Header = () => {
  const navigate = useNavigate();
  popularConfiguracoes();

  return (
    <ContainerHeader>
      <LogoLacrei onClick={() => navigate("/home")}>Lacrei</LogoLacrei>
      <BotoesNavegacao configuracoes={configuracoesHeader} />
    </ContainerHeader>
  );
};

export default Header;

function popularConfiguracoes() {
  configuracoesHeader = new Array<IConfiguracaoBotao>(
    {
      nome: "Home",
      negrito: true,
      destaqueVerde: false,
      endereco: "/home",
    },
    {
      nome: "Pessoa Usuária",
      negrito: true,
      destaqueVerde: false,
      endereco: "/pessoa-usuaria",
    },
    {
      nome: "Profissional",
      negrito: true,
      destaqueVerde: false,
      endereco: "/profissional",
    }
  );

  const { titulo } = useContext(TitleContext);

  switch (titulo) {
    case "Home | Desafio Lacrei":
      configuracoesHeader[0].destaqueVerde = true;
      break;
    case "Pessoa Usuária | Desafio Lacrei":
      configuracoesHeader[1].destaqueVerde = true;
      break;
    case "Profissional | Desafio Lacrei":
      configuracoesHeader[2].destaqueVerde = true;
      break;
  }
}
