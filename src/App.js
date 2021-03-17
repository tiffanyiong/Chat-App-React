import { ChatEngine } from 'react-chat-engine';

import ChatFeed from './components/ChatFeed';
import './App.css';

const App = () => {
    return(
        <ChatEngine
            height="100vh"
            projectID="d7ffa5f0-976b-4f4c-bb47-bc823aa2aada"
            userName="tiffanyiong"
            userSecret="123456"
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps}
            /> }
        />
    )
}

export default App;