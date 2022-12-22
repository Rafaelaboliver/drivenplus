import { LoginContainer, TextContainer, DataContainer } from './loginPageCss';
import { useState, useContext } from 'react';
//importar o arquivo do context
import axios from 'axios';
import { Link } from 'react-router-dom';
import LoginImage from '../../assets/LoginPage.png'

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <LoginContainer>
            <img src={LoginImage} alt='logo' />

            <DataContainer>
                <form >
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
                <h3>Não tem conta? Cadastre-se!</h3>
            </TextContainer>
        </LoginContainer>
    )
}