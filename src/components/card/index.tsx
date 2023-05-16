import { useState } from "react"
import { Input } from "../input"
import { Section } from "../Section"
import { Main } from "./style"
import axios from "axios"

interface CardProps {
  label: string
}


export const Card = ({ label }: CardProps) => {
  const [handleinput, setHandleinput]: any = useState('')
  const [handleValue, setHandleValue]: any = useState('')

  async function GetValue() {
    return (await axios.get(`https://api.github.com/users/${handleinput}`).then((res: any) => setHandleValue(res.data))
    )
  }
  return (
    <>
      <Main>
        <label>{label}</label>
        <Input placeholder="Digite aqui:" onChange={(item: any) => setHandleinput(item.target.value)} onKeyUp={(e: any) => {
          if (e.key == 'Enter') {
            GetValue()
          }
        }} />
      </Main>
      <Section nome={handleValue.name} seguidores={handleValue.followers} repo={handleValue.public_repos} blog={handleValue.blog} biografia={handleValue.bio} localidade={handleValue.location} />
    </>
  )
}