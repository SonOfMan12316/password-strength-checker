import React from 'react';
import LanguageButton from './components/LanguageButton';
import './styles/index.css';
import PasswordCard from './components/PasswordCard';

const App: React.FC = () => {
  return (
    <div className='App'>
      <header className='App-header'>
        <LanguageButton />
        <PasswordCard />
      </header>
    </div>
  );
};

export default App;
