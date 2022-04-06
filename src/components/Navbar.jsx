import { Icons } from "../assets/icons";
import { BrandName, Container, Flex, FlexButton, SearchBar } from "../assets/style/style";
import {IoSearchOutline} from 'react-icons/io5';
import {FiUser,FiUserPlus} from 'react-icons/fi';
import { useEffect, useState } from "react";


const Navbar = () => {
const [ifMobile, setIfMobile] = useState(window.innerWidth <= 1000 ? true : false);
useEffect(() => {
  window.addEventListener('resize', () => {
      setIfMobile(window.innerWidth <= 1000 ? true : false)
  })
}, [])

const linkItems = [
    {name:"man",href:"/man-products"},
    {name:"woman",href:"/woman-products"},
    {name:"kıds",href:"/kid-products"},
    {name:"accesorıes",href:"/accesories"},
    {name:"spor&outdoor",href:"/spor-outdoor"},
]

    return (
       
        <nav><Container>
            
        <Flex justifyEvenly flexCol className="gap-20">
          {ifMobile ? 
          
          <Flex className="w-full gap-20" flexCol justifyCenter alignCenter >
            <BrandName className="">SHOPY</BrandName>
           
            <SearchBar className="grayBg">
                <input type="text" />
               <button>
               <Flex justifyCenter alignCenter>
               <IoSearchOutline size={24}/>
               </Flex>
               </button>
            </SearchBar>
         <Flex className="gap-10 w-full" justifyCenter>
                <FlexButton className="gap-5 btn-primary w-full"  justifyCenter alignCenter>
                    <FiUser size={20}/>
                    <span>SIGN IN</span>
                </FlexButton>
                <FlexButton className="gap-5 btn-primary w-full" justifyCenter alignCenter>
                    <FiUserPlus size={20}/>
                    <span>SIGN UP</span>
                </FlexButton>
            </Flex>
            </Flex>
          
          : 
          
          <Flex className="w-full" justifyBetween alignCenter >
            <BrandName className="w-full">SHOPY</BrandName>
           
            <SearchBar className="grayBg">
                <input type="text" />
               <button>
               <Flex justifyCenter alignCenter>
               <IoSearchOutline size={24}/>
               </Flex>
               </button>
            </SearchBar>
         <Flex className="gap-10 w-full" justifyEnd>
                <FlexButton className="gap-5 btn-primary"  justifyCenter alignCenter>
                    <FiUser size={20}/>
                    <span>SIGN IN</span>
                </FlexButton>
                <FlexButton className="gap-5 btn-primary" justifyCenter alignCenter>
                    <FiUserPlus size={20}/>
                    <span>SIGN UP</span>
                </FlexButton>
            </Flex>
            </Flex>
          }
           
            <Flex justifyCenter alignCenter className="gap-5 nav-links-container">
                {linkItems.map((item,index) => (
                    <a className="nav-links" href={item.href}>{item.name}</a>
                ))}
            </Flex>
        </Flex>
        </Container>
       </nav>
     



       )
}

export default Navbar;