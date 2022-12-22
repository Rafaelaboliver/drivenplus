import {ConfirmationContainer,ExitIcon, BoxConfirmation, ButtonsConfirmation, NoButton, YesButton} from './planConfirmCss';


export default function PlanConfirm () {
    return (
        <ConfirmationContainer>
            <ExitIcon>
            <ion-icon name="close-circle-outline"></ion-icon>
            </ExitIcon>

            <BoxConfirmation>
                <p>Tem certeza que deseja assinar o plano Driven Plus (R$ 39,99)?</p>

                <ButtonsConfirmation>
                    <NoButton>Não</NoButton>
                    <YesButton>Sim</YesButton>
                </ButtonsConfirmation>
            </BoxConfirmation>
        </ConfirmationContainer>
    )
}