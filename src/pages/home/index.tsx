import { Main } from "./style";
import logo from '../../assets/react.svg'
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Input } from "../../components/input";
import { Card } from "../../components/Card";

export function Home() {
  return (
    <Main>
      <Header title="GitPersonal" logo={logo} />
      <Card label="Digite o nome do usuário" />
      <Footer />
    </Main>)
}