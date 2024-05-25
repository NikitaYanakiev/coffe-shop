import IconBeans from "../../common/iconBeans/iconBeans";
import "./aboutItem.scss";

function AboutItem() {
    return (
        <section className="about-item">
            <div className="container about-item__container">
                <div className="about-item__img">
                    <img src="/img/about_it.jpg" alt="girl with coffe" />
                </div>

                <div className="about-item__content">
                    <h2 className="about-item__title title">About it</h2>
                    <IconBeans beansColor={"black"} />
                    <p className="about-item__subtitle">
                        <span>Country:</span> Brasil
                    </p>
                    <p className="about-item__text">
                        <span>Description:</span> Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat.
                    </p>
                    <p className="about-item__price">Price:  <span>16.99$</span></p>
                </div>
            </div>
        </section>
    );
}

export default AboutItem;
