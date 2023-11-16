import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ContainerApp, ContainerView } from "./app-styles.ts";
import {
  Footer,
  Header,
  Home,
  PessoaUsuaria,
  Profissional,
  NoPage,
} from "./index.tsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/pessoa-usuaria" element={<PessoaUsuaria />} />
          <Route path="/profissional" element={<Profissional />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
