import styled from "styled-components";

export const HomeContainer = styled.div`
display: flex;
flex-direction: column;
margin: auto;
width: 375px;
height: 100%;
background-color: #000;
`
export const Header = styled.div`
width: 375px;
height: 55px;
display: flex;
flex-direction: row;
justify-content: space-between;
padding: 30px 27px 0px;
`
export const LogoImg = styled.div`
display: flex;
img{
    width: 74px;
    height: 50px;
}
`
export const UserImg = styled.div`
display: flex;
img{
    width: 34px;
    height: 34px;
    border-radius: 30px;
}
`
export const WelcomeBox = styled.div`
width: 300px;
display: flex;
flex-direction: column;
margin: 50px auto 0px;
p{
    font-size: 24px;
    font-family: Roboto;
    font-weight: 700;
    color: #fff;
    margin: 0px auto 55px;
}
button{
    width: 300px;
    height: 52px;
    margin-top:8px;
    border-radius: 8px;
    text-align: center;
    justify-content: center;
    border-style:none;
    background-color: #ff4791;
    color: #fff;
    font-family: Roboto;
    font-size: 14px;
    font-weight: 700;
}
`
export const FooterBox = styled.div`
margin: 250px auto 8px;
width: 300px;
display: flex;
flex-direction: column;
`
export const ChangePlan = styled.button`
width: 300px;
height: 52px;
margin-top:8px;
border-radius: 8px;
text-align: center;
justify-content: center;
border-style:none;
background-color: #ff4791;
color: #fff;
font-family: Roboto;
font-size: 14px;
font-weight: 700;
`
export const CancelPlan = styled.button`
width: 300px;
height: 52px;
margin-top:8px;
border-radius: 8px;
text-align: center;
justify-content: center;
border-style:none;
background-color: #ff4747;
color: #fff;
font-family: Roboto;
font-size: 14px;
font-weight: 700;
`