import React from 'react';
import ClassNames from './App.module.scss';
import AppContainer from './Components/AppContainer/AppContainer';
import MessagesPanel from './Components/MessagesPanel/MessagesPanel';

function App() {
  return (
      <AppContainer>
          <MessagesPanel/>
      </AppContainer>
  );
}

export default App;
