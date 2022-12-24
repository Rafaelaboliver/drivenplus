import { SubscriptionsContainer, Header, PlansContainer, ScreePlans, Loading } from './SubscriptionsPageCss';
import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import UserInfoContext from '../../context/UserInfoContext';
import { Link } from 'react-router-dom';

export default function SubscriptionsPage() {
    const { token } = useContext(UserInfoContext);
    const [plansList, setPlansList] = useState(undefined);

    useEffect(() => {
        getList();
    }, []);

    function getList() {
        const URL = 'https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions/memberships';
        const body = {};
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        };

        const promise = axios.get(URL, config, body);
        promise.then((res) => {
            console.log(res.data);
            setPlansList(res.data);

        });
        promise.catch((err) => {
            console.log(err.response);
            const errMessage = (err.response.status);
            console.log('erro', errMessage);

            /*if (errMessage === 422) {
                (alert('Sessão expirada, faça login novamente'));
                navigate('/');
            };*/
        });
    }

    if (plansList === undefined) {
        return <Loading> <img src='https://uploaddeimagens.com.br/images/001/326/485/original/loading.gif?1520847880' alt='loading' /></Loading>
    }


    return (
        <SubscriptionsContainer>
            <Header>
                <h1>Escolha seu Plano</h1>
            </Header>


            <PlansContainer >
                {plansList.map(plans => (

                    <ScreePlans key={plans.id}>

                        <Link to={`/subscriptions/${plans.id}`}>

                            <img src={plans.image} alt='Plus Image' />
                            <h2>{plans.price}</h2>

                        </Link>

                    </ScreePlans>

                ))}
            </PlansContainer>



        </SubscriptionsContainer>
    )
}