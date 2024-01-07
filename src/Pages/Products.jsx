import React from "react";
import { FaHandPointRight } from "react-icons/fa";
import MenuBar from "../components/MenuBar";
import SearchMenu from "../components/SearchMenu";
import Footer from "../components/Footer";
import Disclaimer from "../components/Disclaimer";
import { FaRegDotCircle } from "react-icons/fa";

function Products() {
  return (
    <>
    <SearchMenu />
    <MenuBar />

    <div className="container-wrapper">

    </div>

    <Footer />
      <Disclaimer />
    </>
  )
}

export default Products