import { HomeContainer, Header, LogoImg, UserImg, WelcomeBox, FooterBox, ChangePlan, CancelPlan } from "./homePageCss";
import { UserInfoContext } from '../../context/UserInfoContext';
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";


export default function HomePage() {
    const { token, planBenefit, name, cardNumber, securityCode, expDate, membershipId } = useContext(UserInfoContext);
    const navigate = useNavigate();

    function changePlan() {
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
            alert('Solicitação recebida!')
        });
        promise.catch((err) => {
            alert(err.response.data.message);
        });
    };

    function cancelPlan() {
        const URL = `https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions`;
        const body = {};
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        };


        const promise = axios.delete(URL, config, body);
        promise.then((res) => {
            const success = res.status;

            if (success === 204) {
                alert('Plano cancelado com sucesso!');
                navigate('/subscriptions');
            }

        });
        promise.catch((err) => {
            alert('Erro ao cancelar o plano, tente novamente!');
        });
    }
    return (
        <HomeContainer>
            <Header>
                <LogoImg>
                    <img src={planBenefit.image} alt='Logo Image' />
                </LogoImg>
                <UserImg>
                    <img src='https://static.vecteezy.com/ti/vetor-gratis/t2/550980-de-icone-de-usuario-gratis-vetor.jpg' alt='User Image' />
                </UserImg>
            </Header>

            <WelcomeBox>
                <p>Olá, {name}</p>

                {planBenefit.perks.map((p) => (

                    <Link key={p.id} to={p.link}>
                        <button>{p.title}</button>
                    </Link>

                ))}


            </WelcomeBox>

            <FooterBox>
                <ChangePlan onClick={() => changePlan()}>Mudar plano</ChangePlan>
                <CancelPlan onClick={() => cancelPlan()}>Cancelar plano</CancelPlan>
            </FooterBox>
        </HomeContainer>

    )
}