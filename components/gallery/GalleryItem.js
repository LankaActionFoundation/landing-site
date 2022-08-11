import { useRouter } from "next/router";
import React, { useEffect, useState, useRef, useLayoutEffect } from "react";

const GalleryItem = ({image, clickImage, imageIndex}) => {
  // console.log("image: ", image);
  const imageRef = useRef(null);
image = image;

const [spans, setSpans] = useState(0);

useLayoutEffect(() => {
  const element = imageRef.current
  element.addEventListener("load", setImageSpans);
},[]);

const  setImageSpans = () => {
  if(imageRef)
  {
    const height = imageRef.current.clientHeight;
  const imageSpans = Math.ceil(height / 300);
  setSpans(imageSpans);
  }
  
}

    return(<>
    <div style={{ gridRowEnd: `span ${spans}` }}>
    {/* {image.image.src} */}
        <img
          ref={imageRef}
          src={image.src}
          alt={image.caption}
          onClick={() => {clickImage(imageIndex);}}
        />
      </div>
    </>);
}

export default GalleryItem;