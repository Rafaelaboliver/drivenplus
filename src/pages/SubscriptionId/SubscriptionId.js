import { SubscriptionUnitContainer, Header, PlanInformation, Logo, Benefits, BenefitsText, PriceBox, PriceBoxHeader, PaymentData, UpperBoxes, LowerBoxes, Loading } from './SubscriptionIdCss';
import logo from '../../assets/LoginPage.png';
import { UserInfoContext } from '../../context/UserInfoContext';
import { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link, Navigate, useNavigate } from 'react-router-dom';




export default function SubscriptionId() {
    const [name, setName] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const [securityCode, setSecurityCode] = useState('');
    const [expDate, setExpDate] = useState('');
    const [planBenefit, setPlanBenefit] = useState(undefined);
    const { token } = useContext(UserInfoContext);
    const { idPlano } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        getDetailedList();
    }, []);

    function getDetailedList() {
        const URL = `https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions/memberships/${idPlano}`;
        const body = {};
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        };

        const promise = axios.get(URL, config, body);
        promise.then((res) => {
            console.log(res.data);
            setPlanBenefit(res.data);

        });
        promise.catch((err) => {
            console.log(err.response);
            const errMessage = (err.response.status);
            console.log('erro', errMessage);


        });
    }

    if (planBenefit === undefined) {
        return <Loading> <img src='https://uploaddeimagens.com.br/images/001/326/485/original/loading.gif?1520847880' alt='loading' /></Loading>
    }

    function buyPlan(e) {
        e.preventDefault();
        const membershipId = planBenefit.id;

        const URL = 'https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions';
        const body = {
            membershipId: membershipId,
            cardName: name,
            cardNumber: cardNumber,
            securityNumber: securityCode,
            expirationDate: expDate
        };
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        };

        const promise = axios.post(URL, body, config);
        promise.then((res) => {
            console.log(res.data);
            navigate('/home');
            
        });
        promise.catch((err) => {
            console.log(err.response.data);
            alert('Verifique seus dados e tente novamente!', err.response.message)
        });
    }


    return (
        <SubscriptionUnitContainer>
            <Link to='/subscriptions'>
                <Header>
                    <ion-icon name="arrow-back-outline"></ion-icon>
                </Header>
            </Link>

            <Logo>
                <img src={planBenefit.image} />
                <h1>{planBenefit.name}</h1>
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
                    <p>R${planBenefit.price} cobrados mensalmente</p>
                </PriceBox>
            </PlanInformation>





            <PaymentData>
                <form onSubmit={buyPlan}>
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
                            type='text'
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
                            type='text'
                            value={expDate}
                            placeholder='Validade'
                            onChange={e => setExpDate(e.target.value)}
                            required
                        />
                    </LowerBoxes>

                    <button type='submit'>ASSINAR</button>
                </form>
            </PaymentData>

        </SubscriptionUnitContainer>
    )
}