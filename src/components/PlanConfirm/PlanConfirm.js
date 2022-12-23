import {ConfirmationContainer,ExitIcon, BoxConfirmation, ButtonsConfirmation, NoButton, YesButton} from './planConfirmCss';


export default function PlanConfirm ({planBenefit, setDisplayConfirmation, setDisplaySubscriptions, buyPlan}) {

    function handleNoButton () {
        setDisplaySubscriptions(true);
        setDisplayConfirmation(false);

    }

    function handleYesButton () {
        setDisplaySubscriptions(true);
        setDisplayConfirmation(false);
        buyPlan();
    } 

    return (
        <ConfirmationContainer>
            <ExitIcon>
            <ion-icon name="close-circle-outline" onClick={() => handleNoButton()}></ion-icon>
            </ExitIcon>

            <BoxConfirmation>
                <p>Tem certeza que deseja assinar o plano {planBenefit.name} (R$ {planBenefit.price})?</p>

                <ButtonsConfirmation>
                    <NoButton onClick={() => handleNoButton()}>Não</NoButton>
                    <YesButton onClick={() => handleYesButton()}>Sim</YesButton>
                </ButtonsConfirmation>
            </BoxConfirmation>
        </ConfirmationContainer>
    )
}