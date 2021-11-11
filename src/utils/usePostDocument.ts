import { useState } from 'react';

export default function postDocument() {
  const [isLoading, setIsLoading] = useState(false);

  const postDocument = async (document: { text: string; title: string }) => {
    setIsLoading(true);
    await fetch('https://json-server.machens.dev/docs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(document),
    });
    setIsLoading(false);
  };

  return { postDocument, isLoading };
}
