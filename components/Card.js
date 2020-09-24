import {card, cardTitle, cardImage, cardDescription} from '../styles/Card.module.scss'

const Card = ({name = 'Card', image = '', summary = '', }) => (
  <div className={card}>
    <h3 className={cardTitle}>{name}</h3>
    <img className={cardImage} src={image.medium} />
    <div className={cardDescription} dangerouslySetInnerHTML={{__html: summary}}/>
  </div>
)

export {Card}