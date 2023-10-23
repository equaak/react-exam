import './Sale.css'
import line from './hyphen-svgrepo-com.svg'
import apply from './apply-svgrepo-com.svg'
import { Link } from 'react-router-dom'
import { observer } from 'mobx-react'
import { apartmentStore } from '../../store/store'
import HotSale from '../../components/hotSale/HotSale'
import HotSaleDetailed from '../../components/hotSale/hotSaleDetailed/HotSaleDetailed'

const Sale = observer(() => {
    return (
        <main>
            <header className="salePage-header">
                <div className="header-upPart">
                    <p className="building-type"></p>
                    <div className="rooms_number">
                        <button className="rooms_number-button">1</button>
                        <button className="rooms_number-button">2</button>
                        <button className="rooms_number-button">3</button>
                        <button className="rooms_number-button">4</button>
                    </div>
                    - комн.
                    <p className="price-label">Цена</p>
                    <div className="price-inputs">
                        <input placeholder="От" className="price-input"></input>
                        <img src={line}></img>
                        <input placeholder="До" className="price-input"></input>
                    </div>
                    <div className="checkbox-form">
                        <input type="checkbox" />
                        <label className="checkbox-label">есть фото</label>
                    </div>
                </div>
                <div className="header-downPart">
                    <div className="part-form">
                        <div className="select-form">
                            <div>
                                <p>Тип дома</p>
                            </div>
                            <select>
                                <option>Квартира</option>
                                <option>Дом</option>
                            </select>
                        </div>
                        <div className="input-form">
                            <p>Год постройки</p>
                            <div className="price-inputs">
                                <input
                                    placeholder="От"
                                    className="price-input"
                                ></input>
                                -
                                <input
                                    placeholder="До"
                                    className="price-input"
                                ></input>
                            </div>
                        </div>
                        <div className="select-form">
                            <p>Жилой комплекс</p>
                            <select></select>
                        </div>
                    </div>
                    <div className="part-form">
                        <div className="input-form">
                            <p>Год постройки</p>
                            <div className="price-inputs">
                                <input
                                    placeholder="От"
                                    className="price-input"
                                ></input>
                                -
                                <input
                                    placeholder="До"
                                    className="price-input"
                                ></input>
                            </div>
                        </div>
                        <div className="checkbox-form">
                            <input type="checkbox" />
                            <p>Не последний этаж</p>
                        </div>
                        <div className="checkbox-form">
                            <input type="checkbox" />
                            <p>Не первый этаж</p>
                        </div>
                    </div>
                    <div className="part-form">
                        <div className="input-form">
                            <p>Этажей в доме</p>
                            <div className="price-inputs">
                                <input
                                    placeholder="От"
                                    className="price-input"
                                ></input>
                                -
                                <input
                                    placeholder="До"
                                    className="price-input"
                                ></input>
                            </div>
                        </div>
                        <div className="input-form">
                            <p>Общая площадь</p>
                            <div className="price-inputs">
                                <input
                                    placeholder="От"
                                    className="price-input"
                                ></input>
                                -
                                <input
                                    placeholder="До"
                                    className="price-input"
                                ></input>
                            </div>
                            м²
                        </div>
                        <div className="input-form">
                            <p>Площадь кухни</p>
                            <div className="price-inputs">
                                <input
                                    placeholder="От"
                                    className="price-input"
                                ></input>
                                -
                                <input
                                    placeholder="До"
                                    className="price-input"
                                ></input>
                            </div>
                            м²
                        </div>
                    </div>
                </div>
                <div className="header-footer">
                    <button className="show-button">
                        Показать результаты{}
                    </button>
                </div>
            </header>
            <div className="sale-page-content">
                <div className="sale-part">
                    <p className="part-title">Продажа {} в США</p>
                    <p className="found_building-label">
                        Найдено {} объявлений
                    </p>
                    <div className="building-filter">
                        <div className="filter-left">
                            <p>Сначала: </p>
                            <button className="filter-button">
                                новые объявления
                            </button>
                            <button className="filter-button">дешевые</button>
                            <button className="filter-button">дорогие</button>
                        </div>
                        <div className="filter-right">
                            <div className="right-upPart">
                                <img src={apply}></img>
                                <Link className="apply-label">
                                    Подать объявление
                                </Link>
                            </div>
                            <p className="apply-sublabel">в этот раздел</p>
                        </div>
                    </div>
                    <div className="building-content">
                        <p className="building-content-title">
                            Горячие предложения от специалистов и компаний
                        </p>
                        <div className="hot_sale-3">
                            {apartmentStore.apartments.map((item, i) => {
                                if (i < 1) {
                                    return item.map((subItem, j) => {
                                        console.log(j)
                                        if (j < 3) {
                                            if(j === 2){
                                                console.log('a')
                                                return(
                                                    <HotSaleDetailed object={subItem} />
                                                )
                                            }
                                            return (
                                                <>
                                                    <HotSaleDetailed
                                                        object={subItem}
                                                    />
                                                    <div className='hot_sale-border'></div>
                                                </>
                                            )
                                        }
                                        else return;
                                    })
                                } else {
                                    return
                                }
                            })}
                        </div>
                    </div>
                    <div className='just_sale'>
                        {apartmentStore.apartments.map((item, i) => {
                            if(i == 1){
                                return item.map((subItem) => {
                                    return <HotSaleDetailed object={subItem} />
                                })
                            }
                            else return;
                        })}
                    </div>
                </div>
                <div className="hot_sale-part">
                    <p className="hot_part-title">Горячие предложения</p>
                    <div className="hot_sales-objects">
                        {apartmentStore.apartments.map((item, i) => {
                            if (i < 1) {
                                return item.map((subItem) => {
                                    return <HotSale object={subItem} />
                                })
                            } else {
                                return
                            }
                        })}
                    </div>
                </div>
            </div>
        </main>
    )
})

export default Sale
