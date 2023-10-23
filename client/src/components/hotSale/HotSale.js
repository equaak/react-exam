import { Link } from "react-router-dom";
import './HotSale.css'
const HotSale = ({object}) => {
  return(
    <div className="hot_sale-container">
      <div className="hot_sale-left">
        <div className="img-imitation"></div>
      </div>
      <div className="hot_sale-right">
        <Link className="hot_sale-objectLink">,{object.area} м², {} этаж</Link>
        <p className="price-label">{parseInt(object.price/1000000)} млн 〒</p>
        <p className="adress-label">{object.city}, {object.street}</p>
      </div>
    </div>
  )
}

export default HotSale;