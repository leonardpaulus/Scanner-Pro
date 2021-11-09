import React, { ChangeEvent, useState } from 'react';
import styles from './ImageInput.module.css';

type ImageInputProps = {
  onImageUpload: (url: string) => void;
};

function ImageInput({ onImageUpload }: ImageInputProps): JSX.Element {
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files || event.target.files.length === 0) {
      return;
    }
    const file = event.target.files[0];
    const newImageURL = URL.createObjectURL(file);
    setImageUrl(newImageURL);
    onImageUpload(newImageURL);
  };

  return (
    <>
      <label className={styles.file_upload}>
        Upload a Photo
        <input type="file" accept="image/*" onChange={handleChange} />
        {imageUrl}
      </label>
    </>
  );
}

export default ImageInput;
