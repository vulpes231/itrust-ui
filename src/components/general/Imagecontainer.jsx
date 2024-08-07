import React from "react";

const Imagecontainer = ({ img, imageWidth }) => {
  return (
    <figure className="w-full flex items-center justify-center">
      <img loading="lazy" src={img} alt="" className={`w-full ${imageWidth}`} />
    </figure>
  );
};

export default Imagecontainer;
