import React from 'react';
import { USFlag, FranceFlag } from '../components/icons';
import { useStore } from '../store';

const LanguageButton: React.FC = () => {
  const style = {
    marginRight: '5px',
  };
  const editLocal = useStore((state) => state.editLocal);
  const updateLocal = (local: string) => {
    editLocal(local);
  };

  return (
    <div className='px-6 lg:px-8 py-2 bg-gray-500 h-10 flex items-center justify-between'>
      <div className='text-sm text-white'>Password Checker</div>
      <div className='flex items-center'>
        <div
          onClick={() => updateLocal('en')}
          className='text-white flex items-center text-sm cursor-pointer'
          style={style}
        >
          <USFlag />
          English
        </div>
        <div
          onClick={() => updateLocal('fr')}
          className='text-white flex  items-center text-sm cursor-pointer'
          style={style}
        >
          <FranceFlag />
          French
        </div>
      </div>
    </div>
  );
};

export default LanguageButton;
