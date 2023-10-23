import './House.css'

const House = (house) => {
  return(
    <div className='house'>
      <div className="house-container">
        <div className="house-cost-container">
          {parseInt(house.house.price/1000000)} млн 〒
        </div>
      </div>
      <div className='house-info-container'>
        ,квартира {house.house.area} м²
      </div>
    </div>
  )
}

export default House;