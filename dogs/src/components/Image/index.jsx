import { useState } from "react";
import styles from "./image.module.css";

const Image = ({ alt, ...props }) => {
  const [ skeleton, setSkeleton] = useState(true);

  function handleLoad({target}){
    setSkeleton(false)
    target.style.opacity = 1
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.skeleton}>
        <img onLoad={handleLoad} className={styles.img} alt={alt} {...props} />
      </div>
    </div>
  );
};


export default Image