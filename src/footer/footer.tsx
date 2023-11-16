import {
  BotoesNavegacao,
  IConfiguracaoBotao,
} from "../commons/commons-index.ts";
import { ContainerFooter, Divisor, Texto } from "./footer-styles.ts";
import RedesSociais from "./footer-redes-sociais.tsx";
import { useContext } from "react";
import { TitleContext } from "../App.tsx";

let configuracoesFooter: Array<IConfiguracaoBotao>;

const Footer = () => {
  popularConfiguracoes();

  return (
    <ContainerFooter>
      <Divisor />
      <BotoesNavegacao configuracoes={configuracoesFooter} />
      <RedesSociais />
      <Texto>Desafio Front-end Lacrei</Texto>
    </ContainerFooter>
  );
};

export default Footer;

function popularConfiguracoes() {
  configuracoesFooter = new Array<IConfiguracaoBotao>(
    {
      nome: "Home",
      negrito: false,
      destaqueVerde: false,
      endereco: "/home",
    },
    {
      nome: "Pessoa Usuária",
      negrito: false,
      destaqueVerde: false,
      endereco: "/pessoa-usuaria",
    },
    {
      nome: "Profissional",
      negrito: false,
      destaqueVerde: false,
      endereco: "/profissional",
    }
  );

  const { titulo } = useContext(TitleContext);

  switch (titulo) {
    case "Home | Desafio Lacrei":
      configuracoesFooter[0].negrito = true;
      break;
    case "Pessoa Usuária | Desafio Lacrei":
      configuracoesFooter[1].negrito = true;
      break;
    case "Profissional | Desafio Lacrei":
      configuracoesFooter[2].negrito = true;
      break;
  }
}
