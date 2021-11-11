import { RecognizeProgress, recognizeText } from './ocr';
import { useState } from 'react';

export default function useRecognizeText(imgUrl: string) {
  const [text, setText] = useState<string | null>(null);
  const [progress, setProgress] = useState<RecognizeProgress | null>(null);

  const recognize = () => {
    recognizeText(imgUrl, setProgress).then(setText);
  };

  return { text, progress, recognize };
}
