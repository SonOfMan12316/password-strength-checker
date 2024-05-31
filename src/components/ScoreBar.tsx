import React, { useEffect, useState } from 'react';
import { useStore } from '../store';
import '../styles/progressbar.css';

const ScoreBar = () => {
  const [style, setStyle] = useState({ opacity: 0, width: '0%' });
  const { Score, Percent, ScoreMax } = useStore((state) => state.getResume());

  useEffect(() => {
    const newStyle = {
      opacity: 1,
      width: `${Percent}%`,
    };
    setStyle(newStyle);
  }, [Percent]);

  return (
    <div className='px-6 lg:px-8 flex flex-col justify-center w-10/12 lg:w-9/12 mx-auto'>
      <div className='progress w-full mx-6'>
        <div className='progress-done' style={style}>
          <div
            style={{ color: '#9C27B0' }}
            className='bg-white p-0.5 rounded percentage text-center text-xs mx-10'
          >
            {Percent}%
          </div>
        </div>
      </div>
      <h1 className='text-center'>
        {Math.round(Score)} / {ScoreMax}
      </h1>
    </div>
  );
};

export default ScoreBar;
