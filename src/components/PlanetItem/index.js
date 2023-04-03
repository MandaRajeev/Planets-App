// Write your code here
import './index.css'

const PlanetItem = props => {
  const {planetsDetails} = props
  const {name, imageUrl, description} = planetsDetails

  return (
    <div className="item">
      <img src={imageUrl} alt={`planet ${name}`} />
      <h1>{name}</h1>
      <p>{description}</p>
    </div>
  )
}

export default PlanetItem
