import styled from "styled-components"

export const SignUpContainer = styled.div`
display: flex;
flex-direction: column;
margin: auto;
width: 375px;
height: 100vh;
background-color: #000;
`
export const DataContainer = styled.div`
max-width: 303px;
margin: 150px auto 0px;
display: flex;
flex-direction: column;
input{
    width: 303px;
    height: 45px;
    margin-top: 16px;
    border-radius: 5px;
    border: 1px solid #d4d4d4;
    background-color: #fff;
    font-size: 14px;
    font-family: Roboto;
    ::placeholder{
        color: #7e7e7e;
    }
}
button{
    width: 303px;
    height:45px;
    background-color: #ff4791;
    margin: 6px auto 0px;
    border-radius: 5px;
    border-style: none;
    color: #fff;
    font-family: Roboto;
    font-weight: 400;
    font-size: 20px;
    text-align: center;
    margin-top: 25px;
}
`

export const TextContainer = styled.div`
display: flex;
justify-content: center;

h3{
    font-size: 14px;
    font-family: Roboto;
    font-weight: 400;
    align-items: center;
    margin-top: 25px;
    color: #fff;
}

a{
        color: #fff;
    }
`