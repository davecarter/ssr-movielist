import Link from 'next/link'
import {card, cardTitle, cardImage, cardDescription} from '../styles/Card.module.scss'

const Card = ({name = 'Card', image = '', summary = '', id=''}) => (
  <Link href="/[movie]/[movieId]" as={`/${name}/${id}`}>
    <div className={card}>
      <h3 className={cardTitle}>{name}</h3>
      <img className={cardImage} src={image.medium} />
      <div className={cardDescription} dangerouslySetInnerHTML={{__html: summary}}/>
    </div>
  </Link>
)

export {Card}