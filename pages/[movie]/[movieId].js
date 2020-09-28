import { useRouter } from 'next/router'

const MovieDetail = () => {
  const router = useRouter()
  console.log(router)
  return (
    <div>
      <h3>Movie: {router.query.movie}</h3>
    </div>
  )

}


export default MovieDetail