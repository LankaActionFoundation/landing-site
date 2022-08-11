import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import "photoswipe/dist/photoswipe.css";
import { Gallery, Item } from "react-photoswipe-gallery";
import { GalleryItem} from "./GalleryItem";

const CustomGallery = (imgDetails) => {
  const [imgs, setImgs] = useState([]);
  useEffect(() => {
    setImgs(imgDetails.imgDetails);
    console.log("imgDetails:", imgDetails.imgDetails);
  }, []);

 
    const XItems = imgs.forEach((imgDetail) => {
        return(<>
        a
        </>);
      });
  

  return (
    <>
       <Gallery>
    {/* <Item
      original="https://placekitten.com/1024/768?image=1"
      thumbnail="https://placekitten.com/1024/768?image=1"
      width="1024"
      height="768"
    >
      {({ ref, open }) => (
        <img ref={ref} onClick={open} src="https://placekitten.com/80/60?image=1" />
      )}
    </Item>
    <Item
      original="https://placekitten.com/1024/768?image=2"
      thumbnail="https://placekitten.com/1024/768?image=2"
      width="1024"
      height="768"
    >
      {({ ref, open }) => (
        <img ref={ref} onClick={open} src="https://placekitten.com/80/60?image=2" />
      )}
    </Item> */}
    {/* <XItems /> */}
  </Gallery>
    </>
  );
};

export default CustomGallery;
