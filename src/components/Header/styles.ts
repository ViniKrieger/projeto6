import styled from 'styled-components'
import backgroundHeader from '../../assets/images/Vector.png'
import { cores } from '../../styles'

export const HeaderBar = styled.header`
  background-image: url(${backgroundHeader});
  background-repeat: no-repeat;
  background-size: cover;
  text-align: center;
  height: 24rem;
  width: 100vw;
  img {
    width: 7.8rem;
    height: 3.6rem;
    margin-top: 4rem;
    margin-bottom: 8.6rem;
  }
  h2 {
    color: ${cores.primaryDark};
    font-size: 2.25rem;
    font-weight: bold;
  }
`
