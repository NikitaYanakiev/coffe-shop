import IconBeans from '../../common/iconBeans/iconBeans';
import './aboutBeans.scss';

function AboutBeans() {
    return (
        <section className="about-beans">
            <div className="container about-beans__container">
                <div className="about-beans__img">
                    <img src={`${process.env.PUBLIC_URL}/img/about.jpg`} alt="girl with coffe" />
                </div>

                <div className="about-beans__content">
                    <h2 className="about-beans__title title">
                        About our beans
                    </h2>
                    <IconBeans beansColor={"black"} />
                    <p className="about-beans__text">
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

export default AboutBeans;
