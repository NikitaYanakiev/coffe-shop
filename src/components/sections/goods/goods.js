import GoodsItem from "../../common/goodsItem/goodsItem";
import GoodsFilter from "../../common/goodsFilter/goodsFilter";
import { useState } from "react";
import "./goods.scss";

function Goods() {
    const data = [
        { name: "AROMISTICO", country: "Brazil", price: "6.99$", img: '/img/aromistico.jpg', id: 1 },
        { name: "AROMISTICO", country: "Brazil", price: "6.99$", img: '/img/aromistico.jpg', id: 2 },
        { name: "PRESTO", country: "Columbia", price: "6.99$", img: '/img/presto.jpg', id: 3 },
        { name: "SOLIMO", country: "Kenya", price: "6.99$", img: '/img/solimo.jpg', id: 4 },
        { name: "SOLIMO", country: "Kenya", price: "6.99$", img: '/img/solimo.jpg', id: 5 },
        { name: "PRESTO", country: "Columbia", price: "6.99$", img: '/img/presto.jpg', id: 6 },
    ];
    const [term, setTerm] = useState("");
    const [filter, setFilter] = useState("All");
    const visibleData = filterGoods(searchGoods(data, term), filter);

    function searchGoods(items, term) {
        if (items.length === 0) {
            return items;
        }

        return items.filter((item) => {
            return item.name.indexOf(term.toUpperCase()) > -1;
        });
    }

    function filterGoods(items, filter) {
        switch (filter) {
            case 'Brazil' :
                return items.filter(item => item.country === 'Brazil');
            case 'Kenya' :
                return items.filter(item => item.country === 'Kenya');
            case 'Columbia' :
                return items.filter(item => item.country === 'Columbia');
            case 'All' :
                return items;
            default: 
                return items;
        }
    }

    const goods = visibleData.map((item) => (
        <GoodsItem
            key={item.id}
            name={item.name}
            country={item.country}
            price={item.price}
            img={item.img}
        />
    ));

    function onSearch (e) {
        setTerm(e.target.value);
    }

    console.log(goods);
    return (
        <section className="goods">
            <div className="container goods__container">
                <div className="goods__header">
                    <div className="goods__search">
                        <label className="goods__label" htmlFor="search">
                            Looking for
                        </label>
                        <input
                            type="search"
                            name="search"
                            id="search"
                            className="goods__input"
                            placeholder="start typing here"
                            onChange={onSearch}
                        />
                    </div>
                    <GoodsFilter filter={filter} setFilter={setFilter}/>
                </div>
                <div className="goods__items">{goods}</div>
            </div>
        </section>
    );
}

export default Goods;
