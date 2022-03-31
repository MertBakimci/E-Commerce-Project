import {
    Container,
  Flex,
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
      title:"APPLE-SAMSUNG-BOSE-PHILIPS ",
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
    {
      name: "kids",
      href: "#",
      img: "https://i.hizliresim.com/mw2zyn8.png",
      header:"KID'S",
      title:"CLOTHING",
      discount: "25%"
    },
  ];

  return (
   <Container>
        <ProductBoxContainer>
      {bannerProductItems.map((item,index) => (
        <ProductBannerBox key={index}>
           <div className="item-img">
           <img  src={item.img} alt="" />
           </div>
            {item.discount && <Flex className="discount-banner" flexCol alignCenter justifyCenter><span>{item.discount}</span><p>DISCOUNT</p></Flex> }
            <div className={`title ${item.discount ? "have-discount" : ""}`} >
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
