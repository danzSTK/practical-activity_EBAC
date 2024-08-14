import styled from 'styled-components'

export const GithubSecao = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 32px;
  margin-bottom: 64px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    row-gap: 16px;
  }
  img {
    height: 157px;
    @media (max-width: 768px) {
      width: 100%;
      height: auto;
    }
  }
`
