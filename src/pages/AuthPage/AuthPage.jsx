import React, {useState} from 'react';
import SignUpForm from "../../components/SignUpForm";
import LoginForm from "../../components/LoginForm";
import '../../styles/auth.css';
import image1 from '../../assets/venus.jpg';


const AuthPage = ({ setUser }) => {
const [createAccount, setCreateAccount] = useState(false);


return (
    <main className="auth-container">
        <div className="forms-container">
       
       <div className="forms">
            <div className="forms-header">
                <h1>Jotter</h1>
            </div>
            { !createAccount ? 
            ( <> <LoginForm setUser={setUser} />  <button className="create-button" type="button" onClick={(()=> setCreateAccount(!createAccount))}>Create account</button> </> ) :  <SignUpForm setUser={setUser} /> }
           
            
        </div>
       
       
        <div className="image">
            <div className="text">
            <p>Thoughts are important,</p>
            <p>note them down.</p>
            </div>

        </div>
        </div>
    </main>
);
};

export default AuthPage;


