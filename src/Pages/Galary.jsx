import React, { useState, useCallback } from "react";

import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import { photos } from "../components/photos";
import MenuBar from "../components/MenuBar";
import SearchMenu from "../components/SearchMenu";
import Footer from "../components/Footer";
import Disclaimer from "../components/Disclaimer";

function Galary() {
    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);
  
    const openLightbox = useCallback((event, { photo, index }) => {
      setCurrentImage(index);
      setViewerIsOpen(true);
    }, []);
  
    const closeLightbox = () => {
      setCurrentImage(0);
      setViewerIsOpen(false);
    };
  return (
    <div className="">
         <SearchMenu />
      <MenuBar />

      <div className="bg-gall justify-center flex items-center">
          <h1 className=" text-2xl text-black uppercase font-bold mt-20"> gallery</h1>
      </div>
   <div className=" container-wrapper py-4 mx-auto">
    <h2 className=" py-4 text-lg font-medium text-center max-w-3xl mx-auto">
    Embark on a visual journey through our gallery, where each image tells a story of craftsmanship, innovation, and the essence of our company's commitment to excellence.

    </h2>
    <h1 className=" text-center text-5xl">EVENT</h1>
   <Gallery photos={photos} onClick={openLightbox} />
    <ModalGateway>
      {viewerIsOpen ? (
        <Modal onClose={closeLightbox}>
          <Carousel
            currentIndex={currentImage}
            views={photos.map(x => ({
              ...x,
              srcset: x.srcSet,
              caption: x.title
            }))}
          />
        </Modal>
      ) : null}
    </ModalGateway>
  
   </div>

    <Footer />
      <Disclaimer />
  </div>
  )
}

export default Galary