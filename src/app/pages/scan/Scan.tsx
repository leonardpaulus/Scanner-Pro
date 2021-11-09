import React, { useState } from 'react';
import ImageInput from '../../components/ImageInput/ImageInput';
import styles from './Scan.module.css';

export default function Scan() {
  const [imgUrl, setImgUrl] = useState<null | string>(null);

  let img;

  if (imgUrl === null) {
    img = <ImageInput onImageUpload={(url) => setImgUrl(url)} />;
  } else {
    img = <img src={imgUrl}></img>;
  }

  return <div className={styles.upload}>{img}</div>;
}
