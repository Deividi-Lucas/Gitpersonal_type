import styled from 'styled-components'
import { color } from '../../utils/color'

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background: linear-gradient(to bottom, ${color.primary}, ${color.second});
`
