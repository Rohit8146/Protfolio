import { Link } from "react-router-dom";
import { ProtfolioContext } from "../context/ProtfolioContext";
import { useContext, useEffect } from "react";
import { fadeInImageAnimation } from "../utils/animations";

function ImageTag({ src, alt, link }) {
  const { isLoading } = useContext(ProtfolioContext);
  useEffect(() => {
    if (isLoading) {
      setTimeout(() => {
        fadeInImageAnimation();
      }, 5000);
      return;
    } else {
      fadeInImageAnimation();
    }
  }, []);

  return (
    <div
      className={`${
        link ? "image_wrapper" : "image_wrapper__inner"
      }  w-[100%] h-[100%]`}
    >
      {!link ? (
        <img
          className=" w-[100%] h-[100%] object-contain"
          src={src}
          alt={alt}
        />
      ) : (
        <Link to={link}>
          <img
            className=" w-[100%] h-[100%] object-contain"
            src={src}
            alt={alt}
          />
        </Link>
      )}
    </div>
  );
}

export default ImageTag;
