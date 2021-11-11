import Tesseract from 'tesseract.js';

export type RecognizeProgress = {
  progress: number;
};
type OnProgress = ({ progress }: RecognizeProgress) => void;

export async function recognizeText(
  url: string,
  onProgress: OnProgress
): Promise<string> {
  const result = await Tesseract.recognize(url, 'eng', {
    logger: (message) => {
      onProgress({
        progress: message.progress,
      });
    },
  });
  return result.data.text;
}
