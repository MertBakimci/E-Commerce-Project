import { BrandName, Container, Flex, FlexButton, SearchBar, Divider } from "../assets/style/style";
import {RiMastercardFill,RiVisaLine} from 'react-icons/ri';

const Footer = () => {

    const linkItems = [
        {name:"man",href:"/man-products"},
        {name:"woman",href:"/woman-products"},
        {name:"kıds",href:"/kid-products"},
        {name:"accesorıes",href:"/accesories"},
        {name:"spor&outdoor",href:"/spor-outdoor"},
    ]

    return (
        <footer>
          <Container className="h-full">
          <Flex flexCol justifyCenter alignCenter className="gap-40 h-full">
                <h1 className="text-center">Subscribe the our newsletter</h1>
                <SearchBar className="subscribe-button">
                <input placeholder="Subscribe to our newsletter !" type="text" />
               <button>
                SUBSCRIBE
               </button>
                </SearchBar>
                <Divider className="divider-primary w-full" />
                <Flex justifyBetween alignCenter className="w-full footer-links">
                    <BrandName className="w-full">SHOPY</BrandName>
                    <Flex justifyCenter alignCenter className="gap-10 w-full flex-wrap">
                {linkItems.map((item,index) => (
                    <a className="nav-links color-primary" href={item.href}>{item.name}</a>
                ))}
            </Flex>
            <Flex justifyEnd alignCenter className="gap-10 w-full ">
               <RiMastercardFill size={48}/>
               <RiVisaLine size={48}/>
            </Flex>
                </Flex>
            </Flex>
          </Container>
        </footer>
    )
}

export default Footer;