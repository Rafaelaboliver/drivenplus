import styled from "styled-components";

export const ConfirmationContainer = styled.div`
display: flex;
flex-direction: column;
margin: auto;
width: 375px;
height: 100vh;
background-color: #000;
opacity: 0.7;
`
export const ExitIcon = styled.div`
width:375px;
height: 30px;
align-items: center;
ion-icon{
    margin-right: 20px;
    margin-top: 25px;
    width: 28px;
    height: 25px;
}

`
export const BoxConfirmation = styled.div`
width: 248px;
height: 210px;
display: flex;
flex-direction: column;
border-radius: 12px;
background-color: #fff;
margin: auto;
text-align: center;
justify-content: center;
p{
    margin: 33px auto 0px;
    color: #0000;
    width: 204px;
    height: 67px;
    font-size: 18px;
    font-family: Roboto;
    font-weight: 700;
}
`
export const ButtonsConfirmation = styled.div`
width: 200px;
height: 52px;
display: flex;
flex-direction: row;
justify-content: space-between;
`
export  const NoButton = styled.button`
width: 95px;
height: 52px;
border-radius: 8px;
border-style: none;
color: #fff;
background-color: #cecece;
font-size: 14px;
font-weight: 700;
font-family: Roboto;
`
export  const YesButton = styled.button`
width: 95px;
height: 52px;
border-radius: 8px;
border-style: none;
color: #fff;
background-color: #ff4791;
font-size: 14px;
font-weight: 700;
font-family: Roboto;
`
