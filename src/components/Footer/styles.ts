import styled from 'styled-components'
import { cores } from '../../styles'

export const FooterContainer = styled.footer`
  width: 100vw;
  background-color: ${cores.primaryLight};
  text-align: center;
  > img {
    width: 7.8rem;
    height: 3.6rem;
    margin-top: 2.5rem;
  }
  p {
    color: ${cores.primaryDark};
    font-size: 0.625rem;
  }
`

export const SocialMedia = styled.div`
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  margin-bottom: 5rem;
  img {
    width: 1.5rem;
    height: 1.5rem;
  }
`
