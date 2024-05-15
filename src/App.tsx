import React from 'react';
import LanguageButton from './components/LanguageButton';
import './styles/index.css';

const App: React.FC = () => {
  return (
    <div className='App'>
      <header className='App-header'>
        <LanguageButton />
      </header>
    </div>
  );
};

export default App;
