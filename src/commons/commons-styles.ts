import styled from "styled-components";

export const ContainerBotoesNavegacao = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 2rem;
  margin-right: 4em;
`;

export const ContainerBotoesNavegacaoHome = styled(ContainerBotoesNavegacao)`
  gap: 4rem;
`;

export const ContainerView = styled.div`
 display: flex;
  flex-direction: row;
  padding-top: 4em;
  justify-content: space-around;
`;

export const ContainerTextos = styled.div`
  display: flex;
  flex-direction: column;
  width: 35em;
  gap: 1em;
`;

export const Botao = styled.button<{ $bold?: boolean }>`
  color: #1f1f1f;
  font-family: Nunito, sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: ${(props) => (props.$bold ? "700" : "400")};
  line-height: normal;
  border: none;
  background-color: transparent;

  &:hover {
    color: #727272;
  }
`;

export const BotaoVerde = styled(Botao)`
box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
font-weight: 700;
font-size: 1.125rem; 
width: 12rem;
height: 3rem;
color: #FFFFFF;
border-radius: 0.5rem;
background: #018762;
`;

export const BotaoBranco = styled(BotaoVerde)`
color: #018762;
border: 2px solid #018762;
background: #FFF;
`;

export const Titulo = styled.h1`
  color: #1f1f1f;
  font-family: Nunito, sans-serif;
  font-size: 48px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-align: left;
  margin: 0;
`;

export const Texto = styled.h2`
  color: #515151;
  font-family: Nunito, sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-align: left;
`;

export const Imagem = styled.img`
  width: 33em;
`;

export const PaginaNaoEncontrada = styled.h1`
color: #018762;
font-family: Nunito, sans-serif;
  font-size: 130px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;