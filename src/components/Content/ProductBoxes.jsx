import {
    Container,
  ProductBannerBox,
  ProductBoxContainer,
} from "../../assets/style/style";

const ProductBoxes = () => {
  const bannerProductItems = [
    {
      name: "technology",
      href: "#",
      img: "https://i.hizliresim.com/ctsetwt.png",
      header:"TECHNOLOGY",
      title:"APPLE-SAMSUNG-BOSE-PHILIPS "
    },
    {
      name: "woman",
      href: "#",
      img: "https://i.hizliresim.com/h7mju1y.png",
      header:"WOMEN'S",
      title:"CLOTHING"
    },
    {
      name: "man",
      href: "#",
      img: "https://i.hizliresim.com/avhbc74.png",
      header:"MEN'S",
      title:"CLOTHING"
    },
  ];

  return (
   <Container>
        <ProductBoxContainer>
      {bannerProductItems.map((item,index) => (
        <ProductBannerBox>
            <img src={item.img} alt="" />
            <div className="title">
                <h1>{item.header}</h1>
                <p>{item.title}</p>
            </div>
        </ProductBannerBox>
      ))}
    </ProductBoxContainer>
   </Container>
  );
};

export default ProductBoxes;
