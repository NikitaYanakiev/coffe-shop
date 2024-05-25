import { Link } from 'react-router-dom';
import IconBeans from '../../common/iconBeans/iconBeans';
import './mainBanner.scss';

function MainBanner() {
  
    return (
        <section className='main-banner'>
            <div className="container">
                <h1 className="main-banner__title">Everything You Love About Coffee</h1>
                <IconBeans beansColor={'white'}/>
                <p className="main-banner__text">
                    We makes every day full of energy and taste
                    Want to try our beans?
                </p>
                <Link to="/our-coffe" className="main-banner__btn">More</Link>
            </div>
        </section>
    );
}

export default MainBanner;