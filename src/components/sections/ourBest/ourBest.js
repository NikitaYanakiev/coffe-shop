import "./ourBest.scss";

function OurBest() {
    return (
        <section className="best">
            <div className="container">
                <h2 className="best__title title">Our best</h2>

                <div className="best__products">
                    <article className="best__product product">
                        <div className="product__img">
                            <img src="/img/solimo.jpg" alt="solimo" />
                        </div>
                        <h4 className="product__title">
                            Solimo Coffee Beans 2 kg
                        </h4>
                        <span className="product__price">10.73$</span>
                    </article>

                    <article className="best__product product">
                        <div className="product__img">
                            <img src="/img/presto.jpg" alt="presto" />
                        </div>
                        <h4 className="product__title">
                            Presto Coffee Beans 1 kg
                        </h4>
                        <span className="product__price">15.99$</span>
                    </article>

                    <article className="best__product product">
                        <div className="product__img">
                            <img src="/img/aromistico.jpg" alt="solimo" />
                        </div>
                        <h4 className="product__title">
                            AROMISTICO Coffee 1 kg
                        </h4>
                        <span className="product__price">6.99$</span>
                    </article>
                </div>
            </div>
        </section>
    );
}

export default OurBest;
