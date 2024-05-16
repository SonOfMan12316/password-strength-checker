import { USFlag, FranceFlag } from '../components/icons';

const LanguageButton = () => {
  const style = {
    marginRight: '5px',
  };

  return (
    <div className='px-2 lg:px-8 py-2 bg-gray-500 h-10 flex items-center justify-between'>
      <div className='text-sm text-white'>Password Checker</div>
      <div className='text-white flex items-center text-sm cursor-pointer' style={style}>
        <USFlag />
        English
      </div>
      <div className='text-white flex  items-center text-sm cursor-pointer' style={style}>
        <FranceFlag />
        French
      </div>
    </div>
  );
};

export default LanguageButton;
