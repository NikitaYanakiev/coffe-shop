import { Link } from 'react-router-dom';
import './goodsItem.scss';

function GoodsItem({name, country, price, img}) {
    return (
        <Link to="/about-it" className="goods__item">
            <div className="goods__img">
                <img src={img} alt="coffe" />
            </div>
            <h4 className="goods__title">{name} Coffee 1 kg</h4>
            <h6 className="goods__subtitle">{country}</h6>
            <span className="goods__price">{price}</span>
        </Link>
    );
}

export default GoodsItem;
