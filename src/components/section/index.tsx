import { Main } from "./style"

interface SectionProps {
  nome?: string;
  localidade?: string;
  biografia?: string;
  blog?: string;
  seguidores?: string;
  repo?: string;

}

export const Section = ({ nome, biografia, blog, localidade, repo, seguidores }: SectionProps) => {
  return (
    <Main>
      <span>{nome == 'null' ? '' : `Nome: ${nome}`}{nome}</span>
      <span>{biografia === 'null' ? '' : `Bio: ${biografia}`}{biografia}</span>
      <span>{localidade == 'null' ? '' : `Localização: ${localidade}`}{localidade}</span>
      <span>{blog == '' ? '' : `Website: ${blog}`}{blog}</span>
      <span>{repo == '' ? '' : `Repositório Público: ${repo}`}{repo}</span>
      <span>{seguidores == '' ? '' : `Seguidores: ${seguidores}`}{seguidores}</span>
    </Main>
  )
}