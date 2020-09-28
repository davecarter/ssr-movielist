import {useState} from 'react'
import { useRouter } from 'next/router'

export const Search = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const handleChange = evt => setSearchQuery(evt.target.value)
  const handleClick = evt => {
    evt.preventDefault()
    router.push(`/[search]/${searchQuery}`)
  }
  const router = useRouter()
 
  return (
    <div>
      <input type='text' onChange={handleChange} />
      <button onClick={handleClick}>Search</button>
    </div>
  )
}