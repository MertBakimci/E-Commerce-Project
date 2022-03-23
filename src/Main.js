import { useEffect } from "react";
import { Flex } from "./assets/style/style";
import Navbar from "./components/Navbar";

const Main = () => {
  useEffect(() => {
    document.body.classList = "light";
  }, [])
  
  return (
    <div className="container">
      <Navbar/>
    </div>
  );
}

export default Main;
