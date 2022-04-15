import { Flex } from "../../assets/style/style";
import BannerSlider from "./BannerSlider";
import LastItems from "./HomePage/LastItems";
import PopularProducts from "./HomePage/PopularProducts";
import ProductBoxes from "./ProductBoxes";

const HomePage = () => {
  return (
    <Flex flexCol>
      <BannerSlider />
      <ProductBoxes />
      <PopularProducts />
      <LastItems />
    </Flex>
  );
};

export default HomePage;
