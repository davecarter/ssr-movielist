import {container, main, title, grid} from '../styles/Home.module.scss'
import {Card} from '../components/Card'
import {Search} from '../components/Search'

const Home = ({name, summary, image, id}) => (
  <div className={container}>
    <main className={main}>
      <h1 className={title}>Search Movies</h1>
      <Search />
      <div className={grid}>
        <Card name={name} summary={summary} image={image} id={id}/>
      </div>
    </main>
  </div>
)

Home.getInitialProps = async () => {
  const res = await fetch('http://localhost:3000/api/cardlist')
  const json = await res.json()
  const {name, summary, image, id} = json
  return {name, summary, image, id}
}


export default Home