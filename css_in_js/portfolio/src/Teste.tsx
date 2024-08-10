import styled from 'styled-components'

type BotaoProps = {
    principal: boolean;
    fontSize?: string
}

const Botao = styled.button<BotaoProps>`
  background-color: ${(props) => (props.principal ? 'green' : 'blue')};
  font-size: ${(props) => props.fontSize || '16px'};
`

const BotaoPerigo = styled(Botao)`
    background-color: red;
    color: #fff;

    span{
        text-decoration: line-through;

    }
`

function Teste() {
  return (
    <div>
      <Botao fontSize='20px' principal={true} >Click aqui</Botao>
      <Botao principal={false} >Click aqui</Botao>
      <BotaoPerigo as="a" principal><span>Nao click aqui</span></BotaoPerigo>
    </div>
  )
}

export default Teste
