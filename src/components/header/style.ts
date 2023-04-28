import styled from 'styled-components'
import { color } from '../../utils/color'

export const Main = styled.div`
  width: 100%;
  padding: 0.5rem;
  background: ${color.gray};
  display: flex;
  justify-content: space-around;
  position: sticky;
  top: 0;

  @keyframes identifier {
    to {
      transform: rotate(0deg);
    }
    from {
      transform: rotate(360deg);
    }
  }

  img {
    animation: identifier 2s infinite;
  }
`
