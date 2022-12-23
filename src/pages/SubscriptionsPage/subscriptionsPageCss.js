import styled from "styled-components";

export const SubscriptionsContainer = styled.div`
display: flex;
flex-direction: column;
margin: auto;
width: 375px;
background-color: #000;
`
export const Header = styled.div`
width: 275px;
margin: 30px auto 0px;
h1{
    font-size: 32px;
    font-family: Roboto;
    font-weight: 700;
    color: #fff;
}
`
export const PlansContainer = styled.div`
width: 300px;
height: 100vh;
margin: 24px auto 0px;
display: flex;
flex-direction: column;
`
export const ScreePlans = styled.div`
width: 290px;
height: 180px;
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
border-radius: 12px;
border: 3px solid #7e7e7e;
margin-top: 15px;
img{
    width: 140px;
    height: 95px;
}
h2{
    font-size: 24px;
    font-family: Roboto;
    font-weight: 700;
    color: #fff;
    margin-left: 10px;
    margin-top: 40px;
    margin-left: 20px;
}
a{
    color: black;
    display: flex;
}
`
export const Loading = styled.div`
margin: 0 auto;
width: 800px;
height: 800px;
`