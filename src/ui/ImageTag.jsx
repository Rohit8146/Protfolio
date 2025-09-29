import { Link } from "react-router-dom";

function ImageTag({ src, alt, link }) {
  return (
    <div className="image_wrapper w-[100%] h-[100%]">
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
