import React, { useState } from 'react';
import ImageInput from '../../components/ImageInput/ImageInput';
import styles from './Scan.module.css';
import Progress from '../../components/Progress/Progress';
import { recognizeText, RecognizeProgress } from '../../../utils/ocr';

export default function Scan() {
  const [imgUrl, setImgUrl] = useState<null | string>(null);
  const [recognizedText, setRecognizedText] = useState<null | string>(null);
  const [recognizeProgress, setRecognizeProgress] =
    useState<RecognizeProgress | null>(null);

  let upload;
  let progressContent;

  if (recognizeProgress === null) {
    progressContent = (
      <>
        <img src={imgUrl} alt="" className={styles.preview}></img>
        <button
          className={styles.button}
          onClick={() => {
            if (imgUrl) {
              recognizeText(imgUrl, setRecognizeProgress).then(
                setRecognizedText
              );
            }
          }}
        >
          Scan
        </button>
      </>
    );
  } else {
    progressContent = <Progress progress={recognizeProgress.progress * 100} />;
  }

  if (imgUrl === null) {
    upload = (
      <>
        <img src="assets/Logo.png" alt="Scanner Logo" />
        <ImageInput onImageUpload={(url) => setImgUrl(url)} />
      </>
    );
  } else {
    upload = (
      <>
        {recognizedText ? (
          <>
            <p>{recognizedText}</p>
            <button className={styles.button} onClick={() => setImgUrl(null)}>
              Scan again
            </button>
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
