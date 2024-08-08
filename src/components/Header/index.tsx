import { HeaderBar } from './styles'

import logo from '../../assets/images/logo.svg'
import Vector from '../../assets/images/Vector.png'

const Header = () => (
  <HeaderBar style={{ backgroundImage: `url(${Vector})` }}>
    <h1>
      <img src={logo} alt="Efood" />
    </h1>
    <h2>
      Viva experiências gastronômicas <br /> no conforto da sua casa
    </h2>
  </HeaderBar>
)

export default Header
