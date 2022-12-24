import { SubscriptionUnitContainer, Header, PlanInformation, Logo, Benefits, BenefitsText, PriceBox, PriceBoxHeader, PaymentData, UpperBoxes, LowerBoxes, Loading } from './SubscriptionIdCss';
import UserInfoContext from '../../context/UserInfoContext';
import { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link, useNavigate } from 'react-router-dom';
import PlanConfirm from '../../components/PlanConfirm/PlanConfirm'

export default function SubscriptionId() {
  
    const [displayConfirmation, setDisplayConfirmation] = useState(false);
    const [displaySubscriptions, setDisplaySubscriptions] = useState(true);
    const { token, planBenefit, setPlanBenefit, name, setName, cardNumber, setCardNumber, securityCode, setSecurityCode, expDate, setExpDate, setOrderDetail } = useContext(UserInfoContext);
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
            console.log('PLANBENEFIT', res.data);
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

    function confirmationMessage(e) {
        e.preventDefault();
        setDisplaySubscriptions(false);
        setDisplayConfirmation(true);
    }




    function buyPlan() {

        const URL = 'https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions';
        const body = {
            membershipId: planBenefit.id,
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
            alert('Obrigada pela preferência, desfrute do seu plano!');
            navigate('/home');
            setOrderDetail(res.data);

            const userOrder = JSON.stringify(res.data);
            localStorage.setItem('userOrder', userOrder);
            

        });
        promise.catch((err) => {
            console.log(err.response.data);
            alert('Verifique seus dados e tente novamente!', err.response.message)
        });
    }

    return (
        <SubscriptionUnitContainer>
            {displayConfirmation && (
                <PlanConfirm
                    setDisplayConfirmation={setDisplayConfirmation}
                    setDisplaySubscriptions={setDisplaySubscriptions}
                    buyPlan={buyPlan}
                    planBenefit={planBenefit} />
            )}

            {displaySubscriptions === true ? (
                <>
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
                        <form onSubmit={confirmationMessage}>
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
                </>
            ) : (null)}

        </SubscriptionUnitContainer>
    )
}