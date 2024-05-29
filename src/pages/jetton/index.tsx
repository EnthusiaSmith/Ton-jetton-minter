import { ScreenContent, Screen } from "components/Screen";
import FaultyDeploy from "./FaultyDeploy";
import { StyledContainer } from "pages/jetton/styled";
import { Wallet } from "pages/jetton/wallet";
import { Token } from "pages/jetton/dataRow/token";

export const Jetton = () => {
  return (
    <Screen>
      <FaultyDeploy />
      <ScreenContent>
        <StyledContainer>
          <Token />
          <Wallet />
        </StyledContainer>
      </ScreenContent>
    </Screen>
  );
};
