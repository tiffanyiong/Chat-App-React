import { useState } from "react"
import axios from 'axios';


const LoginForm =  () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {    //you can't use await without async
        e.preventDefault();

        const authObject = {'Project-ID': "d7ffa5f0-976b-4f4c-bb47-bc823aa2aada", 'User-Name': username, 
                            'User-Secret': password};
               
        //try to get user:
        try {
            // make request
            //username | passord => chatengine -> give messages
            await axios.get('https://api.chatengine.io/chats', { headers: authObject });

            //keep the acct so you don't have to login every time 
            localStorage.setItem('username', username);
            localStorage.setItem('password', password);


            //works out -> logged in

            window.location.reload(); //load sth differently
    
      
        }catch (error) { 
              // error -> try with new username ...
              setError('Oops, incorrect credentials.')
         }
    }

    return (
        <div className ="wrapper">
            <div className="form">
                <h1 className ="title"> Chat Application</h1>
                <form onSubmit = {handleSubmit}>
                    <input type= "text" value={username} onChange={(e) => setUsername(e.target.value)} 
                                className="input" placeholder="Username" required/>
                    <input type= "password" value={password} onChange={(e) => setPassword(e.target.value)} 
                                className="input" placeholder="Passward" required/>  
                    <div align="center">
                        <button type="submit" className="button">
                            <span> Start chatting</span>
                        </button>
                        <h2 className="error">{error}</h2>
                        </div>                      

                </form>
            </div>
        </div>
    );
}

export default LoginForm;