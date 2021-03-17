import { useState } from "react"
import axios from 'axios';


const LoginForm =() => {
    const [username, setUsername] = useSate('');
    const [password, setPassword] = useState('');

    const handleSubmit = () => {

    }

    return (
        <div className ="wrapper">
            <div className="form">
                <h1 className ="title"> Chat Application</h1>
                <form onSubmit = {handleSubmit}>

                </form>
            </div>
        </div>
    );
}