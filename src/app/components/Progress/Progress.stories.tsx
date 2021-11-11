import React from 'react';
import Progress from './Progress';

export default {
  component: Progress,
  title: 'Components/Progress',
};

export const Initializing = () => <Progress progress={50} />;

export const Done = () => <Progress progress={100} />;

export const Begin = () => <Progress progress={0} />;
