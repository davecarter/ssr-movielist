import {container, main, title, grid} from '../styles/Home.module.scss'
import {Card} from '../components/Card'

const Home = ({name, summary, image}) => (
  <div className={container}>
    <main className={main}>
      <h1 className={title}>Movies</h1>
      <div className={grid}>
        <Card name={name} summary={summary} image={image} />
      </div>
    </main>
  </div>
)

Home.getInitialProps = async () => {
  const res = await fetch('http://localhost:3000/api/cardlist')
  const json = await res.json()
  const {name, summary, image} = json
  return {name, summary, image}
}


export default Home