import { Main } from "./style";
import logo from '../../assets/react.svg'
import { Header } from "../../components/header";
import { Footer } from "../../components/footer";
import { Input } from "../../components/input";
import { Card } from "../../components/card";

export function Home() {
  return (
    <Main>
      <Header title="GitPersonal" logo={logo} />
      <Card label="Digite o nome do usuário" />
      <Footer />
    </Main>)
}