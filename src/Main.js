import { useEffect } from "react";
import { Divider, Flex } from "./assets/style/style";
import BannerSlider from "./components/Content/BannerSlider";
import ProductBoxes from "./components/Content/ProductBoxes";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

const Main = () => {
  useEffect(() => {
    document.body.classList = "light";
  }, [])
  
  return (
    <div className="container">
      <Navbar/>
      <Divider/>
      <BannerSlider/>
      <ProductBoxes/>
      <Footer/>
    </div>
  );
}

export default Main;
