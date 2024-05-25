import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../layout/header/header";
import Footer from "../layout/footer/footer";
import MainPage from "../../pages/MainPage";
import OurCoffe from "../../pages/OurCoffe";
import PleasurePage from "../../pages/PleasurePage";
import AboutIt from "../../pages/AboutIt";

function App() {
    return (
        <>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/coffe-shop" element={<MainPage />} />
                    <Route path="/our-coffe" element={<OurCoffe />} />
                    <Route path="/pleasure" element={<PleasurePage />} />
                    <Route path="/about-it" element={<AboutIt />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </>
    );
}

export default App;
