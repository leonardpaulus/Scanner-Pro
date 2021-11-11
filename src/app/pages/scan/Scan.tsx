import React, { useState } from 'react';
import ImageInput from '../../components/ImageInput/ImageInput';
import styles from './Scan.module.css';
import Progress from '../../components/Progress/Progress';
import AddDocumentForm from '../../components/AddDocumentForm/AddDocumentForm';
import useRecognizeText from '../../../utils/useRecognizeText';

export default function Scan() {
  const [imgUrl, setImgUrl] = useState<string>('');
  const { text, progress, recognize } = useRecognizeText(imgUrl);

  let upload;
  let progressContent;

  if (progress === null) {
    progressContent = (
      <>
        <img src={imgUrl} alt="" className={styles.preview}></img>
        <button
          className={styles.button}
          onClick={() => {
            if (imgUrl) {
              recognize();
            }
          }}
        >
          Scan
        </button>
      </>
    );
  } else {
    progressContent = <Progress progress={progress.progress * 100} />;
  }

  if (!imgUrl) {
    upload = (
      <>
        <img src="assets/Logo.png" alt="Scanner Logo" />
        <ImageInput onImageUpload={(url) => setImgUrl(url)} />
      </>
    );
  } else {
    upload = (
      <>
        {text ? (
          <>
            <p>{text}</p>
            <AddDocumentForm text={text} />
          </>
        ) : (
          progressContent
        )}
      </>
    );
  }

  return (
    <div className={styles.upload}>
      <h1>Scanner Pro</h1>
      {upload}
      <span className={styles.cta_dark}>View Documents</span>
    </div>
  );
}

