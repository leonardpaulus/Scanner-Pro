import React, { useState, useEffect } from 'react';
import styles from './DocPreview.module.css';
import getDocuments from './getDocuments';

type DocumentProps = {
  title: string;
  text: string;
  id: number;
};

export default function DocPreview(): JSX.Element {
  const [documents, setDocuments] = useState<null | DocumentProps[]>(null);

  useEffect(() => {
    async function load() {
      const newDocuments = await getDocuments();
      setDocuments(newDocuments);
    }
    load();
  }, []);

  return (
    <>
      {documents &&
        documents.map((document: DocumentProps) => (
          <article
            className={styles.docpreview__singledocument}
            key={document.id}
          >
            <h2>{document.title}</h2>
            <span className={styles.preview}>{document.text}</span>
          </article>
        ))}
    </>
  );
}
