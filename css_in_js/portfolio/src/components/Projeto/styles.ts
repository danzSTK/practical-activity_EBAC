import styled from 'styled-components'

export const Card = styled.div`
  border: 1px solid ${(props) => props.theme.corDaBorda};
  padding: 16px;
`
export const LinkBotao = styled.a`
  display: inline-block;
  color: ${(props) => props.theme.corDeFundo};
  font-size: 14px;
  background-color: ${(props) => props.theme.corDeFundoBotao};
  text-decoration: none;
  padding: 8px;
  margin-top: 24px;
`
