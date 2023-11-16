import { Footer, Header } from "..";
import { PaginaNaoEncontrada } from "../commons/commons-styles";

const NoPage = () => {
  return (
    <>
      <Header />
      <PaginaNaoEncontrada>404</PaginaNaoEncontrada>
      <Footer />
    </>
  );
};

export default NoPage;
