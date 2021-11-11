import React from 'react';
import { RecognizeProgress } from '../../../utils/ocr';
import CircularProgressWithLabel from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

function Progress({ progress }: RecognizeProgress): JSX.Element {
  return (
    <Box
      sx={{
        position: 'relative',
        display: 'inline-flex',
        color: '#326771',
        fontFamily: 'Montserrat',
        fontWeight: '500',
      }}
    >
      <CircularProgressWithLabel
        variant={'determinate'}
        value={progress}
        sx={{
          color: '#42d9c8',
        }}
        size={60}
        {...progress}
      />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {Math.round(progress)}%
      </Box>
    </Box>
  );
}
export default Progress;

/* function Progress({ status, progress }: RecognizeProgress): JSX.Element {


  return (
    <aside className={styles.container}>
      {status}
      <progress value={progress * 100} max={100} />
    </aside>
  );
}

export default Progress; */
