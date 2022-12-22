import { LoginContainer, TextContainer, DataContainer } from './loginPageCss';
import { useState, useContext } from 'react';
//importar o arquivo do context
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import LoginImage from '../../assets/LoginPage.png'
import { UserInfoContext } from '../../context/UserInfoContext';

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {setToken} = useContext(UserInfoContext)
    const navigate = useNavigate();

    function loginDriven (e) {
        e.preventDefault();

        const URL = 'https://mock-api.driven.com.br/api/v4/driven-plus/auth/login';
        const body = { email: email, password: password };


        const promise = axios.post(URL, body);
        promise.then((res) => {
            console.log(res.data);
            setToken(res.data.token);
            const userData = JSON.stringify(res.data);

            localStorage.setItem('userData', userData)

            if (res.data.membership === null) {
                navigate('/subscriptions');
            } else {
                navigate('/home');
            }
            
        });
        promise.catch((err) => {
            alert(err.response.data.message);
        });

    }

    return (
        <LoginContainer>
            <img src={LoginImage} alt='logo' />

            <DataContainer>
                <form onSubmit={loginDriven}>
                    <input
                        id='email'
                        type='email'
                        value={email}
                        placeholder='E-mail'
                        onChange={e => setEmail(e.target.value)}
                        required
                    />

                    <input
                        id='password'
                        type='password'
                        value={password}
                        placeholder='Senha'
                        onChange={e => setPassword(e.target.value)}
                        required
                    />

                    <button type='submit'>ENTRAR</button>
                </form>
            </DataContainer>

            <TextContainer>
                <Link to='/sign-up'>
                    <h3>Não tem conta? Cadastre-se!</h3>
                </Link>
            </TextContainer>
        </LoginContainer>
    )
}