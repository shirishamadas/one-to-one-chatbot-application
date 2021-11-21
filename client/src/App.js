import MessageingApp from  './components/messageingApp/messagingApp';
import AccountProvider from './context/AccountProvider';
import TemplateProvider from './theme/TemplateProvider';

function App() {
    return (
      <TemplateProvider>
          <AccountProvider>
              <MessageingApp />
          </AccountProvider>
      </TemplateProvider>
    
  );
}

export default App;
