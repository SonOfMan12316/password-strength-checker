import React from 'react';
import { LanguageButton, PasswordCard, ScoreBar, TimeCard, StatsTable } from './components';
import './styles/index.css';

const App: React.FC = () => {
  return (
    <div className='App'>
      <header className='App-header'>
        <LanguageButton />
        <PasswordCard />
        <ScoreBar />
        <TimeCard />
        <StatsTable />
      </header>
    </div>
  );
};

export default App;
