import MessageingApp from  './components/messageingApp/messagingApp';
import AccountProvider from './context/AccountProvider';
import TemplateProvider from './theme/TemplateProvider';
import UserProvider from './context/UserProvider';

function App() {
    return (
        <TemplateProvider>
            <UserProvider>
                <AccountProvider>
                    <MessageingApp />
                </AccountProvider>
            </UserProvider>
        </TemplateProvider>
    
  );
}

export default App;
