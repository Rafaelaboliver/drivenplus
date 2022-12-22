import { SubscriptionsContainer, Header, PlansContainer, PlusSubscription, GoldSubscription, PlatinumSubscription } from './subscriptionsPageCss';
import PlusUser from '../../assets/PlusUser.png';
import GoldUser from '../../assets/GoldUser.png';
import PlatinumUser from '../../assets/PlatinumUser.png';

export default function SubscriptionsPage() {
    return (
        <SubscriptionsContainer>
            <Header>
                <h1>Escolha seu Plano</h1>
            </Header>


            <PlansContainer>

                <PlusSubscription>
                    <img src={PlusUser} alt='Plus Image'/>
                    <h2>R$39,90</h2>
                </PlusSubscription>

                <GoldSubscription>
                    <img src={GoldUser} alt='Gold Image'/>
                    <h2>R$69,90</h2>
                </GoldSubscription>

                <PlatinumSubscription>
                    <img src={PlatinumUser} alt='Platinum Image'/>
                    <h2>R$99,90</h2>
                </PlatinumSubscription>

            </PlansContainer>

        </SubscriptionsContainer>
    )
}