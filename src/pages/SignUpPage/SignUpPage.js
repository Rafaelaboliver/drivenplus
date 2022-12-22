import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
import { SignUpContainer, DataContainer, TextContainer } from './signUpPageCss'

export default function SignUpPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [cpf, setCPF] = useState('');
    const navigate = useNavigate();

    function createAccount(e) {
        e.preventDefault();
        const URL = 'https://mock-api.driven.com.br/api/v4/driven-plus/auth/sign-up';
        const body = { email: email, name: name, cpf: cpf, password: password };


        const promise = axios.post(URL, body);
        promise.then((res) => {
            alert('Cadastro realizado com sucesso!');
            console.log(res.data);
            navigate('/');
        });
        promise.catch((err) => {
            alert(err.response.data.message);
        });
    }

    return (
        <SignUpContainer>

            <DataContainer>
                <form onSubmit={createAccount}>
                    <input
                        id='name'
                        type='text'
                        value={name}
                        placeholder='Nome'
                        onChange={e => setName(e.target.value)}
                        required
                    />

                    <input
                        id='cpf'
                        type='text'
                        value={cpf}
                        placeholder='CPF'
                        onChange={e => setCPF(e.target.value)}
                        required
                    />

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


                    <button type='submit' >Cadastrar</button>
                </form>

                <TextContainer>
                    <Link to='/'>
                        <h3>Já tem uma conta? Faça login!</h3>
                    </Link>
                </TextContainer>
            </DataContainer>

        </SignUpContainer >
    )
}