import MessageForm from './MessageForm';
import MyMessage from './MyMessage';
import TheirMessage from './TheirMessage';

const ChatFeed =(props) => {
     // want to strcuture sth from props
     const { chats, activeChat, userName, messages } = props;
     // if chat exist, then find chats - activeChat
     const chat = chats && chats[activeChat];
     //  console.log(chat, userName, messages);
    
     const renderMessages = () => {
         const keys = Object.keys(messages);
         //console.log(keys);
         return keys.map((key, index) => {
             const message = messages[key];
             //check if its the last message: if it's 0 then null, else, 
             // make sure to find the last message 
             const lastMessageKey = index === 0 ? null : keys[index - 1]
             const isMyMessage = userName === message.sender.username;

             return (
                 <div key = {`msg_${index}`} style = {{width: '100%'}}>
                     <div className ="message-block">
                        {
                            isMyMessage
                            ? <MyMessage message={message}/>
                            : <TheirMessage message={message} 
                            lastMessage={messages[lastMessageKey]} />
                        }
                     </div>
                     <div className="read-receipts" style = {{marginRight: isMyMessage ? '18px': '0px', marginLeft: isMyMessage ? '0px': '68px'}}>
                     read-receipts
                     </div>
                 </div>
             );
         })
     }
    // to know the object key we use the method below:
     //renderMessages() // result:  ["44932", "44946"]

     if(!chat) return 'Loading......';
     // subtitle - `[add while space here] ${ person.person.username }`)}
    return (
        <div className="chat-feed">
            <div className ="chat-title-container">
                <div className ="chat-title">{chat?.title}</div>
                <div className="chat-subtitle">
                    
                    {chat.people.map((person ) => ` ${ person.person.username }`)}
                </div>
            </div>
            {renderMessages()}
            <div style={{height: '100px'}} />
            <div className="message-form-container">
                <MessageForm {...props} chatId ={activeChat} />
            </div>
        </div>
    );

}



export default ChatFeed;