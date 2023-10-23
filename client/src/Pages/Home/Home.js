import { Link } from 'react-router-dom'
import './Home.css'
import rightArrow from './right-arrow-svgrepo-com.svg'
import { useEffect, useState } from 'react'
import HousesSlider from '../../components/slider/HousesSlider'
import { apartmentStore } from '../../store/store'
import { observer } from 'mobx-react'

const Home = observer(() => {
    const [homeIndex, setHomeIndex] = useState(0)
    const [rentIndex, setRentIndex] = useState(0)
    const [serviceType, setServiceType] = useState('Купить')
    const [buildingType, setBuildingType] = useState('Квартиру')
    const [roomNumber, setRoomNumber] = useState(0)
    const [minPrice, setMinPrice] = useState(undefined)
    const [maxPrice, setMaxPrice] = useState(undefined)

    const handleNext = (handle) => {
        if (handle === 'sale') {
            if (homeIndex + 1 < apartmentStore.apartments.length) {
                setHomeIndex((prev) => prev + 1)
            }
        } else {
            if (rentIndex + 1 < apartmentStore.apartments.length) {
                setRentIndex((prev) => prev + 1)
            }
        }
    }

    const handlePrev = (handle) => {
        if (handle === 'sale') {
            if (homeIndex - 1 >= 0) {
                setHomeIndex((prev) => prev - 1)
            }
        } else {
            if (rentIndex - 1 >= 0) {
                setRentIndex((prev) => prev - 1)
            }
        }
    }

    const handleChangeService = (e) => {
        setServiceType(e.target.value)
    }

    const handleChangeBuilding = (e) => {
        setBuildingType(e.target.value)
    }

    const handleChangeMinPrice = (e) => {
        setMinPrice(e.target.value.replace(/[^0-9]/g, ''))
    }

    const handleChangeMaxPrice = (e) => {
        setMaxPrice(e.target.value.replace(/[^0-9]/g, ''))
    }

    const handleChangeRoomNumber = (e) => {
        setRoomNumber(e.target.value)
    }

    return (
        <main>
            <header className="home-header">
                <div className="header-up">
                    <select onChange={handleChangeService}>
                        <option value="sale">Купить</option>
                        <option value="rent">Арендовать</option>
                    </select>
                    <select
                        onChange={handleChangeBuilding}
                        className="home-type-select"
                    >
                        <option value="apartment">Квартиру</option>
                        <option value="house">Дом</option>
                    </select>
                    <select onChange={handleChangeRoomNumber}>
                        <option value={0}>Любой комнатности</option>
                        <option value={1}>1 - комн.</option>
                        <option value={2}>2 - комн.</option>
                        <option value={3}>3 - комн.</option>
                        <option value={4}>4 - комн.</option>
                    </select>
                    <div className="header-cost">
                        <input
                            placeholder="От"
                            value={minPrice}
                            onChange={handleChangeMinPrice}
                        />
                        -
                        <input
                            placeholder="До"
                            value={maxPrice}
                            onChange={handleChangeMaxPrice}
                        />
                        тг
                    </div>
                    <Link to="sale">
                        <button className="find-button">Найти</button>
                    </Link>
                </div>
                <div className="header-down">
                    <div className="checkbox-form">
                        <input type="checkbox" />
                        <label className="checkbox-label">есть фото</label>
                    </div>
                    <div className="checkbox-form">
                        <input type="checkbox" />
                        <label className="checkbox-label">новостройки</label>
                    </div>
                </div>
            </header>
            <div className="content">
                <p className="content-title">
                    Горячие предложения недвижимости в Казахстане
                </p>
                <div className="content-container">
                    <div className="sale-content">
                        <header className="sale-header">
                            <p className="sale-title">Продажа</p>
                            <Link>Квартиры</Link>
                            <Link>Дома</Link>
                        </header>
                        <div className="sales">
                            <button
                                className="prev-button"
                                onClick={(e) => handlePrev('sale')}
                                disabled={homeIndex === 0 ? true : false}
                            >
                                <img src={rightArrow}></img>
                            </button>
                            <HousesSlider
                                houses={apartmentStore.apartments}
                                homeIndex={homeIndex}
                            />
                            <button
                                className="next-button"
                                onClick={(e) => handleNext('sale')}
                            >
                                <img
                                    src={rightArrow}
                                    disabled={
                                        homeIndex ===
                                        apartmentStore.apartments.length
                                            ? true
                                            : false
                                    }
                                ></img>
                            </button>
                        </div>
                    </div>

                    <div className="rent-content">
                        <header className="sale-header">
                            <p className="sale-title">Аренда</p>
                            <Link>Квартиры</Link>
                            <Link>Дома</Link>
                        </header>
                        <div className="rents">
                            <button
                                className="prev-button"
                                onClick={(e) => handlePrev('rent')}
                                disabled={rentIndex === 0 ? true : false}
                            >
                                <img src={rightArrow}></img>
                            </button>
                            <HousesSlider
                                houses={apartmentStore.apartments}
                                homeIndex={rentIndex}
                            />
                            <button
                                className="next-button"
                                onClick={(e) => handleNext('rent')}
                            >
                                <img
                                    src={rightArrow}
                                    disabled={
                                        rentIndex ===
                                        apartmentStore.apartments.length
                                            ? true
                                            : false
                                    }
                                ></img>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
})

export default Home
