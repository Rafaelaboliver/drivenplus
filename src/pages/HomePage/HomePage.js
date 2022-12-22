import { HomeContainer, Header, LogoImg, UserImg, WelcomeBox, FooterBox,  ChangePlan, CancelPlan} from "./homePageCss";
import PlanLogo from '../../assets/PlusUser.png'


export default function HomePage() {
    return (
        <HomeContainer>
            <Header>
                <LogoImg>
                    <img src={PlanLogo} alt='Logo Image'/>
                </LogoImg>
                <UserImg>
                    <img src='https://static.vecteezy.com/ti/vetor-gratis/t2/550980-de-icone-de-usuario-gratis-vetor.jpg' alt='User Image'/>
                </UserImg>
            </Header>

            <WelcomeBox>
                <p>Olá, fulano</p>

                <button>Solicitar brindes</button>
                <button>Materiais bônus de web</button>
            </WelcomeBox>

            <FooterBox>
                <ChangePlan>Mudar plano</ChangePlan>
                <CancelPlan>Cancelar plano</CancelPlan>
            </FooterBox>
        </HomeContainer>

    )
}