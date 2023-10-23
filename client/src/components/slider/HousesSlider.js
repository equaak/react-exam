import House from '../house/House'
import './HousesSlider.css'

const HousesSlider = ({ houses, homeIndex }) => {
    return (
        <div className="objects">
            {houses.map((item, id) => {
                if (id === homeIndex) {
                    return item.map((subItem) => {
                        return <House house={subItem} />
                    })
                }
            })}
        </div>
    )
}

export default HousesSlider
