import {
  Home,
  PessoaUsuaria,
  Profissional,
  NoPage,
  Header,
  Footer,
} from "./index.tsx";
import { ContainerApp } from "./app-styles.ts";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

type GlobalContent = {
  titulo: string;
  setTitulo: (c: string) => void;
};

export const TitleContext = React.createContext<GlobalContent>({
  titulo: "Home | Desafio Lacrei",
  setTitulo: () => {},
});

function App() {
  const [titulo, setTitulo] = useState<string>("");

  useEffect(() => {
    document.title = titulo;
  }, [titulo]);

  return (
    <>
      <BrowserRouter>
        <ContainerApp>
          <TitleContext.Provider value={{ titulo, setTitulo }}>
            <Header />
            <Routes>
              <Route index element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/pessoa-usuaria" element={<PessoaUsuaria />} />
              <Route path="/profissional" element={<Profissional />} />
              <Route path="*" element={<NoPage />} />
            </Routes>
            <Footer />
          </TitleContext.Provider>
        </ContainerApp>
      </BrowserRouter>
    </>
  );
}

export default App;
