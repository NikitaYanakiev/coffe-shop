import IconBeans from "../../common/iconBeans/iconBeans";
import "./aboutGoods.scss";

function AboutGoods() {
    return (
        <section className="about-goods">
            <div className="container about-goods__container">
                <div className="about-goods__img">
                    <img src="/img/cup.jpg" alt="cup of coffe" />
                </div>

                <div className="about-goods__content">
                    <h2 className="about-goods__title title">
                        About our goods
                    </h2>
                    <IconBeans beansColor={"black"} />
                    <p className="about-goods__text">
                        Extremity sweetness difficult behaviour he of. On
                        disposal of as landlord horrible.
                        <br />
                        <br />
                        Afraid at highly months do things on at. Situation
                        recommend objection do intention <br />
                        so questions. <br />
                        As greatly removed calling pleased improve an. Last ask
                        him cold feel <br />
                        met spot shy want. Children me laughing we prospect
                        answered followed. At it went <br />
                        is song that held help face.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default AboutGoods;
