import { Main } from "./style"

interface HeaderProps {
  title: string,
  logo?: any

}

export const Header = ({ title, logo }: HeaderProps) => {
  return (
    <Main>
      <img src={logo} alt="logo_header" />
      <h1>{title}</h1>
    </Main>)
}