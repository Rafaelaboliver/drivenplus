import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
import {SignUpContainer, DataContainer, TextContainer } from './signUpPageCss'

export default function SignUpPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [cpf, setCPF] = useState('');
    const navigate = useNavigate();

    return (
        <SignUpContainer>

            <DataContainer>
                <form >
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