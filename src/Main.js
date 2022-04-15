import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { Divider, Flex } from "./assets/style/style";
import HomePage from "./components/Content/HomePage";
import NotFound from "./components/Content/NotFound";
import Panel from "./components/Content/Panel";

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
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="*" element={<NotFound/>}/>
        <Route path="/admin-panel" element={<Panel/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default Main;
