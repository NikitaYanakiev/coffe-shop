import "./goodsFilter.scss";

function GoodsFilter(props) {
    const buttonsData = [
        { name: "Brazil" },
        { name: "Kenya" },
        { name: "Columbia" },
        { name: "All" },
    ];

    const buttons = buttonsData.map(({ name }) => {
        const active = props.filter === name;
        const clazz = active ? "goods__btn goods__btn_active" : "goods__btn";
        return (
            <button
                type="button"
                key={name}
                className={clazz}
                onClick={() => props.setFilter(name)}
            >
                {name}
            </button>
        );
    });
    return (
        <div className="goods__filter">
            <span className="goods__label">Or filter</span>
            <div className="goods__btns">{buttons}</div>
        </div>
    );
}

export default GoodsFilter;
