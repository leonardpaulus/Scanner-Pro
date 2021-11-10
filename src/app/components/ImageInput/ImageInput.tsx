import React, { ChangeEvent } from 'react';
import styles from './ImageInput.module.css';

type ImageInputProps = {
  onImageUpload: (url: string) => void;
};

function ImageInput({ onImageUpload }: ImageInputProps): JSX.Element {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files || event.target.files.length === 0) {
      return;
    }
    const file = event.target.files[0];
    const newImageURL = URL.createObjectURL(file);
    onImageUpload(newImageURL);
  };

  return (
    <>
      <label className={styles.file_upload}>
        <div className={styles.button}>Upload a Photo</div>
        <input type="file" accept="image/*" onChange={handleChange} />
      </label>
    </>
  );
}

export default ImageInput;
