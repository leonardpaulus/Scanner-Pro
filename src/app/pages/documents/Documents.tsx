import React from 'react';
import styles from './Documents.module.css';
import DocPreview from '../../components/DocPreview/DocPreview';
import ImageInput from '../../components/ImageInput/ImageInput';

export default function Documents() {
  return (
    <div className={styles.documentsPage}>
      <h1>Documents</h1>
      <div className={styles.docpreview__container}>
        <DocPreview />
      </div>
      <ImageInput onImageUpload={console.log} />
    </div>
  );
}
