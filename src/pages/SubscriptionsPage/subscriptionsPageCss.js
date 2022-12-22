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
export const PlusSubscription = styled.div`
width: 290px;
height: 180px;
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
border-radius: 12px;
border: 3px solid #7e7e7e;
img{
    width: 140px;
    height: 95px;
}
h2{
    font-size: 24px;
    font-family: Roboto;
    font-weight: 700;
    color: #fff;
}
`
export const GoldSubscription = styled.div`
width: 290px;
height: 180px;
display: flex;
flex-direction: row;
align-items: center;
margin-top: 10px;
justify-content: center;
border-radius: 12px;
border: 3px solid #7e7e7e;
img{
    width: 140px;
    height: 95px;
}
h2{
    font-size: 24px;
    font-family: Roboto;
    font-weight: 700;
    color: #fff;
}
`
export const PlatinumSubscription = styled.div`
width: 290px;
height: 180px;
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
margin-top: 10px;
border-radius: 12px;
border: 3px solid #7e7e7e;
img{
    width: 140px;
    height: 95px;
}
h2{
    font-size: 24px;
    font-family: Roboto;
    font-weight: 700;
    color: #fff;
}
`