import styled from 'styled-components'
import Title from '../../components/Title'
import Avatar from '../../components/Avatar'
import Paragrafo from '../../components/Paragrafo'
import { Descricao, BotaoTema, SiderbarContainer } from './styles'

const Aside = styled.aside`
  h3 {
    display: block;
    text-align: center;
    margin-top: 16px;
  }
`
type Props = {
  trocaTema: () => void
}

const Sidebar = (props: Props) => (
  <Aside>
    <SiderbarContainer>
      <Avatar />
      <Title fontSize={20}>Daniel Félix</Title>
      <Paragrafo tipo="secundario" fontSize={16}>
        danzSTK
      </Paragrafo>
      <Descricao tipo="principal" fontSize={12}>
        Engenheiro Front-end
      </Descricao>
      <BotaoTema type="button" onClick={props.trocaTema}>
        Trocar Tema
      </BotaoTema>
    </SiderbarContainer>
  </Aside>
)

export default Sidebar
