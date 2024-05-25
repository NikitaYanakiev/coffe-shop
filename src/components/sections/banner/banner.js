import './banner.scss';

function Banner({bannerClass, text}) {

    let className = 'banner';
    if (bannerClass === 'pleasure') {
        className += ' banner_pleasure';
        console.log(className);
    }
    return (
        <section className={className}>
            <div className="container">
                <h2 className="banner__title title title_big">{text}</h2>
            </div>
        </section>
    );
}

export default Banner;
