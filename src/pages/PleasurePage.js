import Banner from "../components/sections/banner/banner";
import AboutGoods from "../components/sections/aboutGoods/aboutGoods";
import Goods from "../components/sections/goods/goods";

function PleasurePage() {
    return (
        <>
            <Banner bannerClass={'pleasure'} text={'For your pleasure'}/>
            <AboutGoods />
            <Goods />
        </>
    );
}

export default PleasurePage;