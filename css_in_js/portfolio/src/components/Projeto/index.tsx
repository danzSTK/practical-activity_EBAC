import Paragrafo from '../Paragrafo'
import { Titulo } from '../Title/styles'
import { Card, LinkBotao } from './styles'

const Projeto = () => (
  <Card>
    <Titulo>Projeto Lista de tarefas</Titulo>
    <Paragrafo tipo="secundario">Lista de tarefas com Vue.js</Paragrafo>
    <LinkBotao href="#">Visualizar</LinkBotao>
  </Card>
)

export default Projeto
