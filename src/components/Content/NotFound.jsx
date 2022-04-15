import { Flex } from "../../assets/style/style"
import {BiError} from "react-icons/bi"
import { useEffect } from "react"



const NotFound = () => {
    useEffect(() => {
  document.getElementById('notfound').style.height = "calc(100vh - ("+document.querySelector('nav').clientHeight +"px + "+ document.querySelector('footer').clientHeight+"px))";
}, [])
    return (
        <Flex id="notfound" flexCol alignCenter justifyCenter className="gap-0">
            <BiError size={150}/>
 
                <h1>SORRY</h1>
            <p>The page you were looking for was not found</p>
       
        </Flex>
    )
}

export default NotFound;