import Title from '../../components/Title'
import Paragrafo from '../../components/Paragrafo'
import { GithubSecao } from './styles'

const Sobre = () => (
  <section>
    <Title fontSize={16}>Sobre mim</Title>
    <Paragrafo tipo="principal">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus mollitia
      saepe quos ea sapiente officiis harum cum delectus in. Blanditiis aperiam
      culpa sint accusantium dolor, distinctio aut veniam eos dolore.
    </Paragrafo>
    <GithubSecao>
      <img src="https://github-readme-stats.vercel.app/api?username=danzSTK&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=danzSTK&layout=compact&langs_count=7&theme=dracula" />
    </GithubSecao>
  </section>
)

export default Sobre
