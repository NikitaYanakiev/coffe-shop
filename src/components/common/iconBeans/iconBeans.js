import './iconBeans.scss';

function IconBeans ({beansColor}) {
    let srcImg;
    let className = 'beans__icon';
    if (beansColor === 'black') {
        srcImg=`${process.env.PUBLIC_URL}/icons/tripple_beans_black.svg`;
        className += ' beans__icon_black';
    } else if (beansColor === 'white') {
        srcImg = `${process.env.PUBLIC_URL}/icons/tripple_beans_white.svg`;
    }

    return (
        <div className={className}>
            <img src={srcImg} alt="beans"/>
        </div>
    );
}

export default IconBeans;