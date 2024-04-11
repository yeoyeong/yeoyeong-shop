import { useMemo, useState } from "react";
import styles from "./image.module.scss";
// import Spinner from "./Spinner";

const Image = ({
  imageUrl,
  alt,
  height,
}: {
  imageUrl: string;
  alt: string;
  height?: number;
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const handleImageLoad = () => {
    setIsLoaded(true);
  };

  const SKELETON_HEIGHT = useMemo(
    () => ({
      height: height,
    }),
    []
  );
  return (
    <>
      {!isLoaded && (
        <div style={SKELETON_HEIGHT} className={styles.image_skeleton_wrap}>
          <div className={styles.image_skeleton}>
            <div className={styles.loader}></div>
          </div>
        </div>
      )}
      {
        <img
          src={imageUrl}
          alt={alt}
          // style={{
          //   backgroundColor: isLoaded ? "transparent" : "#f1f1f1",
          // }}
          onLoad={handleImageLoad}
          onError={() => console.log("이미지 로드 실패")}
        />
      }
    </>
  );
};

export default Image;
