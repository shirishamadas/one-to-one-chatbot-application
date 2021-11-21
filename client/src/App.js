import MessageingApp from  './components/messageingApp/messagingApp';
import AccountProvider from './context/AccountProvider';

function App() {
  return (
    <AccountProvider>
      <MessageingApp />
    </AccountProvider>
  );
}

export default App;
