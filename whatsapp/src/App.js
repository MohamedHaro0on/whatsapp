import React from 'react';
import AppContainer from './Components/AppContainer/AppContainer';
import MessagesPanel from './Components/MessagesPanel/MessagesPanel';
import ContactsData from './Context/Context';

function App() {
  return (
      <AppContainer>
        <ContactsData>
          <MessagesPanel/>
        </ContactsData>
      </AppContainer>
  );
}

export default App;