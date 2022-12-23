import styled from "styled-components";

export const SubscriptionUnitContainer = styled.div`
display: flex;
flex-direction: column;
margin: auto;
width: 375px;
background-color: #000;
`
export const Header = styled.div`
width: 30px;
height: 25px;
margin-top: 25px ;
margin-left: 22px;
ion-icon{
    width: 28px;
    height: 32px;
    color: #fff;
}
`
export const Logo = styled.div`
display: flex;
flex-direction: column;
margin: 36px auto 0px;
img{
    width: 140px;
    height: 95px;
}
h1{
    font-size: 32px;
    font-family: Roboto;
    font-weight: 700;
    color: #fff;
    margin-top: 10px;
}
`
export const PlanInformation = styled.div`
display: flex;
flex-direction: column;
margin: 22px auto 0px;
width:300px;
`
export const Benefits = styled.div`
display: flex;
flex-direction: row;
margin-bottom: 10px;
margin-top: 10px;
width:300px;
ion-icon{
    width: 16px;
    height: 16px;
    color: #ff4791;
}
h4{
    font-family: Roboto;
    font-size: 16px;
    font-weight: 400;
    margin-left: 5px;
    color: #fff;
}
`
export const BenefitsText = styled.div`
display: flex;
flex-direction: column;
p{
    font-family: Roboto;
    font-size: 14px;
    font-weight: 400;
    color: #fff;
    margin-bottom: 5px;
}
`
export const PriceBox = styled.div`
display: flex;
flex-direction: column;
width:300px;
margin-top: 10px;
p{
    font-family: Roboto;
    font-size: 14px;
    font-weight: 400;
    color: #fff;
}

`
export const PaymentData = styled.div`
display: flex;
flex-direction: column;
width: 300px;
margin: 34px auto 0px;
button{
    width: 300px;
    height: 52px;
    border-radius: 8px;
    color: #fff;
    background-color: #ff4791;
    margin: 12px auto 34px;
}
`
export const PriceBoxHeader = styled.div`
display: flex;
flex-direction: row;
margin-bottom: 10px;
width:300px;
ion-icon{
    width: 16px;
    height: 16px;
    color: #ff4791;

}
h4{
    font-family: Roboto;
    font-size: 16px;
    font-weight: 400;
    margin-left: 5px;
    color: #fff;
}
`
export const UpperBoxes = styled.div`
display: flex;
flex-direction: column;
margin: 35px auto 0px;
width:300px;
input{
    width: 300px;
    height: 52px;
    border-radius: 8px;
    border-style: none;
    background-color: #fff;
    font-size: 14px;
    font-family: Roboto;
    margin-bottom: 10px;
    ::placeholder{
        color: #7e7e7e;
        font-size: 14px;
        font-weight: 400;
    }
}
`
export const LowerBoxes = styled.div`
display: flex;
flex-direction: row;
margin: 0px auto 0px;
width:300px;
justify-content: space-between;
input{
    width: 145px;
    height: 52px;
    border-radius: 8px;
    border-style: none;
    background-color: #fff;
    font-size: 14px;
    font-family: Roboto;
    ::placeholder{
        color: #7e7e7e;
        font-size: 14px;
        font-weight: 400;
    }
}
`
export const Loading = styled.div`
width: 500px;
height: 500px;
margin: auto;
`