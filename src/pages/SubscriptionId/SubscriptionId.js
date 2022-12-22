import { SubscriptionUnitContainer, Header, PlanInformation, Benefits, BenefitsText, PriceBox, PriceBoxHeader, PaymentData, UpperBoxes, LowerBoxes } from './SubscriptionIdCss';
import Logo from '../../assets/LoginPage.png';
import { UserInfoContext } from '../../context/UserInfoContext';
import { useState, useContext } from 'react';


export default function SubscriptionId() {
    const [name, setName] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const [securityCode, setSecurityCode] = useState('');
    const [expDate, setExpDate] = useState('');
    return (
        <SubscriptionUnitContainer>
            <Header>
                <ion-icon name="arrow-back-outline"></ion-icon>
            </Header>

            <Logo>
                <img src={Logo} />
                <h1>Driven Plus</h1>
            </Logo>

            <PlanInformation>
                <Benefits>
                    <ion-icon name="id-card-outline"></ion-icon>
                    <h4>Benefícios:</h4>
                </Benefits>

                <BenefitsText>
                    <p>1. Brindes exclusivos</p>
                    <p>2. Materiais bônus de web</p>
                </BenefitsText>

                <PriceBox>
                    <PriceBoxHeader>
                        <ion-icon name="cash-outline"></ion-icon>
                        <h4>Preço:</h4>
                    </PriceBoxHeader>
                    <p>R$ 39,99 cobrados mensalmente</p>
                </PriceBox>
            </PlanInformation>

            <PaymentData>
                <UpperBoxes>
                    <input
                        id='name'
                        type='text'
                        value={name}
                        placeholder='Nome impresso no cartão'
                        onChange={e => setName(e.target.value)}
                        required
                    />
                    <input
                        id='cardNumber'
                        type='number'
                        value={cardNumber}
                        placeholder='Digitos do cartão'
                        onChange={e => setCardNumber(e.target.value)}
                        required
                    />
                </UpperBoxes>

                <LowerBoxes>
                    <input
                        id='securityCode'
                        type='number'
                        value={securityCode}
                        placeholder='Código de segurança'
                        onChange={e => setSecurityCode(e.target.value)}
                        required
                    />
                    <input
                        id='expDate'
                        type='number'
                        value={expDate}
                        placeholder='Validade'
                        onChange={e => setExpDate(e.target.value)}
                        required
                    />
                </LowerBoxes>

                <button type='submit'>ASSINAR</button>
            </PaymentData>

        </SubscriptionUnitContainer>
    )
}