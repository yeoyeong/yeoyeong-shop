import { useEffect, useState } from "react";
// import Spinner from "./Spinner";

const Image = ({ imageUrl, alt }: { imageUrl: string; alt: string }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const handleImageLoad = () => {
    setIsLoaded(true);
  };

  return (
    <>
      {!isLoaded && <div>로딩스피너</div>}
      {
        <img
          src={imageUrl}
          alt={alt}
          style={{
            backgroundColor: isLoaded ? "transparent" : "#f1f1f1",
          }}
          onLoad={handleImageLoad}
          onError={() => console.log("이미지 로드 실패")}
        />
      }
    </>
  );
};

export default Image;
