import styled from 'styled-components'
import { color } from '../../utils/color'

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  width: min-content;
  border: 0.1rem solid black;
  align-self: center;
  padding: 1rem;
  background-color: rgb(0, 0, 0, 0.3);
  gap: 1rem;
  margin: 1rem;
  border-radius: 1rem;
  label {
    color: ${color.white};
  }
`
