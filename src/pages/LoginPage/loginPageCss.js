import styled from "styled-components"

export const LoginContainer = styled.div`
display: flex;
flex-direction: column;
margin: auto;
width: 375px;
height: 100vh;
background-color: #000;
img{
    width: 300px;
    height: 50px;
    margin: 134px auto 0px;
}
`

export const DataContainer = styled.div`
width: 305px;
margin: auto;
display: flex;
margin: auto;
flex-direction: column;
input{
    width: 303px;
    height: 45px;
    margin-top: 15px;
    border-radius: 5px;
    border: 1px solid #d4d4d4;
    background-color: #fff;
    font-size: 14px;
    font-family: Roboto;
    ::placeholder{
        color: #7e7e7e;
        font-size: 14px;
        font-weight: 400;
    }
}
button{
    width: 303px;
    height:45px;
    background-color: #ff4791;
    margin: 20px auto 0px;
    border-radius: 5px;
    border-style: none;
    color: #fff;
    font-family: Roboto;
    font-weight: 700;
    font-size: 18px;
    text-align: center;
}
`

export const TextContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin-bottom: 130px;

h3{
    font-size: 14px;
    font-family: Roboto;
    font-weight: 400;
    align-items: center;
    color: #fff;
}
a{
        color: #fff;
    }
`