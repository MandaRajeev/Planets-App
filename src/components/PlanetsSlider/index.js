// Write your code here
import Slider from 'react-slick'
import PlanetItem from '../PlanetItem'

import './index.css'

const PlanetSlider = props => {
  const {planetsList} = props

  return (
    <div className="planets-app-container" data-testid="planets">
      <h1 className="heading">PLANETS</h1>
      <Slider>
        {planetsList.map(eachItem => (
          <PlanetItem key={eachItem.id} planetsDetails={eachItem} />
        ))}
      </Slider>
    </div>
  )
}

export default PlanetSlider
