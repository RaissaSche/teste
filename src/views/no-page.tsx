import { useContext, useEffect } from "react";
import { PaginaNaoEncontrada } from "../commons/commons-styles.ts";
import { TitleContext } from "../App.tsx";

const NoPage = () => {
  const { setTitulo } = useContext(TitleContext);

  //quando é criada, muda o título
  useEffect(() => {
    setTitulo("404 | Desafio Lacrei");
  }, []);

  return (
    <>
      <PaginaNaoEncontrada>404</PaginaNaoEncontrada>
    </>
  );
};

export default NoPage;
