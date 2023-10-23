import { Link } from "react-router-dom";
import './HotSaleDetailed.css'

function formatLargeNumber(number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

const HotSaleDetailed = ({object}) => {
  return(
    <div className="hot_sale_detailed-container">
      <div className="img-imitation large"></div>
      <div className="hot_sale_detailed-right">
        <div className="hot_sale_detailed_header-right">
          <Link className="hot_sale-objectLink large">,{object.area} м², {}</Link>
          <p className="price-label large">{formatLargeNumber(object.price)} 〒</p>
        </div>
        <p className="address-label">{object.city}, {object.street}</p>
      </div>
    </div>
  )
}

export default HotSaleDetailed;