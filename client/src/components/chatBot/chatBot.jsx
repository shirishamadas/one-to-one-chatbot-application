import ContactList from '../contactList/contactList';
import Conversation from '../conversationComponent/conversationComponent'
function ChatBot(){
    return (
        <div>
            <ContactList />
            <Conversation />
        </div>
    )
}

export default ChatBot;