import { Link } from 'react-router-dom';
import './Object.css'

const Object = ({object}) => {
  return(
    <div className="object_page-container">
      <div className='object_page-header'>
        <Link to='/' className='hot_sale-objectLink'>Квартиры</Link>
        <Link to='/' className='hot_sale-objectLink'>Дома</Link>
      </div>
      <div className='object-content'>
        <header>
          <p className='header-info'>{}-комнатная {}, {object.area} м², {object.street}</p>
          <button className='leave_note-button'>Оставить заявку</button>
        </header>
        <main>
          <div className='main-left'>
            <p className='price-label'>{object.price} 〒</p>
            <div className='building-info'>
              <div className='info-left'>
                <p className='building-label'>Город</p>
                <div className='info-line'></div>
              </div>
              <div className='info-right'>
                <p className='building-data'>{object.city}</p>
              </div>
            </div>
            <div className='building-info'>
              <div className='info-left'>
                <p className='building-label'>Площадь</p>
                <div className='info-line'></div>
              </div>
              <div className='info-right'>
                <p className='building-data'>{object.area}</p>
              </div>
            </div>
          </div>
          <div className='main-right'>
            <div className='img-imitation'></div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default Object;